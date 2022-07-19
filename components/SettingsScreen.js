import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30,color:'white'}}>Welcome to Settings Screen</Text>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
})