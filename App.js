
import 'react-native-gesture-handler'
import { StyleSheet,SafeAreaView } from 'react-native'
import React,{useEffect,useState} from 'react'
// Import Navigators from React Navigation
 import {NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './components/screens/SplashScreen'
import LoginScreen from './components/screens/LoginScreen'
import DrawingNavigatorScreen from './components/DrawingNavigatorScreen';
 const Stack = createStackNavigator();

const App = () => {
  const [showSplashScreen,setShowSplashScreen]=useState(true);
 
  useEffect(()=>{
    setTimeout(()=>{
      setShowSplashScreen(false);
    },3000)
  },[]);
 
  
  return (
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
       <Stack.Navigator >
        {showSplashScreen?(<Stack.Screen
         name="SplashScreen"
        component={SplashScreen}
        // Hiding header for Splash Screen
          options={{headerShown: false}}
        />) : null}

     <Stack.Screen 
        name="LoginScreen"
       component={LoginScreen}
       options={{headerShown:false}}
     />  
       <Stack.Screen
         name="Drawer"
        component={DrawingNavigatorScreen}
        options={{headerShown:false}}
      />   
       </Stack.Navigator>
     </NavigationContainer>
</SafeAreaView>   
  )
}

export default App;

const styles = StyleSheet.create({


  container:{
    flex:1,
     
  }
})
/// clear-done
