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
import { BothSideCircleBtn, PrimaryBtnBlue, SecondayBtnWhite } from '../components/ActionButtons';

import { Container, MainContainer } from '../components/Container';
import { OtpVerifyImage } from '../components/OtpVerifyImage';
import { Statusbar } from '../components/StatusBar';
import { TextInputWithoutLabel } from '../components/TextInputWithoutLabel';
import { WelcomeImage } from '../components/WelcomeImage';
import { KeyboardType } from '../enum/KeyboardType';
import Colors from '../theme/Colors';
import Dimensions from '../theme/Dimensions';
import Spacing from '../theme/Spacing';
import { Typography } from '../theme/Typography';


const OtpMobile = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <Statusbar backgroundColor={Colors.PRIMARY_COLOR} barStyle='light-content' hidden={false} />
            <View style={styles.WelcomeImgOuter}>
                <OtpVerifyImage />
            </View>
            <KeyboardAvoidingView behavior='position'>
                <View><MainContainer>
                    <View style={styles.headerTextView}><Text style={Typography.l_8}>OTP Verification</Text></View>
                    <View style={styles.SubTextView}>
                        <Text style={Typography.l_9}>We will send you a one-time password</Text>
                        <Text style={Typography.l_9}>to this mobile number</Text></View>
                    <Text style={Typography.l_5}>Enter Mobile Number</Text>
                    <TextInputWithoutLabel placeholder={''} keyboard={KeyboardType.PHONE_NUMBER} />
                    <View style={styles.BtnContainer}></View>
                    <BothSideCircleBtn text={'Get OTP'} onPress={() => { }} />
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
        marginTop: 102 * Dimensions.RESPONSIVE_HEIGHT
    },

    WelcomeLogoOuter: {

    },
    loginBtnContainer: { marginBottom: 40 * Dimensions.RESPONSIVE_HEIGHT },
    BtnContainer: {
        marginBottom: 51 * Dimensions.RESPONSIVE_HEIGHT
    },
    headerTextView: { marginTop: Spacing.EXTRA_LARGE },
    SubTextView: { marginTop: Spacing.SMALL, alignItems: 'center', marginBottom: 32 * Dimensions.RESPONSIVE_HEIGHT }
});

export default OtpMobile;
