/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from './Colors';
import Dimensions from './Dimensions';
import Fonts from './Fonts';

type Style = {
  l_1: TextStyle;
  l_2: TextStyle;
  l_3: TextStyle;
  l_4: TextStyle;
  l_5: TextStyle;
  l_6: TextStyle;
  l_7: TextStyle;
  l_8: TextStyle;
  l_9: TextStyle;
};

export const Typography = StyleSheet.create<Style>({
  l_1: {
    fontFamily: Fonts.REGULAR,
    fontSize: 28 * Dimensions.RESPONSIVE_WIDTH,
    color: Colors.WHITE_COLOR,
  },
  l_2: {
    fontFamily: Fonts.REGULAR,
    fontSize: 20 * Dimensions.RESPONSIVE_WIDTH,
    color: Colors.WHITE_COLOR,
  },
  l_3: {
    fontFamily: Fonts.REGULAR,
    fontSize: 20 * Dimensions.RESPONSIVE_WIDTH,
    color: Colors.BLUE_1,
  },
  l_4: {
    fontFamily: Fonts.BOLD,
    fontSize: 28 * Dimensions.RESPONSIVE_WIDTH,
    color: Colors.PRIMARY_COLOR,
  },
  l_5: {
    fontFamily: Fonts.SF_REGULAR,
    fontSize: 14 * Dimensions.RESPONSIVE_WIDTH,
    color: Colors.GRAY_1,
  },
  l_6: {
    fontFamily: Fonts.SF_REGULAR,
    fontSize: 14 * Dimensions.RESPONSIVE_WIDTH,
    color: Colors.BLUE_3,
  },
  l_7: {
    fontFamily: Fonts.SF_REGULAR,
    fontSize: 14 * Dimensions.RESPONSIVE_WIDTH,
    color: Colors.PRIMARY_COLOR,
  },
  l_8: {
    fontFamily: Fonts.BOLD,
    fontSize: 24 * Dimensions.RESPONSIVE_WIDTH,
    color: Colors.PRIMARY_COLOR,
  },
  l_9: {
    fontFamily: Fonts.REGULAR,
    fontSize: 16 * Dimensions.RESPONSIVE_WIDTH,
    color: Colors.PRIMARY_COLOR,
  },
});
