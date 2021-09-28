import React, {createContext, useContext, useEffect, useState} from 'react';
import {AppState, Platform} from 'react-native';
import {
  check,
  request,
  PERMISSIONS,
  PermissionStatus,
  openSettings,
} from 'react-native-permissions';

export interface PermissionsState {
  locationStatus: PermissionStatus;
}

export const permissionsInitState: PermissionsState = {
  locationStatus: 'unavailable',
};

type PermissionsContextProps = {
  permissions: PermissionsState;
  askLocationPermission: () => void;
  checkLocationPermission: () => void;
};

const PermissionsContext = createContext({} as PermissionsContextProps);

export const usePermissionContext = () => useContext(PermissionsContext);

export const PermissionsProvider = ({children}: any) => {
  const [permissions, setPermissions] = useState(permissionsInitState);

  useEffect(() => {
    const AppListener = AppState.addEventListener('change', state => {
      console.log({state});
      if (state !== 'active') {
        return;
      }

      checkLocationPermission();
    });

    return () => AppListener.remove();
  }, []);

  const askLocationPermission = async () => {
    let permissionsStatus: PermissionStatus;

    if (Platform.OS === 'ios') {
      // Solicitar Permiso
      permissionsStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      // Solicitar Permiso
      permissionsStatus = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
    }

    if (permissionsStatus === 'blocked') {
      openSettings();
    }

    setPermissions({...permissions, locationStatus: permissionsStatus});
  };

  const checkLocationPermission = async () => {
    let permissionsStatus: PermissionStatus;

    if (Platform.OS === 'ios') {
      // Saber el status del permiso
      permissionsStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      // Saber el status del permiso
      permissionsStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }

    setPermissions({...permissions, locationStatus: permissionsStatus});
  };

  return (
    <PermissionsContext.Provider
      value={{
        permissions,
        askLocationPermission,
        checkLocationPermission,
      }}>
      {children}
    </PermissionsContext.Provider>
  );
};
