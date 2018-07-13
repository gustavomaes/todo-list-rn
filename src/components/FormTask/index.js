import React from 'react'

import { TextInput, Text, View, Button, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button'
import DateTimePicker from 'react-native-modal-datetime-picker'

import styles from './style'

class FormTask extends React.Component {

    state = {
        isDateTimePickerVisible: false,
        dateTime: ''
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

    _handleDatePicked = (date) => {
        this.setState({ dateTime: date.toString()})
        this._hideDateTimePicker()
    }

    render() {
        let radio_props = [
            { label: 'Personal', value: 0 },
            { label: 'Business', value: 1 }
        ]
        return (
            <View style={styles.container}>

            </View >
        )
    }
}

export default FormTask