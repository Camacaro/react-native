import React from 'react';
import {View, Text, Button} from 'react-native';
import {useAuthContext} from '../context/AuthContext';
import {styles} from '../theme/appTheme';

export const ContactsScreen = () => {
  const {signIn, authState} = useAuthContext();
  const {isLoggedIn} = authState;

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> ContactsScreen </Text>

      {!isLoggedIn && <Button title="SignIn" onPress={signIn} />}
    </View>
  );
};
