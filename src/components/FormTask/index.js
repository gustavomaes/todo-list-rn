import React from 'react'

import { TextInput, View, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import styles from './style'

class FormTask extends React.Component {
    render() {
        var radio_props = [
            {label: 'Personal', value: 0 },
            {label: 'Business', value: 1 }
          ];
        return (
            <View style={styles.container}>
                <FontAwesome name='pencil' size={60} style={styles.icon} />
                <TextInput style={styles.input} placeholder="Title" underlineColorAndroid='transparent' />
                <TextInput style={styles.input} placeholder="Description" underlineColorAndroid='transparent' />
                <TextInput style={styles.input} placeholder="Task type" underlineColorAndroid='transparent' />
                <RadioForm style={styles.radio}
                    radio_props={radio_props}
                    buttonColor={'#448aff'}
                    buttonSize={17}
                    labelStyle={styles.labelRadio}
                    initial={0}
                    onPress={(value) => { this.setState({ value: value }) }}
                />
                <TextInput style={styles.input} placeholder="Time" underlineColorAndroid='transparent' />
                <Button title='ADD TO MY LIST' onPress={() => { }} />
            </View >
        )
    }
}

export default FormTask