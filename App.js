import React, { Component } from 'react'
import Home from './src/screens/Home';
import { createStackNavigator } from 'react-navigation';
import moment from 'moment';
import { AsyncStorage } from "react-native"

import NewTodo from './src/screens/NewTodo';
import ContextAPI from './src/context/ContextAPI'

const RootStack = createStackNavigator(
    {
        Home: Home,
        NewTodo: NewTodo,
    },
    {
        initialRouteName: 'Home',
    }
);

export default class App extends Component {

    constructor(props) {
        super(props)

        this.addTask = this.addTask.bind(this)
    }

    state = {
        storedValue: null,
        update: false,
        days: {
        }
    }

    async componentDidMount() {

        try {
            let storedValue = await AsyncStorage.getItem("@MySuperStore:list");
            if (storedValue) {
                this.setState({ days: JSON.parse(storedValue) })
            }

            console.log("Fetched data: ", storedValue);
        } catch (error) {
            console.log('error: ' + error)
        }

    }



    /*  Task
        - datetime
        - title
        - type
        - checked = false
    
    */
    async addTask(task) {
        let day = moment(task.datetime)
        day.set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
        day.format('X')

        let taskTime = moment(task.datetime).format('X')
        console.log('task time: ' + taskTime)
        let days = this.state.days;


        if (!Object.keys(days).includes(day.format('X'))) {
            days[day.format('X')] = [
                {
                    time: taskTime,
                    title: task.title,
                    checked: false
                }
            ]
        } else {
            console.log(days)
            console.log(day)
            console.log(day.format('X'))
            days[day.format('X')].push({
                time: taskTime,
                title: task.title,
                checked: false
            })
        }

        try {
            let daysJson = await JSON.stringify(days)
            await AsyncStorage.setItem("@MySuperStore:list", daysJson);
            this.setState({ days: days })            
        } catch (error) { console.log('error: ' + error) }


    }

    render() {
        return (
            <ContextAPI.Provider value={{
                state: this.state,
                addTask: this.addTask
            }}>
                <RootStack />
            </ContextAPI.Provider>
        );
    }
}