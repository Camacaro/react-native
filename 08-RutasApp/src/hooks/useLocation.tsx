import {useEffect, useRef, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {Location} from '../interfaces/appInterfaces';

export const useLocation = () => {
  const isMounted = useRef(true);
  const watchIdRef = useRef<number>();
  const [hasLocation, setHasLocation] = useState(false);
  const [routeLines, setRouteLines] = useState<Location[]>([]);

  const [userLocation, setUserLocation] = useState<Location>({
    latitude: 0,
    longitude: 0,
  });
  const [initialPosition, setInitialPosition] = useState<Location>({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    getCurrentLocation().then(location => {
      if (!isMounted) {
        return;
      }
      setRouteLines(routes => [...routes, location]);
      setInitialPosition(location);
      setUserLocation(location);
      setHasLocation(true);
    });
  }, []);

  const getCurrentLocation = (): Promise<Location> => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        ({coords}) => {
          resolve({
            latitude: coords.latitude,
            longitude: coords.longitude,
          });
        },
        error => reject({error}),
        {
          enableHighAccuracy: true, // Esto hace que se consume más la bateria
          // distanceFilter: 100,
        },
      );
    });
  };

  const followUserLocation = () => {
    watchIdRef.current = Geolocation.watchPosition(
      ({coords}) => {
        if (!isMounted) {
          return;
        }

        // console.log({coords});

        const location: Location = {
          latitude: coords.latitude,
          longitude: coords.longitude,
        };

        setUserLocation(location);
        setRouteLines(routes => [...routes, location]);
      },
      error => console.log('error', error),
      {
        enableHighAccuracy: true, // Esto hace que se consume más la bateria
        distanceFilter: 10,
      },
    );
  };

  const stopFollowUserLocation = () => {
    if (watchIdRef.current) {
      Geolocation.clearWatch(watchIdRef.current);
    }
  };

  return {
    routeLines,
    hasLocation,
    userLocation,
    initialPosition,
    getCurrentLocation,
    followUserLocation,
    stopFollowUserLocation,
  };
};
