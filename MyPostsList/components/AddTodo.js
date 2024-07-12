import { StyleSheet, View, TextInput, Image, Button } from 'react-native';
import { useState } from 'react'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { usePosts } from './PostContext';
import AddImg from './AddImg';

export default function AddTodo({ navigation }) {
  const { posts, setPosts } = usePosts();
  const [text, setText] = useState('');
  const [image, setImage]= useState(null);

  const changeHandler = (val) => {
    setText(val);
  }
  const submitHandler = (text, image) => {
    let url = image ? image.uri : null;
    const ID = uuidv4();
    let old = posts;
    let new_list = [{ id: ID, txt: text, img: url},...old];
    setPosts(new_list);
  }
  const ButtonPressed = (text, image) => {
    submitHandler(text, image);
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder='New todo...'
        onChangeText={changeHandler}
      />
      <AddImg navigate={navigation} image={image} setImage={setImage}/>
      {image && <Image
        source={{ uri: image.uri }}
        style={styles.img}
      /> }
      <Button onPress={() => ButtonPressed(text, image)} title='Add' color='coral'/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  container:{
    flex: 1,
  },
  img: {
    width: 400,
    height: 600,
    resizeMode: 'center',
    flex:1 ,
  },
});
