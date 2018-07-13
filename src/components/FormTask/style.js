import { colors, fonts, padding, dimensions } from '../../styles/base.js'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    },
    icon: {
        textAlign: 'center',
        color: colors.primary,
        marginTop: padding.xl,
        marginBottom: padding.md
    },
    label: {
        fontSize: fonts.base,
        fontFamily: fonts.family,
        width: 300,
        color: colors.gray,
        marginBottom: padding.md
    },
    input: {
        fontSize: fonts.base,
        fontFamily: fonts.family,
        width: 300,

        marginBottom: padding.md,
        color: colors.primary,

        borderBottomColor: colors.primary, 
        borderBottomWidth: .5
    },
    inputDate: {
        fontSize: fonts.base,
        fontFamily: fonts.family,
        width: 300,

        marginBottom: padding.md,
        color: colors.gray,

        borderBottomColor: colors.primary, 
        borderBottomWidth: .5
    },
    labelRadio: {
        fontSize: fonts.base,
        fontFamily: fonts.family,
        width: 266,
        color: colors.gray,

    },
    radio: {
        borderBottomColor: colors.primary,
        borderBottomWidth: .5,
        marginBottom: padding.lg,
    }
})

export default styles