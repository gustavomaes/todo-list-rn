import React from 'react'

import {ScrollView, View} from 'react-native';
import { Font } from 'expo';

import Header from '../components/Header';
import ListItem from '../components/ListItem';

class Home extends React.Component {

    state = {
        fontLoaded: false,
        currentlyOpenSwipeable: null
    }

    async componentDidMount() {
        await Font.loadAsync({
            'helvetica': require('../../assets/fonts/Helvetica-Light.otf'),
        })
        this.setState({ fontLoaded: true })
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
            <View >

                <ScrollView onScroll={this.handleScroll}>
                    {
                        this.state.fontLoaded ? (
                            <Header />
                        ) : null
                    }
                    <ListItem {...itemProps} />
                    <ListItem {...itemProps} />
                    <ListItem {...itemProps} />
                    <ListItem {...itemProps} />
                    <ListItem {...itemProps} />
                    <ListItem {...itemProps} />
                    <ListItem {...itemProps} />
                </ScrollView>
            </View>
        )
    }
}

export default Home
