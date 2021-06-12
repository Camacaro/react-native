import React, {FC} from 'react';
import {
  View,
  Text,
  // Button,
  StyleSheet,
} from 'react-native';
import {useState} from 'react';
import {Fab} from '../components/Fab';

/**
 *
 * Los botones son poco usados hay que usar
 * TouchableOpacity, TouchableHighlight y/o TouchableWithoutFeedback
 */
export const ContadorScreen: FC = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Contador: {contador}</Text>

      {/* <Button onPress={() => setContador(contador + 1)} title="Click" /> */}

      <Fab title="+1" onPress={() => setContador(contador + 1)} />

      <Fab title="-1" onPress={() => setContador(contador - 1)} position="bl" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    top: -15,
  },
});
