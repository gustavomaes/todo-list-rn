import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import ActionButton from 'react-native-action-button';

import styles from './style'

class FloatButton extends React.Component {
    render() {
        return (
            <ActionButton buttonColor="rgba(68, 138, 255, 1)" />
        )
    }
}

export default FloatButton;