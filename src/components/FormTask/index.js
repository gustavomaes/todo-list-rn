import React from 'react'

import { TextInput, Text, View, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button'
import DateTimePicker from 'react-native-modal-datetime-picker'
import moment from 'moment';

import styles from './style'
import ContextAPI from '../../context/ContextAPI'

class FormTask extends React.Component {

    state = {
        isDateTimePickerVisible: false,
        dateTimeStr: '',
        dateTime: '',
        title: '',
        type: 0,
        warningTitle: false,
        warningDate: false
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

    _handleDatePicked = (date) => {
        this._hideDateTimePicker()

        const dateStr = moment(date).format("MMMM Do YYYY, h:mm:ss");
        this.setState({
            dateTime: date,
            dateTimeStr: dateStr
        })
    }

    addTask(context) {
        if (this.state.title === '' || this.state.dateTime === '') {
            let warningTitle = this.state.title === '' ? true : false
            let warningDate = this.state.dateTime === '' ? true : false
            
            this.setState({ warningTitle, warningDate })
            return
        }

        context.addTask({
            id: Date.now(),
            datetime: this.state.dateTime,
            title: this.state.title,
            type: this.state.type
        })
        this.props.navigation.goBack()
    }

    render() {
        let radio_props = [
            { label: 'Personal', value: 0 },
            { label: 'Business', value: 1 }
        ]
        return (
            <ContextAPI.Consumer>
                {context => (
                    <View style={styles.container}>
                        <FontAwesome name='pencil' size={60} style={styles.icon} />
                        <TextInput style={[styles.input, this.state.warningTitle ? styles.warning : '']} placeholder="Title" underlineColorAndroid='transparent' onChangeText={(text) => this.setState({ title: text })} />
                        <Text style={styles.label}>Task type</Text>
                        <RadioForm style={styles.radio}
                            radio_props={radio_props}
                            buttonColor={'#448aff'}
                            selectedButtonColor={'#448aff'}
                            buttonSize={17}
                            labelStyle={styles.labelRadio}
                            initial={this.state.type}
                            onPress={(value) => {
                                this.setState({ type: value })
                            }}
                        />

                        <TouchableOpacity onPress={this._showDateTimePicker}>
                            <Text style={[styles.inputDate, this.state.warningDate ? styles.warning : '']}>{this.state.dateTime === '' ? 'Show DatePicker' : this.state.dateTimeStr}</Text>
                        </TouchableOpacity>

                        <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            mode={'datetime'}
                            onConfirm={this._handleDatePicked}
                            onCancel={this._hideDateTimePicker}
                        />

                        <TouchableOpacity style={styles.button} onPress={() => this.addTask(context)}>
                            <Text style={styles.buttonText}>ADD TO MY LIST</Text>
                        </TouchableOpacity>


                    </View >
                )}
            </ContextAPI.Consumer>
        )
    }
}

export default FormTask