import { StyleSheet, Text, View ,ActivityIndicator} from 'react-native'
import React,{useState,useEffect} from 'react'
 //import { GoogleSignin,statusCodes } from '@react-native-google-signin/google-signin';



const SplashScreen = () => {
   const [animating, setAnimating] = useState(true);
  //  const[greeting,setGreeting]= useState('');
 
       
// const hello="navigate";
   useEffect(() => {
//     setGreeting('click to proceed');
//     ()=>navigation.replace('LoginScreen') ;
   setTimeout(() => {
    setAnimating(false);
//       //Check if user_id is set or not
//       //If not then send for Authentication
//       //else send to Home Screen
//       // AsyncStorage.getItem('user_id').then((value) =>
//       //   navigation.replace(
//       //     value === null ? 'Auth' : 'DrawerNavigationRoutes'
//       //   ),
//       // );
//      // ()=>{navigation.navigate('LoginScreen')}
// //()=>{navigation.navigate('HomeScreen')};
//      //()=>navigation.replace('LoginScreen') ;
             
     }, 3000);   
   }, []);

  
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Tekxila</Text>
      <ActivityIndicator
        animating={animating }
        
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
      {/* <Button title=" go to login" onPress={ ()=>{navigation.navigate('LoginScreen')}}/>

      <Text style={{fontSize:40}}>{greeting} </Text> */}
    </View>
  )
}

export default SplashScreen;

const styles = StyleSheet.create({
  logo: {
    fontSize: 120,
    color: '#fb5b5a',
    fontWeight:'bold',
    backgroundColor: '#003f5c',
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#003f5c',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
})