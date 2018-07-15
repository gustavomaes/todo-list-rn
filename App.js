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
        name: 'Gustavo 2',
        age: '24'
    }

    render() {
        return (
            <ContextAPI.Provider value={this.state}>
                <RootStack/> 
            </ContextAPI.Provider>
        );
    }
}