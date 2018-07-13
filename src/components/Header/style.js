import { colors, fonts, padding, dimensions } from '../../styles/base.js'
import { StyleSheet } from 'react-native';

const panelStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch"
  },
  cover: {
    flex: 1,
    flexDirection: 'row',
    width: null,
    height: 200
  },
  header: {
    flex: 2,
    paddingTop: padding.xl,
    justifyContent: 'space-between',

  },
  heading: {
    color: colors.white,
    paddingLeft: padding.md,
    fontSize: fonts.xl,
    fontFamily: fonts.family
  },
  subHeading: {
    color: colors.white,
    paddingBottom: padding.md,
    paddingLeft: padding.md,
    fontSize: fonts.md,
    fontFamily: fonts.family,
  }
})

export default panelStyles