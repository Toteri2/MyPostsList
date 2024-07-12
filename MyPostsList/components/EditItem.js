import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { useState } from 'react'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import AddImg from './AddImg';
import { usePosts } from './PostContext';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-camera';


export default function EditItem({ navigation, item }) {
  const [selectedPost, setSelectedPost] = useState(item || null);
  const { posts, setPosts } = usePosts(); 
  const [newImage, setNewImage] = useState(null);
  const EditPost = (post) => {
      setSelectedPost(post);
  };
  const handleTextChange = (text) => {
    if (selectedPost) {
      setSelectedPost({ ...selectedPost, txt: text });
    }
  };
  const saveChanges = () => {
    if (selectedPost) {
      const index = posts.findIndex(posts => posts.id === selectedPost.id);
      const newPosts = [...posts];
      newPosts[index] = selectedPost;
      setPosts(newPosts);
      setSelectedPost(null);
      navigation.navigate('Home');
    }
  };
  const AddImg =  async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedPost(prevPost => ({
        ...prevPost,
        img: result.assets[0].uri,
      }));
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={selectedPost?.txt}
        onChangeText={handleTextChange}
        style={styles.input}
      />
      <Button title="Sélectionner une nouvelle image" onPress={AddImg}/>
      {selectedPost?.img && 
        <Image source={{ uri: selectedPost?.img }} style={styles.img} />}
      <Button title="Sauvegarder" onPress={saveChanges}/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    fontSize: 14,
    width: 'auto',
  },
  container:{
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  img: {
    resizeMode: 'center',
    aspectRatio: 1,
    width: '100%',
    height: 'auto',
    flex: 1,
  },
});