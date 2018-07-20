import { Dimensions } from 'react-native'

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}
  
export const colors  = {
  primary: '#448aff',
  primaryLight: '#c0caff',
  secondary: '#e57373',

  white: '#f0f0ed',
  gray: '#c2c2c2',
  grayLight: '#d3d3d3',
  grayDark: '#414141',

  warning: '#CC0000'
}

export const padding = {
  mc: 5,
  sm: 10,
  md: 20,
  lg: 40,
  xl: 60
}

export const fonts = {
  sm: 10,
  md: 13,
  base: 16,
  lg: 20,
  xl: 27,

  family: 'helvetica'
}