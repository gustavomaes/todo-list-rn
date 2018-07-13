import { colors, fonts, padding, dimensions } from '../../styles/base.js'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: padding.lg,
        paddingLeft: padding.md,        
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: fonts.lg,
        color: colors.primary,
        fontFamily: fonts.family,
        textAlign: 'center'
    }
})

export default styles