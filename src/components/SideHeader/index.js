import React from 'react'
import { Text, View } from 'react-native'
import { LinearGradient } from 'expo'

import ContextAPI from '../../context/ContextAPI'
import styles from './style'

const SideHeader = () =>
    <ContextAPI.Consumer>
        {context => (
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.7)']}
                style={styles.container}>

                <View style={styles.box}>
                    <View style={styles.countBox}>
                        <View style={styles.count}>
                            <Text style={styles.countText}>{context.state.personal}</Text>
                            <Text style={styles.countSubText}>Personal</Text>
                        </View>
                        <View style={styles.count}>
                            <Text style={styles.countText}>{context.state.business}</Text>
                            <Text style={styles.countSubText}>Business</Text>
                        </View>
                    </View>

                    <Text style={styles.doneText}>{context.state.complete}% done</Text>


                </View>
            </LinearGradient>
        )}
    </ContextAPI.Consumer>

export default SideHeader