import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import AppText from './AppText';

import colors from '../config/colors'

function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
    marginRight: 10,
  },
  title: {
    fontWeight: "400",

  },
  subTitle: {
    color: colors.medium
  },
})

export default ListItem;
