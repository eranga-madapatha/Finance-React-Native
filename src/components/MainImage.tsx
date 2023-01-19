/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { WelcomeLogo } from '../assests/icons/Icons';

import Dimensions from '../theme/Dimensions';
import { Typography } from '../theme/Typography';


export const MainImage = () => {
    return (
        <View style={{ width: Dimensions.WIDTH }}><Image style={styles.img} source={require('../assests/images/backgroundImages/MainImage.png')}
            resizeMode='contain'></Image>
            <View style={styles.LogoTextOuter}><WelcomeLogo /><Text style={Typography.l_1}>Welcome{"\n"}Back</Text></View></View>
    );
}


const styles = StyleSheet.create({
    img: {
   
    },
    LogoTextOuter: {
        position: 'absolute', marginTop: 61 * Dimensions.RESPONSIVE_WIDTH,
        marginLeft: 52 * Dimensions.RESPONSIVE_WIDTH
    }
})