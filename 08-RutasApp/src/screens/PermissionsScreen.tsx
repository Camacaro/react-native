/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {usePermissionContext} from '../context/PermissionsContext';
import {BlackButton} from '../components/BlackButton';

export const PermissionsScreen = () => {
  const {permissions, askLocationPermission} = usePermissionContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {' '}
        Es necesario el uso del GPS para usar esta aplicacion{' '}
      </Text>

      {/* <Button title="Permiso" onPress={askLocationPermission} /> */}
      <BlackButton title="Permiso" onPress={askLocationPermission} />

      <Text style={{marginTop: 20}}>
        {JSON.stringify(permissions, null, 5)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: 250,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});
