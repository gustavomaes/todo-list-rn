import React from 'react'

import { TextInput, Text, View, TouchableOpacity } from 'react-native'
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
        this.setState({ dateTime: date.toString() })
        this._hideDateTimePicker()
    }

    render() {
        let radio_props = [
            { label: 'Personal', value: 0 },
            { label: 'Business', value: 1 }
        ]
        return (
            <View style={styles.container}>
                <FontAwesome name='pencil' size={60} style={styles.icon} />
                <TextInput style={styles.input} placeholder="Title" underlineColorAndroid='transparent' />
                <TextInput style={styles.input} placeholder="Description" underlineColorAndroid='transparent' />
                <Text style={styles.label}>Task type</Text>
                <RadioForm style={styles.radio}
                    radio_props={radio_props}
                    buttonColor={'#448aff'}
                    selectedButtonColor={'#448aff'}
                    buttonSize={17}
                    labelStyle={styles.labelRadio}
                    initial={0}
                    onPress={(value) => { this.setState({ value: value }) }}
                />

                <TouchableOpacity onPress={this._showDateTimePicker}>
                    <Text style={styles.inputDate}>Show DatePicker</Text>
                </TouchableOpacity>

                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    mode={'datetime'}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                />

                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={styles.buttonText}>ADD TO MY LIST</Text>                    
                </TouchableOpacity>

            </View >
        )
    }
}

export default FormTask