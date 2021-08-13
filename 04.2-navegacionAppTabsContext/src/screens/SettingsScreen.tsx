import React from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';

export const SettingsScreen = () => {
  /**
   * Esto se usa para poder crear una separacion con el
   * bar o touch bar del telefono (el espacio negro entre la pantalla)
   * SE LLAMA NOTCH
   * y no se vea feo, es un hook que ya me da el espacio necesario
   * para la separacion
   */
  const insets = useSafeAreaInsets();

  return (
    <View style={{...styles.globalMargin, marginTop: insets.top + 20}}>
      <Text style={styles.title}> Settings Screen </Text>
    </View>
  );
};
