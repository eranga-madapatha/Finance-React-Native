/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import Dimensions from '../theme/Dimensions';

export const OtpVerifyImage = () => {
    return (
        <View><Image style={styles.img} source={require('../assests/images/OtpImage.png')}
            resizeMode='contain'></Image>
        </View>
    );
}


const styles = StyleSheet.create({
    img: {
        width: 221 * Dimensions.RESPONSIVE_WIDTH,
        height: 232 * Dimensions.RESPONSIVE_HEIGHT
    },
    LogoTextOuter: {
        position: 'absolute', marginTop: 61 * Dimensions.RESPONSIVE_WIDTH,
        marginLeft: 52 * Dimensions.RESPONSIVE_WIDTH
    }
})