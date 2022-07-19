import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <Text style={styles.text}>Hello {/*userInfo.user.name*/}</Text>
      <Button  onPress={()=>navigation.navigate('SplashScreen')} title=" back to start"/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center'
  },
  text:{
    fontSize:30,
    fontWeight:'bold',
    color:'green',

  }
})