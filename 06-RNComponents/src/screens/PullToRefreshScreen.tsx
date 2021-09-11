/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ScrollView, View, RefreshControl} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

// FlatLst -> Carga los componentes de manera perezosa
// ScrollView -> los carga todos de manera completa
export const PullToRefreshScreen = () => {
  const {top} = useSafeAreaInsets();
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log('Terminamos');
      setRefreshing(false);
      console.log('Terminamos');
      setData('Hola Mundo');
    }, 3000);
  };

  return (
    <ScrollView
      style={{
        // Alternativa para IOS porque el refresh sale por donde esta el notch
        // Tambien se pudo usar el safaAreaView pero se corta la parte del notch
        marginTop: refreshing ? top : 0,
      }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          // progressViewOffset distancia del loading solo funciona en android
          progressViewOffset={10}
          //  funciona en android
          progressBackgroundColor="#5856D6"
          colors={['white', 'red', 'orange']}
          // Solo IOS
          style={{
            backgroundColor: 'red',
          }}
          tintColor="blue"
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to Refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};
