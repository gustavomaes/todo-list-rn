import React from 'react'

import { ScrollView, View } from 'react-native';
import { Font } from 'expo';

import Header from '../components/Header';
import RenderList from '../components/RenderList';
import FloatButton from '../components/FloatButton';

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
            <View style={{backgroundColor: '#FFF'}}>

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
                <FloatButton onPress={() => this.props.navigation.navigate('NewTodo')} />
            </View>
        )
    }
}

export default Home
