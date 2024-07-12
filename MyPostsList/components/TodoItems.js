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
    padding: 1,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 30,
    margin: 5,
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '80%',
    flex: 1,
    margin: 5,
  },
  iconsAndTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  icons: {
    padding: 5,
  },
  txt: {
    marginLeft: 12,
    marginTop: 5,
  },
  img: {
    resizeMode: 'center',
    aspectRatio: 1,
    width: '100%',
    height: 'auto',
    flex: 1,
  },
});

