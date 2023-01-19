/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Typography } from '../theme/Typography';
import Colors from '../theme/Colors';
import Dimensions from '../theme/Dimensions';
import { KeyboardType } from '../enum/KeyboardType';

interface TextInputProps {
    placeholder: any;
    keyboard: any;
}

export const TextInputWithoutLabel = (props: TextInputProps) => {
    const { placeholder, keyboard } = props;
    return (
        <>
            <View style={styles.InputContainer}>
                <TextInput
                    style={[Typography.l_7, styles.input]}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder={placeholder}
                    keyboardType={
                        keyboard === KeyboardType.EMAIL
                            ? 'email-address'
                            : keyboard === KeyboardType.PHONE_NUMBER
                                ? 'phone-pad'
                                : keyboard === KeyboardType.NUMERIC
                                    ? 'number-pad'
                                    : 'default'
                    }
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 50 * Dimensions.RESPONSIVE_HEIGHT,
        width: 233 * Dimensions.RESPONSIVE_WIDTH,
        paddingTop: 20 * Dimensions.RESPONSIVE_HEIGHT,
        backgroundColor: Colors.WHITE_COLOR,
        borderBottomWidth: 1,
        justifyContent: 'center',
        paddingBottom: 0,
        borderBottomColor: Colors.BLUE_2,
        textAlign: 'center'
    },
    InputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Label: {
        textAlign: 'left',
    },
    EmailCheckContainer: {
        position: 'absolute',
        right: 67 * Dimensions.RESPONSIVE_WIDTH
    }
});
