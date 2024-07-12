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
              headerStyle: { backgroundColor: 'lightblue' },
              headerTintColor: '#fff',
              headerTitleStyle: { fontWeight: 'bold' },
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen 
            name='Change' 
            component={Change}
            options={{
              headerStyle: { backgroundColor: 'green' },
              headerTintColor: '#fff',
              headerTitleStyle: { fontWeight: 'bold' },
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen 
            name='Add'
            component={Add}
            options={{
              headerStyle: { backgroundColor: 'orange' },
              headerTintColor: '#fff',
              headerTitleStyle: { fontWeight: 'bold' },
              headerTitleAlign: 'center',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PostProvider>
  );
}
