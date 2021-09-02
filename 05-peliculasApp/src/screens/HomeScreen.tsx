import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useMovies} from '../hooks/useMovies';

// https://api.themoviedb.org/3/movie/now_playing?api_key=e50e9b6b173e52df1ae08cc0e18bc903&language=es-ES
export const HomeScreen = () => {
  const {peliculasEnCine, isLoading} = useMovies();

  console.log(peliculasEnCine[0]?.title);

  if (isLoading) {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={50} />
      </View>
    );
  }

  return (
    <View>
      <Text> HomeScreen Papo </Text>
    </View>
  );
};
