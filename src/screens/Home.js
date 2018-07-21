import React from 'react'

import { ScrollView, View, Text, StatusBar } from 'react-native';
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
                    <View style={{ backgroundColor: '#FFF', flex: 1 }}>
                        <StatusBar barStyle='light-content'/>
                        <ScrollView  onScroll={this.handleScroll}>
                            {
                                this.state.fontLoaded ? (
                                    <View>
                                        <Header />
                                        {Object.keys(context.state.days).map( day => {
                                            
                                            return <RenderList key={day} day={day}/>
                                        })}
                                        
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
