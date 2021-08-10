import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Tarea2Flex = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNarajanja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Se estira en todo el espacio posible que le da el padre
    backgroundColor: '#28425B',
    justifyContent: 'center',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    borderColor: 'white',
    borderWidth: 10,
    backgroundColor: '#5856D6',
  },
  cajaNarajanja: {
    width: 100,
    height: 100,
    borderColor: 'white',
    borderWidth: 10,
    backgroundColor: '#F0A23B',
  },
  cajaAzul: {
    // width: '100%',con o sin el width da el mismo efecto
    height: 100,
    borderColor: 'white',
    borderWidth: 10,
    backgroundColor: '#28C4D9',
  },
});
