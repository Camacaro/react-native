/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackNavigator} from './StackNavigator';
import {Platform} from 'react-native';
import {TabStackNavigator} from './TabStackNavigator';
// import { SearchScreen } from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        activeTintColor: '#5856D6',
        labelStyle: {
          marginBottom: Platform.OS === 'ios' ? 0 : 10,
        },
        style: {
          borderWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 80 : 60,
          // Apesar de que visualmente no se note el cambio esto hace
          // que sus hijos piensen que no existe el tab por lo cual
          // les permite expandirse en su totalidad, y nos deja poner
          // el fondo en transparente porque es como si no hubiera nada atras
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.9)',
        },
      }}>
      <Tab.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{
          tabBarLabel: 'Listado',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={25} name="list-outline" />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        // Aqui hago este cambio es para que cuando este dentro del SearchScreen
        // y vaya a los detalles del pokemon (PokemonScreen), me mantenga este
        // tab activo y al devolverme me devuelva hacia SearchScreen y no al
        // Listado (HomeScreen)
        // component={SearchScreen}
        component={TabStackNavigator}
        options={{
          tabBarLabel: 'Busqueda',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={25} name="search-outline" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
