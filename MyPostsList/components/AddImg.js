import React, { useState } from 'react';
import { Button, Text, Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-camera';

export default function AddImg({ navigation, image, setImage }) {

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Invalid Permissions');
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage({
        uri: result.assets[0].uri,
        name: result.assets[0].fileName,
      });
    }
  };
  return (
    <View style={styles.container}>
      <Button title="Add Image" onPress={pickImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  img: {
    width: 400,
    height: 600,
    resizeMode: 'center',
    flex:1 ,
  },
})
