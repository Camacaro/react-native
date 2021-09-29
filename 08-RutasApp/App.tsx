import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/navigator/stackNavigator';
import {PermissionsProvider} from './src/context/PermissionsContext';
/**
 * Warning with he project
 *  `new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method.
 *
 * Solution create a new projet with
 * npx react-native init AwesomeTSProject --template react-native-template-typescript@6.5.
 */

const AppState = ({children}: any) => {
  return <PermissionsProvider>{children}</PermissionsProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StackNavigator />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
