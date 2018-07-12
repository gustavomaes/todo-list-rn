import { Dimensions } from 'react-native'

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}
  
export const colors  = {
  primary: '#226B74',
  secondary: '#254B5A',
  tertiary: '#5DA6A7',

  white: '#f0f0ed'
}

export const padding = {
  sm: 10,
  md: 20,
  lg: 40,
  xl: 60
}

export const fonts = {
  sm: 10,
  md: 13,
  lg: 20,
  xl: 27,

  family: 'helvetica'
}