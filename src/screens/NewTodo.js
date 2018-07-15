import React from 'react'

import { View, StyleSheet } from 'react-native';
import NavigationHeader from '../components/NavigationHeader';
import FormTask from '../components/FormTask';

class NewTodo extends React.Component {

    state = {
        fontLoaded: false,
    }

    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <NavigationHeader title='Add New Task' leftIcon='chevron-thin-left' navigation={this.props.navigation}/>
                <FormTask />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
    }
});


export default NewTodo