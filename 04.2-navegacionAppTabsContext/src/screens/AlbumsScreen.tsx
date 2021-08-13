import React from 'react';
import {View, Text, Button} from 'react-native';
import {useAuthContext} from '../context/AuthContext';
import {styles} from '../theme/appTheme';

export const AlbumsScreen = () => {
  const {logout, authState} = useAuthContext();
  const {isLoggedIn} = authState;
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> AlbumsScreen </Text>

      {isLoggedIn && <Button title="Logout" onPress={logout} />}
    </View>
  );
};
