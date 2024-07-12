import React from "react";
import { StyleSheet, View } from "react-native";
import AddTodo from "../components/AddTodo";


export default function Add({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AddTodo navigation={navigation} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  header: {
    flex: 1,
  }
})