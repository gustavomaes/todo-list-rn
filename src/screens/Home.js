import React from 'react'

import { ScrollView, View, Text } from 'react-native';
import { Font } from 'expo';

import Header from '../components/Header';
import RenderList from '../components/RenderList';
import FloatButton from '../components/FloatButton';

import ContextAPI from '../context/ContextAPI'


class Home extends React.Component {

    static navigationOptions = {
        header: null,
        headerMode: 'none'
    };

    state = {
        fontLoaded: false,
    }

    async componentDidMount() {
        await Font.loadAsync({
            'helvetica': require('../../assets/fonts/Helvetica-Light.otf'),
        })
        this.setState({ fontLoaded: true })
    }

    render() {
        return (
            <ContextAPI.Consumer>
                {context => (
                    <View style={{ backgroundColor: '#FFF' }}>
                        <ScrollView onScroll={this.handleScroll}>
                            {
                                this.state.fontLoaded ? (
                                    <View>
                                        <Header />
                                        {console.log(context)}
                                        <RenderList />
                                    </View>
                                ) : null
                            }


                        </ScrollView>
                        <FloatButton onPress={() => this.props.navigation.navigate('NewTodo')} />
                    </View>
                )}
            </ContextAPI.Consumer>
        )
    }
}

export default Home
