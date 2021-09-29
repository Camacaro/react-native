import {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {Location} from '../interfaces/appInterfaces';

export const useLocation = () => {
  const [hasLocation, setHasLocation] = useState(false);
  const [initialPosition, setInitialPosition] = useState<Location>({
    latitude: 0,
    longitud: 0,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({coords}) => {
        setInitialPosition({
          latitude: coords.latitude,
          longitud: coords.longitude,
        });

        setHasLocation(true);
      },
      error => console.log('Geolocation  - error', error),
      {
        enableHighAccuracy: true, // Esto hace que se consume más la bateria
        // distanceFilter: 100,
      },
    );
  }, []);

  return {
    hasLocation,
    initialPosition,
  };
};
