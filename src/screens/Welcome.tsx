/* eslint-disable prettier/prettier */

import React from 'react';
import {
    KeyboardAvoidingView,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
    Text
} from 'react-native';
import { PrimaryBtnBlue, SecondayBtnWhite } from '../components/ActionButtons';

import { Container, MainContainer } from '../components/Container';
import { Statusbar } from '../components/StatusBar';
import { WelcomeImage } from '../components/WelcomeImage';
import Colors from '../theme/Colors';
import Dimensions from '../theme/Dimensions';


const Welcome = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <Statusbar backgroundColor={Colors.PRIMARY_COLOR} barStyle='light-content' hidden={true} />
            <View style={styles.WelcomeImgOuter}>
                <WelcomeImage />
            </View>
            <KeyboardAvoidingView behavior="position">
                <View style={styles.BtnContainer}><MainContainer>

                    <View style={styles.loginBtnContainer}><PrimaryBtnBlue onPress={() => { navigation.navigate('Login') }} text={'Sign In'} /></View>
                    <SecondayBtnWhite onPress={() => { navigation.navigate('Register') }} text={'Sign Up'} />
                </MainContainer></View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.WIDTH,
        height: Dimensions.HEIGHT,
        alignItems: 'center',
        backgroundColor: Colors.WHITE_COLOR,
    },

    WelcomeImgOuter: {
        height: 0.75 * Dimensions.HEIGHT
    },
    WelcomeLogoOuter: {

    },
    loginBtnContainer: { marginBottom: 40 * Dimensions.RESPONSIVE_HEIGHT },
    BtnContainer: {
        marginBottom: 31 * Dimensions.RESPONSIVE_HEIGHT
    }
});

export default Welcome;
