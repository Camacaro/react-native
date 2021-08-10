import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Tarea5Flex = () => {
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cajaMorada: {
    width: 100,
    // Con el height da el mismo efecto de alargado, la diferencia es
    // que sin el el ocupa el espacio del padre y con height ocupa el 100%
    // de la pantalla
    // height: '100%',
    borderColor: 'white',
    borderWidth: 10,
    backgroundColor: '#5856D6',
  },
  cajaNarajanja: {
    width: 100,
    // height: '100%',
    borderColor: 'white',
    borderWidth: 10,
    backgroundColor: '#F0A23B',
  },
  cajaAzul: {
    width: 100,
    // height: '100%',
    borderColor: 'white',
    borderWidth: 10,
    backgroundColor: '#28C4D9',
  },
});
