/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View, ActivityIndicator, Dimensions} from 'react-native';

import Carousel from 'react-native-snap-carousel';

import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import {ScrollView} from 'react-native-gesture-handler';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {GradientBackground} from '../components/GradientBackground';
import {Movie} from '../interfaces/movie.interface';
import {getImagesColors} from '../helpers/getColores';
import {useGradientContext} from '../context/GradientContext';

const {width: widthWindows} = Dimensions.get('window');

// https://api.themoviedb.org/3/movie/now_playing?api_key=e50e9b6b173e52df1ae08cc0e18bc903&language=es-ES
export const HomeScreen = () => {
  const {setMainColors} = useGradientContext();
  const {nowPlaying, popular, topRated, upComing, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  const getPosterColors = async (index: number) => {
    const movie: Movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const [primary = 'green', secondary = 'orange'] = await getImagesColors(
      uri,
    );

    setMainColors({primary, secondary});
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={50} />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          {/* Carousel principales */}
          <View style={{height: 440}}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}: any) => <MoviePoster movie={item} />}
              sliderWidth={widthWindows}
              itemWidth={300}
              inactiveSlideOpacity={0.95}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>

          {/* Pelicula populares */}
          <HorizontalSlider title="Populares" movies={popular} />
          <HorizontalSlider title="Top Rated" movies={topRated} />
          <HorizontalSlider title="upComing" movies={upComing} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
