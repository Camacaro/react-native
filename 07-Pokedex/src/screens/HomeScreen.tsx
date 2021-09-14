/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, Image, FlatList, ActivityIndicator, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {PokemonCard} from '../components/PokemonCard';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, isLoading, loadPokemons} = usePokemonPaginated();

  console.log(simplePokemonList);

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />

      <View
        style={{
          alignItems: 'center',
        }}>
        <FlatList
          data={simplePokemonList}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={pokemon => pokemon.id}
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          ListHeaderComponent={
            <Text
              style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top + 20,
                marginBottom: top + 20,
                paddingBottom: 10,
              }}>
              {' '}
              Pokedex{' '}
            </Text>
          }
          // Infinite scroll
          onEndReachedThreshold={0.4}
          onEndReached={loadPokemons}
          // Loading data
          ListFooterComponent={
            <ActivityIndicator style={{height: 100}} size={20} color="grey" />
          }
        />
      </View>
    </>
  );
};
