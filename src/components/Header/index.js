import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import moment from 'moment';

import background from '../../../assets/background.jpg'

import styles from './style'
import SideHeader from '../SideHeader';

const Header = () => 
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.cover}>
          <View style={styles.header}>
            <Text style={styles.heading}>Todo List</Text>
            <Text style={styles.subHeading}>{moment().format("MMM Do YY")}</Text>
          </View>
          <SideHeader />
        </ImageBackground>

      </View>

export default Header;