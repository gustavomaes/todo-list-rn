import React from 'react'
import { Text, View } from 'react-native'
import Swipeable from 'react-native-swipeable';

import styles from './style'
import ListItem from '../ListItem';
import ContextAPI from '../../context/ContextAPI'
import moment from 'moment';

class RenderList extends React.Component {

    state = {
        day: '',
        calendar: '',
        currentlyOpenSwipeable: null
    }

    componentDidMount() {
        const day = moment.unix(this.props.day).format("MMM Do YY")

        const calendar = moment.unix(this.props.day).calendar(null, {
            sameDay: '[Today]',
            nextDay: '[Tomorrow]',
            nextWeek: 'dddd',
            lastDay: '[Yesterday]',
            lastWeek: '[Last] dddd',
            sameElse: 'DD/MM/YYYY'
        })
        this.setState({ day, calendar })
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
                            <Text style={styles.title}>{this.state.calendar}</Text>
                            <Text style={styles.subtitle}>{this.state.day}</Text>
                        </View>

                        {
                            context.state.days[this.props.day]
                                .sort(function (a, b) { return a.time - b.time })
                                .map(task => {
                                    return <ListItem {...itemProps} item={task.title} date={moment.unix(task.time).format('LT')} check={task.checked} key={task.id} idList={this.props.day} idItem={task.id} />
                                })
                        }

                    </View>
                )}
            </ContextAPI.Consumer>
        )
    }
}

export default RenderList