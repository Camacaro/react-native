import React, {FC} from 'react';
import {View, Text, StyleProp, ViewStyle, TextStyle} from 'react-native';

/**
 * Flex toma todo el tamaño posible
 * View: Contiene 0 px de ancho y alto
 */
export const HolaMundoScreen: FC = () => {
  const styleView: StyleProp<ViewStyle> = {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
  };

  const styleButton: StyleProp<TextStyle> = {
    fontSize: 45,
    textAlign: 'center',
  };

  return (
    <View style={styleView}>
      <Text style={styleButton}>Hola de HolaMundoScreen</Text>
    </View>
  );
};
