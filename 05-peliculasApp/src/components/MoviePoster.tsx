import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Movie} from '../interfaces/movie.interface';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({movie, height, width}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailsScreen', movie)}
      activeOpacity={0.8}
      style={{
        ...styles.container,
        ...(height && {height}),
        ...(width && {width}),
      }}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 420,
    marginHorizontal: 2,
    paddingBottom: 20,
    paddingHorizontal: 7,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
  // https://ethercreative.github.io/react-native-shadow-generator/
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
  },
});
