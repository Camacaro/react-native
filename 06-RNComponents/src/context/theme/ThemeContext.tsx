import React, {createContext, useContext, useEffect, useReducer} from 'react';
import {Appearance, AppState, useColorScheme} from 'react-native';
import {darkTheme, lightTheme, themeReducer, ThemeState} from './themeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

const ThemeContext = createContext({} as ThemeContextProps);

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({children}: any) => {
  const colorScheme = useColorScheme();

  // Solo funciona en IOS
  // const themeDefault = colorScheme === 'dark' ? darkTheme : lightTheme;

  const themeDefault =
    Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme;

  const [theme, dispatch] = useReducer(themeReducer, themeDefault);

  // Solo funciona en IOS
  // useEffect(() => {
  //   colorScheme === 'dark' ? setDarkTheme() : setLightTheme();
  // }, [colorScheme]);

  useEffect(() => {
    AppState.addEventListener('change', status => {
      if (status === 'active') {
        Appearance.getColorScheme() === 'dark'
          ? setDarkTheme()
          : setLightTheme();
      }
      console.log({status});
    });
  }, []);

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
    console.log('setDarkTheme');
  };

  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
    console.log('setLightTheme');
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setDarkTheme,
        setLightTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
