import React from 'react'

import { Text, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import styles from './style'

const NavigationHeader = (props) =>
    <View style={styles.container}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Entypo name={props.leftIcon} size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>{props.title}</Text>
        <Entypo name="chevron-thin-right" size={24} color="white" />
    </View>

export default NavigationHeader