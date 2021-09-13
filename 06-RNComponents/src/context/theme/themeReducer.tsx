import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'set_light_theme'} | {type: 'set_dark_theme'};

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  divederColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  divederColor: 'rgba(0,0,0,0.6)',
  dark: false, // Este valor es del navigator
  colors: {
    // Este valor es del navigator
    primary: '#084F6A',
    background: 'white',
    card: 'white',
    text: 'black',
    border: 'black',
    notification: 'teal',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  divederColor: 'rgba(255,255,255,0.6)',
  dark: true, // Este valor es del navigator
  colors: {
    // Este valor es del navigator
    primary: '#67b4c0',
    background: 'black',
    card: 'black',
    text: 'white',
    border: 'black',
    notification: 'teal',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return {...lightTheme};

    case 'set_dark_theme':
      return {...darkTheme};

    default:
      return state;
  }
};
