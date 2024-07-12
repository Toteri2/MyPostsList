import React from "react";
import { StyleSheet, View, Text } from "react-native";
import EditItem from "../components/EditItem";
import { usePosts } from '../components/PostContext';

export default function Change({ navigation, route }) {
  const { posts, setPosts } = usePosts();
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <EditItem navigation={navigation} item={item}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
})