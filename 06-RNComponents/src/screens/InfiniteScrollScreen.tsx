/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  // StyleSheet,
  // Text,
  // Image,
  ActivityIndicator,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {FadeInImage} from '../components/FadeInImage';
import {HeaderTitle} from '../components/HeaderTitle';
import {useThemeContext} from '../context/theme/ThemeContext';

export const InfiniteScrollScreen = () => {
  const {
    theme: {colors},
  } = useThemeContext();
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const renderItem = (item: number) => {
    return (
      <FadeInImage
        uri={`https://picsum.photos/id/${item}/1024/1024`}
        style={{width: '100%', height: 400}}
      />
    );

    // return (
    //   <Image
    //     source={{uri: `https://picsum.photos/id/${item}/500/400`}}
    //     style={{width: '100%', height: 400}}
    //   />
    // );
  };

  // const renderItem = (item: number) => {
  //   return <Text style={styles.textItem}>{item}</Text>;
  // };

  const loadMore = () => {
    const newArray: number[] = [];

    for (let index = 0; index < 5; index++) {
      newArray[index] = numbers.length + index;
    }

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: 'red'
      }}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={() => (
          <View style={{marginHorizontal: 20}}>
            <HeaderTitle title="Infinite Scroll" />
          </View>
        )}
        // Con esto activo el infinite scroll con 0.5 es la mitad de los datos
        // y en ese momento se cargaran los demas datos se ejcutael onEndReached
        onEndReached={() => {
          console.log('Cargando data');
          loadMore();
        }}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={30} color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   textItem: {
//     backgroundColor: 'rgba(0,0,0,0.3)',
//     height: 150,
//   },
// });
