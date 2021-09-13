/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Animated,
  ActivityIndicator,
  StyleProp,
  ImageStyle,
} from 'react-native';
import {useThemeContext} from '../context/theme/ThemeContext';
import {useAnimation} from '../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style = {}}: Props) => {
  const {
    theme: {colors},
  } = useThemeContext();
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishiLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoading && (
        <ActivityIndicator
          style={{position: 'absolute'}}
          color={colors.primary}
          size={30}
        />
      )}

      <Animated.Image
        source={{uri}}
        onLoadEnd={finishiLoading}
        style={{
          // width: '100%',
          // height: 400,
          ...(style as any),
          opacity,
        }}
      />
    </View>
  );
};
