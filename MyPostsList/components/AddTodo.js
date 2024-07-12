import { StyleSheet, View, TextInput, Button } from 'react-native';
import { useState } from 'react'
import 'react-native-get-random-values';
import { usePosts } from './PostContext';

export default function AddTodo({ navigation }) {
  const { posts, setPosts } = usePosts();
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder='New todo...'
        onChangeText={changeHandler}
      />
      <Button onPress={() => console.log('pressed')} title='Add' color='coral'/>
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
