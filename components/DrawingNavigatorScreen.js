import React from 'react'
//import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import LogoutScreen from './screens/LogoutScreen';
const Drawer= createDrawerNavigator();

const DrawingNavigatorScreen = ({navigation})=> {  
  return (

<Drawer.Navigator initialRouteName='Home'>
<Drawer.Screen  name=" Home" component={HomeScreen}/>
<Drawer.Screen  name=" Profile" component={ProfileScreen}/>
<Drawer.Screen  name=" Settings" component={SettingsScreen}/>
<Drawer.Screen  name=" Logout" component={LogoutScreen}/>
</Drawer.Navigator>

  )
    
}

export default DrawingNavigatorScreen;