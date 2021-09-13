/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {useThemeContext} from '../context/theme/ThemeContext';

export const ItemSeparator = () => {
  const {
    theme: {divederColor},
  } = useThemeContext();
  return (
    <View
      style={{
        borderBottomWidth: 1,
        opacity: 0.4,
        marginVertical: 8,
        borderBottomColor: divederColor,
      }}
    />
  );
};
