/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Text,
} from 'react-native';
import {CustomSwitch} from '../components/CustomSwitch';
import {HeaderTitle} from '../components/HeaderTitle';
import {useThemeContext} from '../context/theme/ThemeContext';
import {useForm} from '../hooks/useForm';
import {styles} from '../theme/appTheme';

interface FormTextInput {
  name: string;
  email: string;
  phone: string;
  isSubscribed: boolean;
}

const initForm: FormTextInput = {
  name: '',
  email: '',
  phone: '',
  isSubscribed: false,
};

export const TextInputScreen = () => {
  const {
    theme: {colors, divederColor},
  } = useThemeContext();

  // const {form, onChange} = useForm<FormTextInput>(initForm);
  const {form, onChange} = useForm(initForm);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        {/* TouchableWithoutFeedback, Esto es para cerrar el teclado */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="TextInput" />

            <TextInput
              style={{
                ...stylesScreen.inputStyle,
                borderColor: colors.text,
                color: colors.text,
              }}
              placeholder="Ingrese su nombre"
              autoCorrect={false}
              autoCapitalize="words"
              placeholderTextColor={divederColor}
              onChangeText={value => onChange(value, 'name')}
            />

            <TextInput
              style={{
                ...stylesScreen.inputStyle,
                borderColor: colors.text,
                color: colors.text,
              }}
              placeholder="Ingrese su email"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
              keyboardAppearance="dark" // Android no agarro
              placeholderTextColor={divederColor}
            />

            <View style={stylesScreen.switcheRow}>
              <Text style={{...stylesScreen.switcheText, color: colors.text}}>
                Subscribir
              </Text>
              <CustomSwitch
                isOn={form.isSubscribed}
                onChange={value => onChange(value, 'isSubscribed')}
              />
            </View>

            <HeaderTitle title={JSON.stringify(form, null, 3)} />

            <HeaderTitle title={JSON.stringify(form, null, 3)} />

            <TextInput
              style={{
                ...stylesScreen.inputStyle,
                borderColor: colors.text,
                color: colors.text,
              }}
              placeholder="Ingrese su tel??fono"
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="phone-pad"
              placeholderTextColor={divederColor}
            />

            <View style={{height: 100}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.3)',
    marginVertical: 10,
  },
  switcheRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  switcheText: {
    fontSize: 25,
  },
});
