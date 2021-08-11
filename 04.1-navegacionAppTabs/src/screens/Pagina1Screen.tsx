/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {styles} from '../theme/appTheme';

// interface Props extends NativeStackScreenProps<any, any> {}

// Aqui cambiamos al DrawerScreenProps para poder acceder al toggleDrawer
// para poder abrir el menu lateral
interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="Menú" onPress={() => navigation.toggleDrawer()} />
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button
        title="Ir a página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text
        style={{
          marginVertical: 20,
          fontSize: 20,
        }}>
        Navegar con argumentos
      </Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Jesus',
            })
          }>
          <Text style={styles.botonGrandeTexto}> Jesus </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Oriana',
            })
          }>
          <Text style={styles.botonGrandeTexto}> Oriana </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
