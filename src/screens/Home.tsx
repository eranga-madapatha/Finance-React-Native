/* eslint-disable prettier/prettier */
import React from 'react';
import {
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';
import { Container01 } from '../components/Container';
import Dimensions from '../theme/Dimensions';
import { Typography } from '../theme/Typography';
import Colors from '../theme/Colors';
import { Button1 } from '../components/Button1';
import { MenuIconButton } from '../components/MenuIconButton';
import { Statusbar } from '../components/StatusBar';

const Home = ({ navigation }: any) => {
    return (
        <ScrollView>
            <Statusbar backgroundColor={Colors.WHITE_COLOR} barStyle='dark-content' />
            <SafeAreaView style={styles.container}>
                <Container01>
                    <KeyboardAvoidingView behavior="position">
                        <View style={styles.menuIcon}><MenuIconButton onPress={() => { navigation.navigate('Login') }} /></View>
                        <View style={styles.welcomeTxtView}>
                            <View style={styles.welcometxtOuter}>
                                <Text style={Typography.l_11}>Home</Text>
                            </View>
                            <View style={styles.subHeadingOuter}>
                                <Text style={[Typography.l_12, styles.subTxt]}>Welcome to home screen</Text>
                            </View>
                        </View>
                        <View style={styles.inputView}>
                            <View style={styles.loginButtonOuter}>
                                <Button1 onPress={() => navigation.navigate('Login')} text={'SignOut'} />
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </Container01>
            </SafeAreaView>
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.WIDTH,
        height: Dimensions.HEIGHT,
        alignItems: 'center',
        backgroundColor: Colors.WHITE_COLOR,
    },
    welcomeTxtView: {
        marginTop: 200 * Dimensions.RESPONSIVE_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcometxtOuter: {
        marginBottom: -15,
    },
    inputView: {
        marginTop: 25 * Dimensions.RESPONSIVE_HEIGHT,
    },
    subHeadingOuter: {
        marginTop: 2 * Dimensions.RESPONSIVE_HEIGHT,
    },
    subTxt: {
        textAlign: 'center'
    },

    loginButtonOuter: {
        marginTop: 28 * Dimensions.RESPONSIVE_HEIGHT,
        alignItems: 'center',
    },
    resendOTPView: {
        marginTop: 14 * Dimensions.RESPONSIVE_HEIGHT,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    menuIcon: {
        marginTop: 30 * Dimensions.RESPONSIVE_HEIGHT
    }
});

export default Home;
