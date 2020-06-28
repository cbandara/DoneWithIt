import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Switch } from 'react-native';

import Screen from "./app/components/Screen";
import LoginScreen from './app/screens/LoginScreen';


export default function App() {
  const [category, setCategory] = useState();

  return <LoginScreen></LoginScreen>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
