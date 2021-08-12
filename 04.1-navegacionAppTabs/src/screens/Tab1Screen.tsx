import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

export const Tab1Screen = () => {
  /**
   * Esto solo se dispara una vez, el drawer mantiene
   * activa la pagina por lo cual si salgo de la pagina
   * (ir a settings) y vuelvo no se ejecutara el efecto
   */
  useEffect(() => {
    console.log('Tab 1 Screen effect');
  }, []);

  return (
    <View>
      <Text> Tab1Screen </Text>
    </View>
  );
};
