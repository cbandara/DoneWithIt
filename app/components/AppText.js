import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

function AppText({ children, style }) {
  return (
    <Text style={[styles.textBlack, style]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  textBlack: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
  },
  textWhite: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
    color: 'white',
  }
})

export default AppText;

