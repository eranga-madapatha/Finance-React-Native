/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ButtonCircles, LeftCircle, RightArrow, RightCircle } from '../assests/icons/Icons';
import Colors from '../theme/Colors';
import Dimensions from '../theme/Dimensions';
import { Typography } from '../theme/Typography';

interface btnProps {
    text: any;
    onPress: any;
}

export const PrimaryBtnBlue = (props: btnProps) => {
    const { text, onPress } = props;
    return (<TouchableOpacity onPress={onPress} style={styles.PrimaryBtnBlue}>
        <LinearGradient colors={['#4960F9', '#1433FF']} ></LinearGradient>
        <Text style={Typography.l_2}>{text}</Text>
        <View style={{ position: 'absolute', right: 0, top: 0, borderRadius: 28 * Dimensions.RESPONSIVE_WIDTH }}><ButtonCircles /></View>
        <View style={{ position: 'absolute', right: 30 }}><RightArrow color={Colors.WHITE_COLOR} /></View>
    </TouchableOpacity >);
}

export const SecondayBtnWhite = (props: btnProps) => {
    const { text, onPress } = props;
    return (<TouchableOpacity onPress={onPress} style={styles.SecondayBtnWhite}>
        <Text style={Typography.l_3}>{text}</Text>
        {/* <View style={{ position: 'absolute', right: 0, top: 0, borderRadius: 28 * Dimensions.RESPONSIVE_WIDTH }}><ButtonCircles /></View> */}
        <View style={{ position: 'absolute', right: 30 }}><RightArrow color={Colors.BLUE_1} /></View>
    </TouchableOpacity>);
}

export const BothSideCircleBtn = (props: btnProps) => {
    const { text, onPress } = props;
    return (<TouchableOpacity onPress={onPress} style={styles.BothSideCircleBtn}>
        <LinearGradient colors={['#4960F9', '#1433FF']} ></LinearGradient>
        <View><Text style={Typography.l_2}>{text}</Text></View>
        <View style={{ position: 'absolute', left: 0, top: 0, borderRadius: 28 * Dimensions.RESPONSIVE_WIDTH }}><LeftCircle /></View>
        <View style={{ position: 'absolute', right: 0, bottom: 0, borderRadius: 28 * Dimensions.RESPONSIVE_WIDTH }}><RightCircle /></View>
    </TouchableOpacity >);
}

const styles = StyleSheet.create({
    PrimaryBtnBlue: {
        width: Dimensions.RESPONSIVE_WIDTH * 315,
        height: 72 * Dimensions.RESPONSIVE_HEIGHT,
        backgroundColor: Colors.SECONDARY_COLOR,
        justifyContent: 'center',
        paddingLeft: 27 * Dimensions.RESPONSIVE_WIDTH,
        borderRadius: 28 * Dimensions.RESPONSIVE_WIDTH,
        overflow: 'hidden',
    },
    SecondayBtnWhite: {
        width: Dimensions.RESPONSIVE_WIDTH * 315,
        height: 72 * Dimensions.RESPONSIVE_HEIGHT,
        backgroundColor: Colors.WHITE_COLOR,
        justifyContent: 'center',
        paddingLeft: 27 * Dimensions.RESPONSIVE_WIDTH,
        borderRadius: 28 * Dimensions.RESPONSIVE_WIDTH,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: Colors.SECONDARY_COLOR
    },
    BothSideCircleBtn: {
        width: Dimensions.RESPONSIVE_WIDTH * 315,
        height: 72 * Dimensions.RESPONSIVE_HEIGHT,
        backgroundColor: Colors.SECONDARY_COLOR,
        justifyContent: 'center',
        borderRadius: 28 * Dimensions.RESPONSIVE_WIDTH,
        overflow: 'hidden',
        alignItems: 'center'
    }
})
