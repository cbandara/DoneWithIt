import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppText from './AppText'

export default function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return (
    <View>
      <AppText style={styles.error} >{error}</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
  error: {
    color: 'red'
  }
})
