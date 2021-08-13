import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {styles, colors} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Tab1Screen = () => {
  const {top} = useSafeAreaInsets();
  /**
   * Esto solo se dispara una vez, el drawer mantiene
   * activa la pagina por lo cual si salgo de la pagina
   * (ir a settings) y vuelvo no se ejecutara el efecto
   */
  useEffect(() => {
    console.log('Tab 1 Screen effect');
  }, []);

  return (
    <View
      style={{
        ...styles.globalMargin,
        marginTop: top + 10,
      }}>
      <Text style={styles.title}> Iconos </Text>

      <Text>
        <Icon name="airplane-outline" size={50} color={colors.primary} />
        <Icon name="aperture-outline" size={50} color={colors.primary} />
        <Icon name="arrow-redo-outline" size={50} color={colors.primary} />
        <Icon name="balloon-outline" size={50} color={colors.primary} />
        <Icon name="baseball-outline" size={50} color={colors.primary} />
        <Icon name="bandage-outline" size={50} color={colors.primary} />
        <Icon name="cloud-outline" size={50} color={colors.primary} />
        <Icon name="bookmarks-outline" size={50} color={colors.primary} />
        <Icon name="calculator-outline" size={50} color={colors.primary} />
        <Icon name="contrast-outline" size={50} color={colors.primary} />
        <Icon name="cash-outline" size={50} color={colors.primary} />
      </Text>
    </View>
  );
};
