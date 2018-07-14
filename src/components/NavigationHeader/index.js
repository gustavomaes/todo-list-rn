import React from 'react'

import { Text, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import styles from './style'

class NavigationHeader extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Entypo name={this.props.leftIcon} size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>{this.props.title}</Text>
                <Entypo name="chevron-thin-right" size={24} color="white" />
            </View>
        )
    }
}

export default NavigationHeader