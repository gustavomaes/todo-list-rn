import { colors, fonts, padding } from '../../styles/base.js'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        flexDirection: 'row',
        height: 75,
        backgroundColor: 'white',
        alignItems: 'center',
        borderTopColor: colors.grayLight,
        borderTopWidth: StyleSheet.hairlineWidth
    },
    rightSwipeItem: {
        flex: 1,
        width: 75,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secondary
    },
    icon: {
        marginLeft: padding.md,
    },
    textBox: {
        flex: 1
    },
    text: {
        fontSize: fonts.base,
        color: colors.grayDark,
        fontFamily: fonts.family,
        marginLeft: padding.md,
    },
    subText: {
        fontSize: fonts.md,
        color: colors.grayLight,
        fontFamily: fonts.family,
        marginLeft: padding.md
        
    }
})

export default styles