import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {useWindowDimensions} from 'react-native';

/**
 * Aqui tambien se puede hacer lo mismo que se hizo en StackNavigator
 * para los params
 */
const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      // screenOptions={{drawerPosition: 'right'}}

      // Ocultar el bar donde esta icono de hamburguesa,
      // lo tengo de este modo para poder lanzarlo desde Pagina1Screen
      screenOptions={{
        headerShown: false,
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
