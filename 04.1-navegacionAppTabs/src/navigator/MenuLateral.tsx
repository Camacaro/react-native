import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  useWindowDimensions,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {styles} from '../theme/appTheme';

/**
 * Aqui tambien se puede hacer lo mismo que se hizo en StackNavigator
 * para los params
 */
const Drawer = createDrawerNavigator();

// const Stack = createNativeStackNavigator();
// const SettingsStackScreen = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="SettingsStackScreen" component={SettingsScreen} />
//     </Stack.Navigator>
//   );
// };

export const MenuLateral = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <MenuInterno {...props} />}
      // screenOptions={{drawerPosition: 'right'}}

      // Ocultar el bar donde esta icono de hamburguesa,
      // lo tengo de este modo para poder lanzarlo desde Pagina1Screen
      screenOptions={{
        headerShown: false,
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        // Puedo montar otro stack de screens independiente
        // name="SettingsScreen"
        // component={SettingsStackScreen}
      />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://banner2.cleanpng.com/20180512/goq/kisspng-computer-icons-user-5af726ec91b157.2244550515261467965968.jpg',
          }}
          style={styles.avatar}
        />
      </View>

      {/* opciones de menú */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate('StackNavigator')}>
          <Text style={styles.menuTexto}>Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={styles.menuTexto}>Ajuste</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
