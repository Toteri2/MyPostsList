import React from "react";
import { StyleSheet, View, Text } from "react-native";


export default function Add({ navigation }) {
  return (
    <View style={styles.container}>
      <Text> Add screen </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
})