import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {CommonActions} from '@react-navigation/native';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';

export const Pagina2Screen = () => {
  const navigator = useNavigation();
  return (
    <View style={styles.globalMargin}>
      <Text> Pagina2Screen </Text>
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
