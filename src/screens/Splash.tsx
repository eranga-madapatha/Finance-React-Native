/* eslint-disable prettier/prettier */

import React from 'react';
import {
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image
} from 'react-native';
import { MoneyLogo } from '../assests/icons/Icons';
import { Statusbar } from '../components/StatusBar';
import Colors from '../theme/Colors';
import Dimensions from '../theme/Dimensions';

const Splash = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <Statusbar backgroundColor={Colors.PRIMARY_COLOR} barStyle='light-content' />
            <View style={styles.LogoContainer}>
                {/* <MoneyLogo /> */}
                <Image style={styles.img} source={require('../assests/images/MoneyLogo.png')} />
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.WIDTH,
        height: Dimensions.HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.WHITE_COLOR,
    },
    LogoContainer: {
        width: 96 * Dimensions.RESPONSIVE_WIDTH,
        height: 77 * Dimensions.RESPONSIVE_HEIGHT
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    }
});

export default Splash;
