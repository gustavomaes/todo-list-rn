import React from 'react'
import { Text, View } from 'react-native'
import { LinearGradient } from 'expo'

import styles from './style'

class SideHeader extends React.Component {
  async componentDidMount() {
    // await Font.loadAsync({
    //   'helvetica': require('../../../assets/fonts/Helvetica-Light.otf'),
    // })

    // this.setState({ fontLoaded: true })
  }

  render() {
    return (
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.7)']}
        style={styles.container}>

        <View style={styles.box}>
          <View style={styles.countBox}>
            <View style={styles.count}>
              <Text style={styles.countText}>12</Text>
              <Text style={styles.countSubText}>Personal</Text>
            </View>
            <View style={styles.count}>
              <Text style={styles.countText}>23</Text>
              <Text style={styles.countSubText}>Business</Text>
            </View>
          </View>

          <Text style={styles.doneText}>70% done</Text>


        </View>
      </LinearGradient>

    )
  }
}

export default SideHeader;