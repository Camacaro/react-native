import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {RootStackParams} from '../navigator/StackNavigator';

// Opcion 2
// interface RouterParams {
//   id: number;
//   nombre: string;
// }

// Opcion 3 (Configuracion desde StackNavigator.tsx)
interface Props
  extends NativeStackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({route, navigation}: Props) => {
  // const params = route.params; // Opcion 1
  // const params = route.params as RouterParams; // Opcion 2
  const params = route.params; // Opcion 3

  useEffect(() => {
    navigation.setOptions({
      // title: params!.nombre, // Opcion 1
      title: params.nombre, // Opcion 2 - Opcion 3
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
