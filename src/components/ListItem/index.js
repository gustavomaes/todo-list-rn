import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Swipeable from 'react-native-swipeable';
import { Feather, FontAwesome } from '@expo/vector-icons';

import styles from './style'

class ListItem extends React.Component {
    render() {
        const color = this.props.check ? "green" : "grey"

        return (
            <Swipeable
                rightButtons={[
                    <TouchableOpacity style={styles.rightSwipeItem}>
                        <FontAwesome name="trash-o" size={24} color="white"/>
                    </TouchableOpacity>,
                    <TouchableOpacity style={styles.rightSwipeItem}>
                        <Feather name="check" size={24} color="white" />
                    </TouchableOpacity>
                ]}
                onRightButtonsOpenRelease={this.props.onOpen}
                onRightButtonsCloseRelease={this.props.onClose}
            >
                <View style={styles.listItem}>
                    <Feather name="check" size={24} color={color}  style={styles.icon}/>
                    <View style={styles.textBox}>
                        <Text style={styles.text}>{this.props.item}</Text>
                        <Text style={styles.subText}>{this.props.date}</Text>
                    </View>
                </View>
            </Swipeable>
        )
    }
}

export default ListItem;