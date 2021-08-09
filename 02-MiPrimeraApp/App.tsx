import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
// import {HolaMundoScreen} from './src/screens/HolaMundoScreen';
import {ContadorScreen} from './src/screens/ContadorScreen';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
// import {DimensionesScreen} from './src/screens/DimensionesScreen';
// import {PositionScreen} from './src/screens/PositionScreen';

export const App: FC = () => {
  return (
    // Para que no choque con la camara del ios que esta en la pantalla
    // que cubre la pantalla
    <SafeAreaView style={{flex: 1}}>
      {/* <HolaMundoScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      <ContadorScreen />
    </SafeAreaView>
  );
};
