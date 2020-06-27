import React from 'react'
import { ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import colors from '../config/colors'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={8}
      style={styles.background}
      source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.appTitle}>Done With It</Text>
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login"></AppButton>
        <AppButton title="Register" color="secondary"></AppButton>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  appTitle: {
    fontSize: 40,
    fontWeight: "600",
    paddingVertical: 20,
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: "center",
  },
  buttonsContainer: {
    paddingHorizontal: 20,
    width: '100%',
    marginBottom: 30
  },
  tagline: {
    fontSize: 21,
    fontWeight: "600",
    paddingVertical: 20,
    color: 'black',
  }
})

export default WelcomeScreen