import React from "react";
import { StyleSheet, View, Text } from "react-native";


export default function Change({ navigation }) {
  return (
    <View style={styles.container}>
      <Text> Change screen </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
})