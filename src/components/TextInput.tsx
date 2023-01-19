/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Typography } from '../theme/Typography';
import Colors from '../theme/Colors';
import Dimensions from '../theme/Dimensions';
import { KeyboardType } from '../enum/KeyboardType';
import { Tick } from '../assests/icons/Icons';

interface TextInputProps {
  label: any;
  placeholder: any;
  keyboard: any;
}

export const InputText = (props: TextInputProps) => {
  const { label, placeholder, keyboard } = props;
  return (
    <>
      <Text style={[Typography.l_5, styles.Label]}>{label}</Text>
      <View style={styles.InputContainer}>
        <TextInput
          style={[Typography.l_7, styles.input]}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder={placeholder}
          keyboardType={
            keyboard === KeyboardType.EMAIL
              ? 'email-address'
              : keyboard === KeyboardType.PHONE_NUMBER
                ? 'phone-pad'
                : keyboard === KeyboardType.NUMERIC
                  ? 'number-pad'
                  : 'default'
          }
        />
        <View style={styles.EmailCheckContainer}><Tick /></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50 * Dimensions.RESPONSIVE_HEIGHT,
    width: 315 * Dimensions.RESPONSIVE_WIDTH,
    backgroundColor: Colors.WHITE_COLOR,
    borderBottomWidth: 1,
    justifyContent: 'center',
    paddingBottom: 0,
    borderBottomColor: Colors.BLUE_2,
  },
  InputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Label: {
    textAlign: 'left',
  },
  EmailCheckContainer: {
    position: 'absolute',
    right: 67 * Dimensions.RESPONSIVE_WIDTH
  }
});
