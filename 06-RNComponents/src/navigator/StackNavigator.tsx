import React from 'react';
import {
  DefaultTheme,
  DarkTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useThemeContext} from '../context/theme/ThemeContext';

import {HomeScreen} from '../screens/HomeScreen';
import {Animation101Screen} from '../screens/Animation101Screen';
import {Animation102Screen} from '../screens/Animation102Screen';
import {SwitchScreen} from '../screens/SwitchScreen';
import {AlertScreen} from '../screens/AlertScreen';
import {TextInputScreen} from '../screens/TextInputScreen';
import {PullToRefreshScreen} from '../screens/PullToRefreshScreen';
import {SectionListScreen} from '../screens/SectionListScreen';
import {ModalScreen} from '../screens/ModalScreen';
import {InfiniteScrollScreen} from '../screens/InfiniteScrollScreen';
import {SlideScreen} from '../screens/SlideScreen';
import {ChangeThemeScreen} from '../screens/ChangeThemeScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  Animation101Screen: undefined;
  Animation102Screen: undefined;
  SwitchScreen: undefined;
  AlertScreen: undefined;
  TextInputScreen: undefined;
  PullToRefreshScreen: undefined;
  SectionListScreen: undefined;
  ModalScreen: undefined;
  InfiniteScrollScreen: undefined;
  SlideScreen: undefined;
  ChangeThemeScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const customTheme: Theme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    ...DarkTheme.colors,
    // primary: '',
    // background: 'grey',
    // card: '',
    // text: '',
    // border: '',
    // notification: '',
  },
};

export const StackNavigator = () => {
  const {theme} = useThemeContext();

  return (
    <NavigationContainer
      theme={theme}
      // theme={customTheme}
    >
      <Stack.Navigator
        screenOptions={{
          // contentStyle => cardStyle
          contentStyle: {
            // backgroundColor: 'white',
          },
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
        <Stack.Screen name="AlertScreen" component={AlertScreen} />
        <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
        <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
        <Stack.Screen name="ModalScreen" component={ModalScreen} />
        <Stack.Screen name="SlideScreen" component={SlideScreen} />
        <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
        <Stack.Screen
          name="Animation101Screen"
          component={Animation101Screen}
        />
        <Stack.Screen
          name="Animation102Screen"
          component={Animation102Screen}
        />
        <Stack.Screen
          name="InfiniteScrollScreen"
          component={InfiniteScrollScreen}
        />
        <Stack.Screen
          name="PullToRefreshScreen"
          component={PullToRefreshScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
