/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View, ActivityIndicator, Dimensions} from 'react-native';

import Carousel from 'react-native-snap-carousel';

import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import {ScrollView} from 'react-native-gesture-handler';
import {HorizontalSlider} from '../components/HorizontalSlider';

const {width: widthWindows} = Dimensions.get('window');

// https://api.themoviedb.org/3/movie/now_playing?api_key=e50e9b6b173e52df1ae08cc0e18bc903&language=es-ES
export const HomeScreen = () => {
  const {peliculasEnCine, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={50} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        {/* Carousel principales */}
        <View style={{height: 440}}>
          <Carousel
            data={peliculasEnCine}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={widthWindows}
            itemWidth={300}
            inactiveSlideOpacity={0.95}
          />
        </View>

        {/* Pelicula populares */}
        <HorizontalSlider title="En el Cine" movies={peliculasEnCine} />
      </View>
    </ScrollView>
  );
};
