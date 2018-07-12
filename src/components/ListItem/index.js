import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Swipeable from 'react-native-swipeable';

import styles from './style'

class ListItem extends React.Component {
    render() {
        return (
            <Swipeable
                rightButtons={[
                    <TouchableOpacity style={[styles.rightSwipeItem, { backgroundColor: 'salmon' }]}>
                        <Text>1</Text>
                    </TouchableOpacity>,
                    <TouchableOpacity style={[styles.rightSwipeItem, { backgroundColor: 'salmon' }]}>
                        <Text>2</Text>
                    </TouchableOpacity>
                ]}
                onRightButtonsOpenRelease={this.props.onOpen}
                onRightButtonsCloseRelease={this.props.onClose}
            >
                <View style={[styles.listItem, { backgroundColor: 'white' }]}>
                    <Text>Example 1</Text>
                </View>
            </Swipeable>
        )
    }
}

export default ListItem;