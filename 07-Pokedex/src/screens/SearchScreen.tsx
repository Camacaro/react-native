/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, Platform, FlatList, Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles as globalStayles} from '../theme/appTheme';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {PokemonCard} from '../components/PokemonCard';
import {Loading} from '../components/Loading';
import {SimplePokemon} from '../interfaces/pokemonInterface';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemonList} = usePokemonSearch();

  const [term, setTerm] = useState('');
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

  useEffect(() => {
    if (term.length === 0) {
      return setPokemonFiltered([]);
    }

    let filtered;

    if (isNaN(Number(term))) {
      filtered = simplePokemonList.filter(pokemon =>
        pokemon.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()),
      );
    } else {
      const pokemonById = simplePokemonList.find(
        pokemon => pokemon.id === term,
      );
      filtered = pokemonById ? [pokemonById] : [];
    }

    setPokemonFiltered(filtered);
  }, [term]);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View
      style={{
        flex: 1,
        // Lo comento parque las tarjetas puedan pasar por el notch
        // marginTop: Platform.OS === 'ios' ? top : top + 10,
        marginHorizontal: 20,
      }}>
      <SearchInput
        onDebounce={setTerm}
        style={{
          position: 'absolute',
          zIndex: 999,
          width: screenWidth - 40,
          top: Platform.OS === 'ios' ? top : top + 30,
        }}
      />

      <FlatList
        data={pokemonFiltered}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={pokemon => pokemon.id}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        ListHeaderComponent={
          <Text
            style={{
              ...globalStayles.title,
              ...globalStayles.globalMargin,
              paddingBottom: 10,
              marginTop: Platform.OS === 'ios' ? top + 60 : top + 80,
            }}>
            {' '}
            {term}{' '}
          </Text>
        }
      />
    </View>
  );
};
