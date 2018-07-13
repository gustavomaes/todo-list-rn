import React from 'react'

import { ScrollView, View } from 'react-native';
import { Font } from 'expo';

import Header from '../components/Header';
import RenderList from '../components/RenderList';
import FloatButton from '../components/FloatButton';

class Home extends React.Component {

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
            <View >

                <ScrollView onScroll={this.handleScroll}>
                    {
                        this.state.fontLoaded ? (
                            <View>
                                <Header />
                                <RenderList />
                            </View>
                        ) : null
                    }


                </ScrollView>
                <FloatButton />
            </View>
        )
    }
}

export default Home
