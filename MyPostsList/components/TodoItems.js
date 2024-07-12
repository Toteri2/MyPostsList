import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { usePosts } from './PostContext';

export default function TodoItems({ item, navigation }) {
  const { posts, setPosts } = usePosts();
  
  const DeleteItem = (id) => {
    setPosts(currentPosts => currentPosts.filter(item => item.id !== id));
  };
  const ModifyItem = (item) => {
    navigation.navigate('Change', { item: item});
  }

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <View style={styles.iconsAndTextContainer}>
          <TouchableOpacity onPress={() => DeleteItem(item.id)} style={styles.icons}>
            <MaterialIcons name='delete' size={25} color={'#333'}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => ModifyItem(item)} style={styles.icons}>
            <MaterialIcons name='edit' size={25} color={'#333'}/>
          </TouchableOpacity>
          <Text style={styles.txt}>{item.txt}</Text>
      </View>
        {item.img && (
          <Image
            source={{ uri: item.img }}
            style={styles.img}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    margin: 10,
    backgroundColor: '#f9f9f9',
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 'auto',
    margin: 10,
    flex: 1,
    margin: 5,
    width: '100%',
  },
  iconsAndTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  icons: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
    width: 'auto',
    height: 'auto',
  },
  txt: {
    marginLeft: 12,
    marginTop: 5,
    color: '#333',
    fontSize: 18,
    flexShrink: 1,
  },
  img: {
    resizeMode: 'center',
    aspectRatio: 1,
    width: '100%',
    height: 'auto',
    flex: 1,
    marginTop: 10,
  },
});

