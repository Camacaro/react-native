import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors, styles} from '../theme/appTheme';
import {useAuthContext} from '../context/AuthContext';

export const SettingsScreen = () => {
  const {authState} = useAuthContext();
  /**
   * Esto se usa para poder crear una separacion con el
   * bar o touch bar del telefono (el espacio negro entre la pantalla)
   * SE LLAMA NOTCH
   * y no se vea feo, es un hook que ya me da el espacio necesario
   * para la separacion
   */
  const insets = useSafeAreaInsets();

  return (
    <View style={{...styles.globalMargin, marginTop: insets.top + 20}}>
      <Text style={styles.title}> Settings Screen </Text>

      <Text>{JSON.stringify(authState, null, 4)}</Text>

      {authState.favoriteIcon && (
        <Icon name={authState.favoriteIcon} size={150} color={colors.primary} />
      )}
    </View>
  );
};
