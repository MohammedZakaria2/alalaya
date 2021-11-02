import Cookies from 'js-cookie';
let theme = Cookies.get('theme') || 'light';

export const colors = {
  white: theme === 'light' ? 'rgb(255, 255, 255)' : '#242526',
  bg: theme === 'light' ? '#f0f0f6' : '#18191A',
  bgDarker: theme === 'light' ? '#E4E6EB' : '#FFFFFF',
  bars: theme === 'light' ? '#F0F0F6' : '#FFFFFF',
  primary: '#FFB400',
  gray: theme === 'light' ? '#767676' : '#FFFFFF',
  black: theme === 'light' ? '#18191A' : '#FFFFFF',
  dark: theme === 'light' ? '#3A3B3C' : '#FFFFFF',
  darker: theme === 'light' ? '#2B2B2B' : '#FFFFFF',
  darkest: theme === 'light' ? '#242526' : '#FFFFFF',
};
