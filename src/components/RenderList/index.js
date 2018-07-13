import React from 'react'
import { Text, View } from 'react-native'
import Swipeable from 'react-native-swipeable';

import styles from './style'
import ListItem from '../ListItem';

class RenderList extends React.Component {

    state = {
        currentlyOpenSwipeable: null
    }

    render() {

        const { currentlyOpenSwipeable } = this.state;
        const itemProps = {
            onOpen: (event, gestureState, swipeable) => {
                if (currentlyOpenSwipeable && currentlyOpenSwipeable !== swipeable) {
                    currentlyOpenSwipeable.recenter();
                }

                this.setState({ currentlyOpenSwipeable: swipeable });
            },
            onClose: () => this.setState({ currentlyOpenSwipeable: null })
        }

        return (
            <View>
                <View>
                    <View style={styles.header}>
                        <Text style={styles.title}>TODAY</Text>
                        <Text style={styles.subtitle}>2018-10-11</Text>
                    </View>

                    <ListItem {...itemProps} item='Coffe with Lisa' date='18:35' check={true}/>
                    <ListItem {...itemProps} item='Shop for dinner' date='20:00' />
                    <ListItem {...itemProps} item='Call Uber' date='10:31' />
                    <ListItem {...itemProps} item='FIP' date='11:00' />
                    <ListItem {...itemProps} item='Go to Home' date='15:06' />
                    <ListItem {...itemProps} item='Travel to JGS' date='21:00' />
                </View>
                <View>
                    <View style={styles.header}>
                        <Text style={styles.title}>TOMORROW</Text>
                        <Text style={styles.subtitle}>2018-10-11</Text>
                    </View>

                    <ListItem {...itemProps} item='Coffe with Lisa' date='18:35' />
                    <ListItem {...itemProps} item='Shop for dinner' date='20:00' />
                    <ListItem {...itemProps} item='Call Uber' date='10:31' />
                    <ListItem {...itemProps} item='FIP' date='11:00' />
                    <ListItem {...itemProps} item='Go to Home' date='15:06' />
                    <ListItem {...itemProps} item='Travel to JGS' date='21:00' />
                </View>
            </View>
        )
    }
}

export default RenderList