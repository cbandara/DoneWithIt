import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, SafeAreaView, View, TouchableWithoutFeedback, Keyboard } from 'react-native';

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={style}>{children}</View>
      </TouchableWithoutFeedback>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
})
export default Screen;