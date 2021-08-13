import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './src/navigator/StackNavigator';
// import {MenuLateralBasico} from './src/navigator/MenuLateralBasico';
import {MenuLateral} from './src/navigator/MenuLateral';
import {AuthProvider} from './src/context/AuthContext';
// import {Tabs} from './src/navigator/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <MenuLateral />
      </AppState>

      {/* <StackNavigator /> */}
      {/* <MenuLateralBasico /> */}
      {/* <MenuLateral /> */}

      {/* Demostrasion de solo los tabs, pero quiero mantener el drawe */}
      {/* <Tabs /> */}
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
