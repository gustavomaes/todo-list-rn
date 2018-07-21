import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Swipeable from 'react-native-swipeable';
import { Feather, FontAwesome } from '@expo/vector-icons';

import styles from './style'
import ContextAPI from '../../context/ContextAPI'

const ListItem = (props) =>
    <ContextAPI.Consumer>
        {context => (
            <Swipeable
                rightButtons={[
                    <TouchableOpacity style={styles.rightSwipeItem} onPress={() => {
                        context.deleteTask(props.idItem, props.idList)
                        props.onClose()
                    }}>
                        <FontAwesome name="trash-o" size={24} color="white" />
                    </TouchableOpacity>,
                    <TouchableOpacity style={styles.rightSwipeItem} onPress={() => {
                        context.checkTask(props.idItem, props.idList)
                        props.onOpen()
                    }}>
                        <Feather name="check" size={24} color="white" />
                    </TouchableOpacity>
                ]}
                onRightButtonsOpenRelease={props.onOpen}
                onRightButtonsCloseRelease={props.onClose}
            >
                <View style={styles.listItem}>
                    <Feather name="check" size={24} color={props.check ? "green" : "grey"} style={styles.icon} />
                    <View style={styles.textBox}>
                        <Text style={styles.text}>{props.item}</Text>
                        <Text style={styles.subText}>{props.date}</Text>
                    </View>
                </View>
            </Swipeable>
        )}
    </ContextAPI.Consumer>

export default ListItem