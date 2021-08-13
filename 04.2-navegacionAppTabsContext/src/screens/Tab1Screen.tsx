import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TouchableIcon} from '../components/TouchableIcon';

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
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="aperture-outline" />
        <TouchableIcon iconName="arrow-redo-outline" />
        <TouchableIcon iconName="beer-outline" />
        <TouchableIcon iconName="baseball-outline" />
        <TouchableIcon iconName="bandage-outline" />
        <TouchableIcon iconName="cloud-outline" />
        <TouchableIcon iconName="bookmarks-outline" />
        <TouchableIcon iconName="calculator-outline" />
        <TouchableIcon iconName="contrast-outline" />
        <TouchableIcon iconName="cash-outline" />
      </Text>
    </View>
  );
};
