/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import MapView, {PROVIDER_DEFAULT, Marker, Polyline} from 'react-native-maps';
import {useLocation} from '../hooks/useLocation';
import {LoadingScreen} from '../screens/LoadingScreen';
import {Fab} from './Fab';

interface Props {
  markers?: Marker[];
}

export const Map = ({}: Props) => {
  const mapViewRef = useRef<MapView>();
  const following = useRef<boolean>(true);
  const [showPolyline, setShowPolyline] = useState(true);
  const {
    routeLines,
    hasLocation,
    userLocation,
    initialPosition,
    getCurrentLocation,
    followUserLocation,
    stopFollowUserLocation,
  } = useLocation();

  useEffect(() => {
    followUserLocation();

    return () => stopFollowUserLocation();
  }, []);

  useEffect(() => {
    if (!following.current) {
      return;
    }

    mapViewRef.current?.animateCamera({
      center: {
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
      },
    });
  }, [userLocation]);

  const centerPosition = async () => {
    const {latitude, longitude} = await getCurrentLocation();
    mapViewRef.current?.animateCamera({
      center: {
        latitude,
        longitude,
      },
    });
  };

  if (!hasLocation) {
    return <LoadingScreen />;
  }

  return (
    <>
      <MapView
        ref={el => (mapViewRef.current = el!)}
        provider={PROVIDER_DEFAULT}
        style={{flex: 1}}
        onTouchStart={() => (following.current = false)}
        initialRegion={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
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

        {showPolyline && (
          <Polyline
            coordinates={routeLines}
            strokeColor="black"
            strokeWidth={3}
          />
        )}
      </MapView>

      <Fab
        iconName="compass-outline"
        onPress={() => {
          centerPosition();
          following.current = true;
        }}
        style={{position: 'absolute', bottom: 20, right: 20}}
      />

      <Fab
        iconName="brush-outline"
        onPress={() => {
          setShowPolyline(value => !value);
        }}
        style={{position: 'absolute', bottom: 80, right: 20}}
      />
    </>
  );
};
