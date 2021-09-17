import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SimplePokemon} from '../interfaces/pokemonInterface';
import {PokemonScreen} from '../screens/PokemonScreen';
import {SearchScreen} from '../screens/SearchScreen';

export type RootStackParams = {
  SearchScreen: undefined;
  PokemonScreen: {
    simplePokemon: SimplePokemon;
    color: string;
  };
};

const TabStack = createStackNavigator<RootStackParams>();

export const TabStackNavigator = () => {
  return (
    <TabStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <TabStack.Screen name="SearchScreen" component={SearchScreen} />
      <TabStack.Screen name="PokemonScreen" component={PokemonScreen} />
    </TabStack.Navigator>
  );
};
