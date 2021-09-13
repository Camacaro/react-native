import 'react-native-gesture-handler';

import React from 'react';
import {StackNavigator} from './src/navigator/StackNavigator';
import {ThemeProvider} from './src/context/theme/ThemeContext';

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const App = () => {
  return (
    <AppState>
      <StackNavigator />
    </AppState>
  );
};

export default App;
