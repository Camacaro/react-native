/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_DEFAULT} from 'react-native-maps';

export const MapScreen = () => {
  return (
    <View style={{flex: 1}}>
      <MapView
        provider={PROVIDER_DEFAULT}
        style={{flex: 1}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};
