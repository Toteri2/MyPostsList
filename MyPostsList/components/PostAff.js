import { StyleSheet, View, FlatList } from 'react-native';
import TodoItems from './TodoItems';


export default function PostAff({ items, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.flat}>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <TodoItems item={item} navigation={navigation} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    padding: 16,
  },
  flat: {
    flex: 1,
    marginTop: 18,
  }
});
