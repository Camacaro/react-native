import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {CommonActions} from '@react-navigation/native';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';

const options: NativeStackNavigationOptions = {
  // Esto cambia el titulo de la pagina en la parte de arriba
  // sobre escribe el Stack.Screen options.name
  title: 'Hola Mundo',
  // Este header solo se vera en ios, en android no afecta
  headerBackTitle: 'Atras',
};

export const Pagina2Screen = () => {
  const navigator = useNavigation();

  /**
   * Se ejecuta una vez asi me vaya y regrese de pantalla
   * o navegue no se volvera a ejecutar
   */
  useEffect(() => {
    navigator.setOptions(options);
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> Pagina2Screen </Text>
      <Button
        title="Ir a página 3"
        onPress={() =>
          navigator.dispatch(CommonActions.navigate({name: 'Pagina3Screen'}))
        }
        // onPress={() => navigator.navigate('Pagina3Screen')}
      />
    </View>
  );
};
