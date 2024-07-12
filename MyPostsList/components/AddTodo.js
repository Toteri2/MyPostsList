import { StyleSheet, View, TextInput, Button } from 'react-native';
import { useState } from 'react'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { usePosts } from './PostContext';

export default function AddTodo({ navigation }) {
  const { posts, setPosts } = usePosts();
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  }
  const submitHandler = (text) => {
    const ID = uuidv4();
    let old = posts;
    let new_list = [{ id: ID, txt: text, img: null},...old];
    setPosts(new_list);
  }
  const ButtonPressed = (text) => {
    submitHandler(text);
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder='New todo...'
        onChangeText={changeHandler}
      />
      <Button onPress={() => ButtonPressed(text)} title='Add' color='coral'/>
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
});
