/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Dimensions from '../theme/Dimensions';

interface ContainerProps {
  children: any;
}

export const Container = (props: ContainerProps) => {
  const { children } = props;
  return <View style={styles.Container}>{children}</View>;
};

export const MainContainer = (props: ContainerProps) => {
  const { children } = props;
  return <View style={styles.MainContainer}>{children}</View>;
};


const styles = StyleSheet.create({
  Container: {
    width: Dimensions.WIDTH * 1,
    margin: 30 * Dimensions.RESPONSIVE_WIDTH,
  },
  MainContainer: {
    alignItems: 'center',
  },
});

