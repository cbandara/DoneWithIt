import React from 'react';
import { Dimensions, StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  console.log(Dimensions.get('screen'))
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: "dodgerblue",
        width: "50%",
        height: 70,
      }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
