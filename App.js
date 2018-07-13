import React, { Component } from 'react'
import Home from './src/screens/Home';
import { createStackNavigator } from 'react-navigation';
import NewTodo from './src/screens/NewTodo';

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
    render() {
        return (
            <RootStack/> 
        );
    }
}