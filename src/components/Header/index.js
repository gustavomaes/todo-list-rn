import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import moment from 'moment';

import background from '../../../assets/background.jpg'

import styles from './style'
import SideHeader from '../SideHeader';

class Header extends React.Component {
  render() {
    let today = moment().format("MMM Do YY")
    return (
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.cover}>
          <View style={styles.header}>
            <Text style={styles.heading}>Todo List</Text>
            <Text style={styles.subHeading}>{today}</Text>
          </View>
          <SideHeader />
        </ImageBackground>

      </View>
    )
  }
}

export default Header;