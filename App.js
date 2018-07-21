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
        this.checkTask = this.checkTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.setStatistics = this.setStatistics.bind(this)
        this.updateAsyncStorage = this.updateAsyncStorage.bind(this)
        
    }

    state = {
        storedValue: null,
        update: false,
        business: 0,
        personal: 0,
        complete: 0,
        days: {
        }
    }

    async componentDidMount() {

        try {
            let storedValue = await AsyncStorage.getItem("@MySuperStore:list");
            if (storedValue) {
                this.setState({ days: JSON.parse(storedValue) })
            }

            await this.setStatistics()
        } catch (error) { }

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
        let days = this.state.days;


        if (!Object.keys(days).includes(day.format('X'))) {
            days[day.format('X')] = [
                {
                    id: task.id,
                    time: taskTime,
                    title: task.title,
                    checked: false,
                    type: task.type
                }
            ]
        } else {
            days[day.format('X')].push({
                id: task.id,
                time: taskTime,
                title: task.title,
                checked: false,
                type: task.type
            })
        }

        await this.updateAsyncStorage(days)
        await this.setStatistics()
    }

    async checkTask(idItem, idList) {
        let days = this.state.days;
        days[idList].map(i => {
            if (i.id === idItem) {
                
                if(i.checked === true) {
                    i.checked = false
                }
                else {
                    i.checked = true
                }

                return
            }
        })

        await this.updateAsyncStorage(days)
    }

    async deleteTask(idItem, idList) {
        let days = this.state.days;
        await days[idList].map(i => {
            if (i.id === idItem) {
                let index = days[idList].indexOf(i)
                days[idList].splice(index, 1)

                if (days[idList].length === 0) {
                    delete days[idList]
                    this.setState({ days: days })      
                }

                return
            }
        })

        await this.updateAsyncStorage(days)
    }

    async setStatistics () {
        const days = this.state.days;
        let personal = 0
        let business = 0
        let count = 0
        let checked = 0
        let complete = 0

        await Object.keys(days).map(day => {
            days[day].map(task => {
                count ++
                if (task.checked) {
                    checked ++
                }

                if (task.type === 0) {
                    personal ++
                } else {
                    business ++
                }
            })
        })


        complete = Math.round((checked * 100) / count)
        if(count === 0) {
            complete = 0
        }
        this.setState({personal, business, complete})

    }

    async updateAsyncStorage(days) {
        try {
            let daysJson = await JSON.stringify(days)
            await AsyncStorage.setItem("@MySuperStore:list", daysJson)
            this.setState({ days: days })   
            await this.setStatistics()
        } catch (error) { }  
    }


    render() {
        return (
            <ContextAPI.Provider value={{
                state: this.state,
                addTask: this.addTask,
                checkTask: this.checkTask,
                deleteTask: this.deleteTask
            }}>
                <RootStack />
            </ContextAPI.Provider>
        );
    }
}