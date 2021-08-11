import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends NativeStackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> Pagina1Screen </Text>
      <Button
        title="Ir a página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
    </View>
  );
};
