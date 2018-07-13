import { colors, fonts, padding, dimensions } from '../../styles/base.js'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
        marginLeft: padding.md,
        marginBottom: padding.mc,
        marginTop: padding.md
    },
    title: {
        fontSize: fonts.base,
        color: colors.primary,
        fontFamily: fonts.family,

    },
    subtitle: {
        fontSize: fonts.md,
        color: colors.grayLight,
        fontFamily: fonts.family,
        marginLeft: fonts.sm

    }
})

export default styles