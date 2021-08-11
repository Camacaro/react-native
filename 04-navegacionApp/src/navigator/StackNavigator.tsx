import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Pagina1Screen} from '../screens/Pagina1Screen';
import {Pagina2Screen} from '../screens/Pagina2Screen';
import {Pagina3Screen} from '../screens/Pagina3Screen';

const Stack = createNativeStackNavigator();
/**
 * initialRouteName, sirve para decir en cual componente vas a empezar
 * y no agarre el de la primera lista
 */
export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Pagina2Screen"
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="Pagina1Screen"
        options={{title: 'Página 1'}}
        component={Pagina1Screen}
      />
      <Stack.Screen
        name="Pagina2Screen"
        options={{title: 'Página 2'}}
        component={Pagina2Screen}
      />
      <Stack.Screen
        name="Pagina3Screen"
        options={{title: 'Página 3'}}
        component={Pagina3Screen}
      />
    </Stack.Navigator>
  );
};
