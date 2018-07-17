import React from 'react'
import { Text, View } from 'react-native'
import Swipeable from 'react-native-swipeable';

import styles from './style'
import ListItem from '../ListItem';
import ContextAPI from '../../context/ContextAPI'

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
            <ContextAPI.Consumer>
                {context => (
                    <View>
                        <View style={styles.header}>
                            <Text style={styles.title}>TODAY</Text>
                            <Text style={styles.subtitle}>2018-10-11</Text>
                        </View>

                        {
                            context.state.days[this.props.day].map(task => {
                                return <ListItem {...itemProps} item={task.title} date='18:35' check={task.checked} key={task.time}/>
                            })
                        }
                        
                    </View>
                )}
            </ContextAPI.Consumer>
        )
    }
}

export default RenderList