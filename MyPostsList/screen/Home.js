import React from "react";
import { StyleSheet, View, Text } from "react-native";


export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text> Home screen </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
})