/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, FlatList} from 'react-native';
import {styles} from '../theme/appTheme';
import {FlatListManuItem} from '../components/FlatListManuItem';
import {menuItems} from '../data/menuItems';
import {HeaderTitle} from '../components/HeaderTitle';
import {ItemSeparator} from '../components/ItemSeparator';

export const HomeScreen = () => {
  const renderListHeader = () => {
    return <HeaderTitle title="Opciones de Menú" />;
  };

  const itemSeparator = () => {
    return <ItemSeparator />;
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
