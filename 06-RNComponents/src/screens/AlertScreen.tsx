/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Button, Alert} from 'react-native';
import prompt from 'react-native-prompt-android';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Título',
      'Este es el mensaje de la alerta',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('onDismiss'),
      },
    );
  };

  // Esto solo sirve en IOS
  const showPropmtIOS = () => {
    Alert.prompt(
      '¿Esta seguro?',
      'Esta accion no se puede revertir',
      (value: string) => console.log('Propmt value: ', value),
      'login-password',
      'Valor por defecto',
      'number-pad',
    );
  };

  const showPropmt = () => {
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Mostrar Alerta" onPress={showAlert} />

      <View style={{height: 10}} />

      {/* Solo sirve en IOS */}
      <Button title="Mostrar Prompt" onPress={showPropmt} />

      <View style={{height: 10}} />

      <Button title="Mostrar Prompt (IOS)" onPress={showPropmtIOS} />
    </View>
  );
};
