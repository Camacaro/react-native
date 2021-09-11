import React, {useRef} from 'react';
import {View, StyleSheet, Animated, Button, Easing} from 'react-native';

export const Animation101Screen = () => {
  const opacity = useRef(new Animated.Value(0.1)).current;
  const top = useRef(new Animated.Value(-200)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => console.log('Animacion opacity terminada'));

    Animated.timing(top, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start(() => console.log('Animacion top terminada'));
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity,
          transform: [
            {
              translateY: top,
            },
          ],
        }}
      />

      <Button title="FadeIn" onPress={fadeIn} />
      <Button title="FadeOut" onPress={fadeOut} />
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
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});
