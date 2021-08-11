import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends NativeStackScreenProps<any, any> {}

export const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View>
      <Text style={styles.title}> Pagina3Screen </Text>
      <Button title="Regresar" onPress={() => navigation.pop()} />

      <Button title="Ir a Página 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};
