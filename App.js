import React, { Component } from 'react'
import Home from './src/screens/Home';
import { createStackNavigator } from 'react-navigation';
import moment from 'moment';

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
        update: false,
        days: {
            '2018-07-15T00:00:00-03:00': [
                day1 = {
                    time: 1,
                    title: 'Tarefa 01',
                    checked: true
                },
                day2 = {
                    time: 2,
                    title: 'Tarefa 02',
                    checked: false
                },
            ],
            '2018-07-16T00:00:00-03:00': [
                day1 = {
                    time: 1,
                    title: 'Tarefa 01',
                    checked: false
                },
                day2 = {
                    time: 2,
                    title: 'Tarefa 02',
                    checked: false
                },
            ]
        }
    }

    /*  Task
        - datetime
        - title
        - type
        - checked = false
    
    */
    addTask(task) {
        let day = moment(task.datetime)
        day.set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
        day.format()

        let days = this.state.days;
        // console.log(day)

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

        this.setState({days})

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