/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDebouncedValue} from '../hooks/useDebouncedValue';
import {
  View,
  StyleSheet,
  TextInput,
  Platform,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
  onDebounce: (value: string) => void;
}

export const SearchInput = ({style, onDebounce}: Props) => {
  const [textValue, setTextValue] = useState('');
  const debouncedValued = useDebouncedValue(textValue);

  useEffect(() => {
    onDebounce(debouncedValued);
  }, [debouncedValued]);

  return (
    <View style={{...styles.container, ...(style as any)}}>
      <View style={styles.textBackground}>
        <TextInput
          placeholder="Buscar Pokemón"
          style={{
            ...styles.textInput,
            top: Platform.OS === 'ios' ? 0 : 3,
          }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="black"
          value={textValue}
          onChangeText={setTextValue}
        />

        <Icon color={'grey'} size={30} name="search-outline" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
  textBackground: {
    backgroundColor: '#F3F1F3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // https://ethercreative.github.io/react-native-shadow-generator/
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  textInput: {
    color: 'black',
    flex: 1,
    fontSize: 18,
  },
});
