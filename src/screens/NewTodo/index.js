import React from 'react'

import { View, StatusBar } from 'react-native';
import NavigationHeader from '../../components/NavigationHeader';
import FormTask from '../../components/FormTask';

import styles from './style'

class NewTodo extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='dark-content'/>            
                <NavigationHeader title='Add New Task' leftIcon='chevron-thin-left' navigation={this.props.navigation}/>
                <FormTask navigation={this.props.navigation}/>
            </View>
        )
    }
}

export default NewTodo