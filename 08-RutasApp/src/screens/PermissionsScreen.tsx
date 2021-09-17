import React from 'react';
import {
  check,
  request,
  PERMISSIONS,
  PermissionStatus,
} from 'react-native-permissions';
import {View, Text, StyleSheet, Button, Platform} from 'react-native';

export const PermissionsScreen = () => {
  const checkLocationPermission = async () => {
    let permissionsStatus: PermissionStatus;

    if (Platform.OS === 'ios') {
      // Saber el status del permiso
      // permissionsStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

      // Solicitar Permiso
      permissionsStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      // Saber el status del permiso
      // permissionsStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

      // Solicitar Permiso
      permissionsStatus = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
    }

    console.log({permissionsStatus});
  };

  return (
    <View style={styles.container}>
      <Text> PermissionsScreen </Text>

      <Button title="Permiso" onPress={checkLocationPermission} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
