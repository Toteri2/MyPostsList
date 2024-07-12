import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screen/Home';
import Change from './screen/Change';
import Add from './screen/Add';
import { PostProvider } from './components/PostContext';

const Stack = createStackNavigator()

export default function App() {
  return (
    <PostProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen 
            name='Home' 
            component={Home}
            options={{
              headerStyle: { backgroundColor: 'red' },
              headerTintColor: '#fff',
              headerTitleStyle: { fontWeight: 'bold' },
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen name='Change' component={Change}/>
          <Stack.Screen name='Add' component={Add}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PostProvider>
  );
}
