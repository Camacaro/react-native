import 'react-native-gesture-handler';

import React from 'react';
import {DefaultTheme, DarkTheme, NavigationContainer, Theme} from '@react-navigation/native';
import {StackNavigator} from './src/navigator/StackNavigator';

const customTheme: Theme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    // primary: '',
    // background: 'grey',
    // card: '',
    // text: '',
    // border: '',
    // notification: '',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={customTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
