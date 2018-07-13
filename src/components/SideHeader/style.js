import { StyleSheet } from 'react-native';

import {colors, fonts, padding} from '../../styles/base.js'

const panelStyles = StyleSheet.create({
  container: {
    flex: 1.4,
  },
  box: {
    flex: 1,
    alignItems: 'flex-end'
  },
  doneText: {
    color: colors.white,
    paddingBottom: padding.md,
    fontSize: fonts.md,
    fontFamily: fonts.family,
    marginRight: padding.md
  },
  countBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  count: {
    marginRight: padding.md
  },
  countText: {
    color: colors.white,
    fontSize: fonts.lg,
    fontFamily: fonts.family,
  },
  countSubText: {
    color: colors.white,
    fontSize: fonts.md,
    fontFamily: fonts.family,
  }
})

export default panelStyles