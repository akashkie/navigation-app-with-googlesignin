import { View, Text,TouchableOpacity,Alert } from 'react-native'
import React ,{useEffect}from 'react'
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export default function LogoutScreen({navigation}) {
  // const [userInfo, setUserInfo] = useState(null);
  // const [gettingLoginStatus, setGettingLoginStatus] = useState(true)
  useEffect(() => {
    // Initial configuration
   GoogleSignin.configure({
      // Mandatory method to call before calling signIn()
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      //webClientId:" 374446273457-67aje0r7f6gf29uaj4lm0ql7ekp286q8.apps.googleusercontent.com",
    });
    // Check if user is already signed in
    //_isSignedIn();
  }, []);

 
    //setGettingLoginStatus(false);
  

  // const _isSignedIn = async () => {
  //   const isSignedIn = await GoogleSignin.isSignedIn();
  //   if (isSignedIn) {
  //     Alert.alert('User is already signed in');
  //     // Set User Info if user is already signed in
  //    // _getCurrentUserInfo();
  //   } else {
  //     console.log('Please Login,you are not logged in');
  //   }
 
  const _signOut = async () => {
    //setGettingLoginStatus(true);
    // Remove user session from the device.
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      console.log('user loged out');
      // Removing user Info
      //setUserInfo(null); 
     console.log('User Info --> ', null)
    } catch (error) {
      console.error(error);
    }
  };
      
  
  return (
    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
      
      <TouchableOpacity onPress={ ()=>{_signOut();
      navigation.replace('LoginScreen');
      }}>
      <Text style={{color:'black',fontSize:40}}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
    }
    ///clear