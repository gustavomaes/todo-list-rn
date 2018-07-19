import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Swipeable from 'react-native-swipeable';
import { Feather, FontAwesome } from '@expo/vector-icons';

import styles from './style'
import ContextAPI from '../../context/ContextAPI'

class ListItem extends React.Component {
    render() {
        const color = this.props.check ? "green" : "grey"

        return (
            <ContextAPI.Consumer>
                {context => (
                    <Swipeable
                        rightButtons={[
                            <TouchableOpacity style={styles.rightSwipeItem} onPress={() => {
                                context.deleteTask(this.props.idItem, this.props.idList)
                                this.props.onClose()
                            }}>
                                <FontAwesome name="trash-o" size={24} color="white" />
                            </TouchableOpacity>,
                            <TouchableOpacity style={styles.rightSwipeItem} onPress={() => {
                                context.checkTask(this.props.idItem, this.props.idList)
                                this.props.onOpen()
                            }}>
                                <Feather name="check" size={24} color="white" />
                            </TouchableOpacity>
                        ]}
                        onRightButtonsOpenRelease={this.props.onOpen}
                        onRightButtonsCloseRelease={this.props.onClose}
                    >
                        <View style={styles.listItem}>
                            <Feather name="check" size={24} color={color} style={styles.icon} />
                            <View style={styles.textBox}>
                                <Text style={styles.text}>{this.props.item}</Text>
                                <Text style={styles.subText}>{this.props.date}</Text>
                            </View>
                        </View>
                    </Swipeable>
                )}
            </ContextAPI.Consumer>
        )
    }
}

export default ListItem;