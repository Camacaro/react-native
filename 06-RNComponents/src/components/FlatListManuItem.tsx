import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {MenuItem} from '../interfaces/appInterfaces';
import {useNavigation} from '@react-navigation/core';
// import {useTheme} from '@react-navigation/native';
interface Props {
  menuItem: MenuItem;
}

export const FlatListManuItem = ({menuItem}: Props) => {
  const navigation = useNavigation();
  // Puedo usar los colores del thema que tenga el navigator
  // const {colors} = useTheme();

  return (
    <TouchableOpacity
      // activeOpacity={0.8}
      onPress={() => navigation.navigate(menuItem.component as any)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color="#5856D6" size={23} />
        <Text
          style={{
            ...styles.itemText,
            // color: colors.text,
          }}>
          {' '}
          {menuItem.name}
        </Text>
        {/* Este view space lo que hace es tomar todo el espacio posible
        del row respetando los espacios de sus hermanos para mantenerlo
        como lo el icono al final, si le coloco un backgroundColor: 'red'
        vere el espacio qeu toma  */}
        <View style={styles.viewSpace} />
        <Icon name="chevron-forward-outline" color="#5856D6" size={23} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  viewSpace: {
    flex: 1,
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
});
