/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';

interface IProps {
  text: string;
  color?: string;
  ancho?: boolean;
  action: (numeroText: string) => void;
}

export const BotonCalc = ({text, color, ancho = false, action}: IProps) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.boton,
          ...(color && {backgroundColor: color}),
          ...(ancho && {width: 180}),
        }}>
        <Text
          style={{
            ...styles.botonText,
            color: color === '9B9B9B' ? 'black' : 'white',
          }}>
          {' '}
          {text}{' '}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
