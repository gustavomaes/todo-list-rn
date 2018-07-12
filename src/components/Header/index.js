import React from 'react'
import { StyleSheet, ImageBackground, Text, View } from 'react-native'
import { Font, LinearGradient } from 'expo'

import background from '../../../assets/background.jpg'

import styles from './style'
import SideHeader from '../SideHeader';

class Header extends React.Component {

  async componentDidMount() {
    // await Font.loadAsync({
    //   'helvetica': require('../../../assets/fonts/Helvetica-Light.otf'),
    // })

    // this.setState({ fontLoaded: true })
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.cover}>
          <View style={styles.header}>
            <Text style={styles.heading}>Todo List</Text>
            <Text style={styles.subHeading}>12 July 2018</Text>
          </View>
          <SideHeader />
        </ImageBackground>

      </View>
    )
  }
}

export default Header;