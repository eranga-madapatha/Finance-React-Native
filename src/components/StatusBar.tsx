/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, StatusBar } from 'react-native';

interface btnProps {
    backgroundColor: any;
    barStyle: any;
    hidden: any;
}

export const Statusbar = (props: btnProps) => {
    const { backgroundColor, barStyle, hidden } = props;
    return (<StatusBar
        backgroundColor={backgroundColor}
        barStyle={barStyle}
        hidden={hidden}
    />);
}

const styles = StyleSheet.create({
})
