import React from 'react';
import {View, StyleSheet, Animated, Button} from 'react-native';
import {useThemeContext} from '../context/theme/ThemeContext';
import {useAnimation} from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const {
    theme: {colors},
  } = useThemeContext();
  const {position, opacity, fadeOut, fadeIn, startMovingPosition} =
    useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          backgroundColor: colors.primary,
          opacity,
          transform: [
            {
              // translateY: position,
              translateX: position,
            },
          ],
        }}
      />

      <Button
        title="FadeIn"
        color={colors.primary}
        onPress={() => {
          fadeIn();
          startMovingPosition(-100);
        }}
      />
      <Button color={colors.primary} title="FadeOut" onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    marginBottom: 20,
    width: 150,
    height: 150,
  },
});
