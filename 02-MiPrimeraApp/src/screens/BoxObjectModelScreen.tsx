import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Box Object Model </Text>
    </View>
  );
};

// command prefix - stles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  title: {
    paddingHorizontal: 100,
    paddingVertical: 20,
    marginHorizontal: 10,
    fontSize: 20,
    backgroundColor: 'red',
    // width: 150,
    borderWidth: 5,
  },
});
