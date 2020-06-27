import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

import Card from "./app/components/Card";
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';

export default function App() {
  const { landscape } = useDeviceOrientation();
  return <MessagesScreen />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
