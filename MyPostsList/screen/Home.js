import { StyleSheet, View, Button } from 'react-native';
import PostAff from '../components/PostAff'
import 'react-native-get-random-values';
import { usePosts } from '../components/PostContext';

export default function Home({ navigation }) {
  const { posts, setPosts } = usePosts();
  return (
    <View style={styles.container}>
      <Button 
        title='Add Post' 
        onPress={() => navigation.navigate('Add')}
        style={styles.AddButton}
      />
      <PostAff items={posts} navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  }
})