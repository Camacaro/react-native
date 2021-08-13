import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {colors} from '../theme/appTheme';
import {useAuthContext} from '../context/AuthContext';

interface Props {
  iconName: string;
}

export const TouchableIcon = ({iconName}: Props) => {
  const {changeFavoriteIcon} = useAuthContext();

  return (
    <TouchableOpacity onPress={() => changeFavoriteIcon(iconName)}>
      <Icon name={iconName} size={50} color={colors.primary} />
    </TouchableOpacity>
  );
};
