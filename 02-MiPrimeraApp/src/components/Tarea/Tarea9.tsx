import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Tarea9Flex = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNarajanja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

// Otra Solucion guiada como el ejercicio 8
const styles = StyleSheet.create({
  container: {
    flex: 1, // Se estira en todo el espacio posible que le da el padre
    backgroundColor: '#28425B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    borderColor: 'white',
    borderWidth: 10,
    backgroundColor: '#5856D6',
    top: 100,
  },
  cajaNarajanja: {
    width: 100,
    height: 100,
    borderColor: 'white',
    borderWidth: 10,
    backgroundColor: '#F0A23B',
    // alignSelf: 'flex-end',
    // Aqui pude a ver aplicado tambien un left o right para moverlo
    // left: -55,
    // marginRight: 55,
    right: -100,
  },
  cajaAzul: {
    width: 100,
    height: 100,
    borderColor: 'white',
    borderWidth: 10,
    backgroundColor: '#28C4D9',
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, // Se estira en todo el espacio posible que le da el padre
//     backgroundColor: '#28425B',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   cajaMorada: {
//     width: 100,
//     height: 100,
//     borderColor: 'white',
//     borderWidth: 10,
//     backgroundColor: '#5856D6',
//   },
//   cajaNarajanja: {
//     width: 100,
//     height: 100,
//     borderColor: 'white',
//     borderWidth: 10,
//     backgroundColor: '#F0A23B',
//     position: 'absolute',
//     top: 285,
//     right: 56,
//   },
//   cajaAzul: {
//     width: 100,
//     height: 100,
//     borderColor: 'white',
//     borderWidth: 10,
//     backgroundColor: '#28C4D9',
//   },
// });
