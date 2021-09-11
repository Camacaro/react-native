/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, FlatList} from 'react-native';
import {styles} from '../theme/appTheme';
import {FlatListManuItem} from '../components/FlatListManuItem';
import {menuItems} from '../data/menuItems';
import {HeaderTitle} from '../components/HeaderTitle';

export const HomeScreen = () => {
  const renderListHeader = () => {
    return <HeaderTitle title="Opciones de Menú" />;
  };

  const itemSeparator = () => {
    return (
      <View style={{borderBottomWidth: 1, opacity: 0.4, marginVertical: 8}} />
    );
  };

  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListManuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => renderListHeader()}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};
