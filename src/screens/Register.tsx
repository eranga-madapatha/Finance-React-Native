/* eslint-disable prettier/prettier */

import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Dimensions from '../theme/Dimensions';
import { Typography } from '../theme/Typography';
import Colors from '../theme/Colors';
import { PasswordInput } from '../components/PasswordInput';
import { KeyboardType } from '../enum/KeyboardType';
import { MainImage } from '../components/MainImage';
import { Container } from '../components/Container';
import Spacing from '../theme/Spacing';
import { InputText } from '../components/TextInput';
import { PrimaryBtnBlue } from '../components/ActionButtons';

const Register = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View>
        <MainImage />
      </View>
      <View style={styles.welcomeTxtView}>
        <Text style={Typography.l_4}>Sign Up</Text>
      </View>
      <KeyboardAvoidingView behavior="position">
        <Container>
          <View style={styles.inputEmail}><InputText label={"Email Address"} placeholder={"Email Address"} keyboard={KeyboardType.EMAIL}></InputText></View>
          <PasswordInput label={"Password"} placeholder={"Password"} keyboard={KeyboardType.DEFAULT}></PasswordInput>
          <View style={styles.forgotPasswordContainer}><Text style={Typography.l_6}>Forgot Password?</Text></View>
        </Container>
        <View style={styles.btnContainer}><PrimaryBtnBlue onPress={() => { navigation.navigate('Login') }} text={'Sign Up'} /></View>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.WIDTH,
    height: Dimensions.HEIGHT,
    backgroundColor: Colors.WHITE_COLOR
    // alignItems: 'center',
  },

  welcomeTxtView: {
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 34 * Dimensions.RESPONSIVE_HEIGHT,
    marginLeft: 31 * Dimensions.RESPONSIVE_WIDTH
  },
  welcometxtOuter: {
    marginBottom: -15,
  },
  inputView: {
    marginTop: 25 * Dimensions.RESPONSIVE_HEIGHT,
  },
  inputEmail: { marginBottom: Spacing.SMALL },
  loginButtonOuter: {
    marginTop: 28 * Dimensions.RESPONSIVE_HEIGHT,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  forgotPasswordContainer: {
    marginTop: Spacing.SMALL,
  },
  btnContainer: {
    marginBottom: 37 * Dimensions.RESPONSIVE_HEIGHT,
    alignItems: 'center',
  }
});

export default Register;
