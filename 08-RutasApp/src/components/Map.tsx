/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import MapView, {PROVIDER_DEFAULT, Marker} from 'react-native-maps';
import {useLocation} from '../hooks/useLocation';
import {LoadingScreen} from '../screens/LoadingScreen';
import {Fab} from './Fab';

interface Props {
  markers?: Marker[];
}

export const Map = ({}: Props) => {
  const {hasLocation, initialPosition} = useLocation();

  if (!hasLocation) {
    return <LoadingScreen />;
  }

  return (
    <>
      <MapView
        provider={PROVIDER_DEFAULT}
        style={{flex: 1}}
        initialRegion={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitud,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {/* <Marker
          image={require('../assets/custom-marker.png')}
          coordinate={{
            latitude: initialPosition.latitude,
            longitude: initialPosition.longitud,
          }}
          title="Esto es un titulo"
          description="Esto es una descripcion"
        /> */}
      </MapView>

      <Fab
        iconName="star-outline"
        onPress={() => console.log('Hola FAB')}
        style={{position: 'absolute', bottom: 20, right: 20}}
      />
    </>
  );
};
