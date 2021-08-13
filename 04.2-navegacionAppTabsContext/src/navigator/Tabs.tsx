/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Tab1Screen} from '../screens/Tab1Screen';
import {Tab2Screen} from '../screens/Tab2Screen';
// import {Tab3Screen} from '../screens/Tab3Screen';
import {StackNavigator} from './StackNavigator';
import {colors} from '../theme/appTheme';
import {Platform, Text} from 'react-native';
import {TopTabNavigator} from './TopTabNavigator';

/**
 *
 * La animacion entre tabs en diferente entre ios y android
  en ios es mas natural pero para android no, hay que usar unas
  libreria para darle esa naturalidad
  Por eso vamos a crear un diferencia entre TAbs para colocarle
  la animacion
 */

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

// ========================== ndroid ====================
const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colors.primary,
      }}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 17,
        },
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'add-circle-outline';
              break;

            case 'Tab2Screen':
              // iconName = 'T2';
              iconName = 'bookmark-outline';
              break;

            case 'StackNavigator':
              // iconName = 'ST';
              iconName = 'people-outline';
              break;
          }
          // <Text style={{color}}>{iconName}</Text>;
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
        }}
        component={Tab1Screen}
      />
      <BottomTabAndroid.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        // component={Tab2Screen}
        component={TopTabNavigator}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        // component={Tab3Screen}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};

// ========================== IOS ====================
const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      // screenOptions={{
      //   headerShown: false,
      //   tabBarActiveTintColor: colors.primary,
      //   tabBarStyle: {
      //     borderTopColor: colors.primary,
      //     borderTopWidth: 0,
      //     elevation: 0,
      //   },
      //   tabBarLabelStyle: {
      //     fontSize: 17,
      //   },
      // }}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 17,
        },
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'add-circle-outline';
              break;

            case 'Tab2Screen':
              // iconName = 'T2';
              iconName = 'bookmark-outline';
              break;

            case 'StackNavigator':
              // iconName = 'ST';
              iconName = 'people-outline';
              break;
          }
          // return <Text style={{color}}>{iconName}</Text>;
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      {/* Agregar icon desde el screen */}
      {/* <Tab.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
          tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        }}
        component={Tab1Screen}
      /> */}
      <BottomTabIOS.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
        }}
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        // component={Tab2Screen}
        component={TopTabNavigator}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};
