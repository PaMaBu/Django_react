import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import {Constants} from 'expo-constants';
import ClassA from './Screens/ClassA';
import Create from './Screens/Create';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from './Screens/Detail';
import Edit from './Screens/Edit';

const Stack = createNativeStackNavigator();

// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{title: 'Welcome'}}
//         />
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

  const myStyles = {
    title:"article list",
    headerTintColor:"white",
    headerStyle: {
      backgroundColor:"blue",

    }
  }

function App() {
  return (
      <View style={styles.container}>
      <Stack.Navigator>
          <Stack.Screen name = "Home"
           component={Home}
           options={myStyles} 
          />
          <Stack.Screen name = "Create"
           component={Create}
           options={{...myStyles, title:"Create"}}
          />

          <Stack.Screen name = "Detail"
           component={Detail}
           options={{...myStyles, title:"Detail"}}
          />

          <Stack.Screen name = "Edit"
           component={Edit}
           options={{...myStyles, title:"Edit"}}
          />
          
      </Stack.Navigator>
    </View>
  );
}


export default() => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: Constants.StatusBarHeight,
  },
  cinkopesotext: {
    fontSize: 20,
    color: '#f00'
  },
});

