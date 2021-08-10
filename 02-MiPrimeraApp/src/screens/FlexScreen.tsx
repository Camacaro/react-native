import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}> Caja 1 </Text>
      <Text style={styles.caja2}> Caja 2 </Text>
      <Text style={styles.caja3}> Caja 3 </Text>

      {/* Flex Wrap Ejemplo */}
      {/* <Text style={styles.caja1}> Caja 1 </Text>
      <Text style={styles.caja2}> Caja 2 </Text>
      <Text style={styles.caja3}> Caja 3 </Text>
      <Text style={styles.caja1}> Caja 1 </Text>
      <Text style={styles.caja2}> Caja 2 </Text>
      <Text style={styles.caja3}> Caja 3 </Text>
      <Text style={styles.caja1}> Caja 1 </Text>
      <Text style={styles.caja2}> Caja 2 </Text>
      <Text style={styles.caja3}> Caja 3 </Text>
      <Text style={styles.caja1}> Caja 1 </Text>
      <Text style={styles.caja2}> Caja 2 </Text>
      <Text style={styles.caja3}> Caja 3 </Text>
      <Text style={styles.caja1}> Caja 1 </Text>
      <Text style={styles.caja2}> Caja 2 </Text>
      <Text style={styles.caja3}> Caja 3 </Text>
      <Text style={styles.caja1}> Caja 1 </Text>
      <Text style={styles.caja2}> Caja 2 </Text>
      <Text style={styles.caja3}> Caja 3 </Text>
      <Text style={styles.caja1}> Caja 1 </Text>
      <Text style={styles.caja2}> Caja 2 </Text>
      <Text style={styles.caja3}> Caja 3 </Text>
      <Text style={styles.caja1}> Caja 1 </Text>
      <Text style={styles.caja2}> Caja 2 </Text>
      <Text style={styles.caja3}> Caja 3 </Text>
      <Text style={styles.caja1}> Caja 1 </Text>
      <Text style={styles.caja2}> Caja 2 </Text>
      <Text style={styles.caja3}> Caja 3 </Text> */}
    </View>
  );
};

/**
 * 1. Al agregar flex a las cajas se van expandiendo todo
 * lo que pueden a lo alto deacuerdo al espacio que le da su padre
 * y le deja el espacio minimo necesario para sus hermano
 * se pueden renderizar y si a los tres le pongo el flex
 * se van diviendo la pantalla entre 3 o de acuerdo a lo que
 * le asigne
 *
 * 2. flexDirection en row pasa lo mismo se extiende todo lo que puede
 * a lo ancho column por defect
 *
 * 3. justifyContent, se ajusta de acuerdo al espacio que el padre le da
 * se centra dentro del tamaño que tenga el div padre,
 * en flexDirection row lo poner es a la derecha
 *
 * 4. alignItem, se ajusta de manera horizontal, comienza con flex-start
 * (izquierda) y flex-end (derecha), el center es el centro pero de
 * manera horizontal. En comparacion con el justifyContent lo hace de manera
 * vertical toda la pantalla (espacio que le dio el padre).
 * Este es el caso de colummns en el caso de row se invierte los papeles
 * del alignItem y justifyContent
 *
 * 5. alignSelf, se alinea de manera horizontal(column) o vertical(row)
 * pero es en su propio espacio, se mueve es su espacio, sobreescribe
 * lo que el padre le impone
 *
 * 6. Flex Wrap nos sive para cuando hay muchos elementos y se salen
 * de las pantalla o del padre y con esto los ordena o trata de ponerlos
 * uno al lado del otro.
 */

const styles = StyleSheet.create({
  container: {
    flex: 1, // Se estira en todo el espacio posible que le da el padre
    backgroundColor: '#28C4D9',

    // Organizar los elementos que se salen
    // flexDirection: 'row',
    // alignItems: 'flex-start',
    // flexWrap: 'wrap',

    // Esquina inferior derecha
    // flexDirection: 'row',
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',

    // Centro de pantalla
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  caja1: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  caja2: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  caja3: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
});
