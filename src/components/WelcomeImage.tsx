/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { WelcomeLogo } from '../assests/icons/Icons';

import Dimensions from '../theme/Dimensions';
import { Typography } from '../theme/Typography';


export const WelcomeImage = () => {
    return (
        <View><Image style={styles.img} source={require('../assests/images/backgroundImages/WelcomeBg.png')}></Image>
            <View style={styles.LogoTextOuter}><WelcomeLogo /><Text style={Typography.l_1}>Welcome{"\n"}Back</Text></View></View>
    );
}


const styles = StyleSheet.create({
    img: {
        width: Dimensions.WIDTH,
    },
    LogoTextOuter: {
        position: 'absolute', marginTop: 61 * Dimensions.RESPONSIVE_WIDTH,
        marginLeft: 52 * Dimensions.RESPONSIVE_WIDTH
    }
})