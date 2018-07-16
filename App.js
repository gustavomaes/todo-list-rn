import React, { Component } from 'react'
import Home from './src/screens/Home';
import { createStackNavigator } from 'react-navigation';
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

    state = {
        days: {
            1: [
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
            2: [
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

    changeName(name) {
        this.setState({name})
    }
    render() {
        return (
            <ContextAPI.Provider value={this.state}>
                <RootStack/> 
            </ContextAPI.Provider>
        );
    }
}