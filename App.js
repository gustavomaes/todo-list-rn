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
        let storedValue = await AsyncStorage.getItem("@MySuperStore:key");
        if (storedValue) {
            this.setState({days: JSON.parse(storedValue)})
        }

        console.log("Fetched data: ", storedValue);
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
        day.format()

        let days = this.state.days;

        if (!Object.keys(days).includes(day.format())) {
            days[day.format()] = [
                {
                    time: task.datetime,
                    title: task.title,
                    checked: false
                }
            ]
        } else {
            days[day.format()].push({
                time: task.datetime,
                title: task.title,
                checked: false
            })
        }

        try {
            this.setState({ days })
            await AsyncStorage.setItem('@Store:list', this.state.days);
        } catch (error) {
            console.log(error)
        }


        let storedValue = this.setState.storedValue
        if (storedValue == null) {
            console.log("Writing data!");
            storedValue = await AsyncStorage.setItem("@MySuperStore:key", JSON.stringify(days));
        }

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