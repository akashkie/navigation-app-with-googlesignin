import { StyleSheet, Text, View ,Image} from 'react-native'
import React, {useState,useEffect}from 'react'
import { GoogleSignin,statusCodes} from '@react-native-google-signin/google-signin';

const ProfileScreen = ()=>{
  const [userInfo,setUserInfo] = useState(null);


  useEffect(
    () => {
    // Initial configuration
    GoogleSignin.configure({
      // Mandatory method to call before calling signIn()
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      //webClientId:" 374446273457-67aje0r7f6gf29uaj4lm0ql7ekp286q8.apps.googleusercontent.com",
    });
    
    _getCurrentUserInfo();
  }, []);

  
  const _getCurrentUserInfo = async () => {
    try {
      let info = await GoogleSignin.signInSilently();
      console.log('User  --> ', info);
      console.log('user info-->1',userInfo);
      setUserInfo(info);
      console.log('user info--->2',userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        Alert.alert('User has not signed in yet');
        console.log('User has not signed in yet');
      } else {
        Alert.alert("Unable to get user's info");
        console.log("Unable to get user's info");
      }
    }
  };

  
//

  return (
    <View style={styles.container}>
     
      <Image
        source={
          {uri:userInfo.user.photo}
        //{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAACBCAMAAACvrzuTAAAAaVBMVEX4+PgAAAD////8/Pzt7e3m5ubw8PDj4+P09PS9vb2lpaWysrIzMzPX19dISEjb29uNjY0PDw9+fn7ExMTLy8tkZGQ7OzsUFBRPT0+dnZ2UlJRqamqEhIRWVlZBQUEZGRkjIyNzc3MqKirW4UQNAAAEaUlEQVR4nO2cW3eySgyGZxLORxVQBFHx///ID7BWBbZuSyY4a/Fe9KLl4mlWCDnNCLFo0aJFT0LAuRH+pgY8XeWJfvQIVnpYSyn3MDfKpwLwq5ZcykIzu6PjneSPNGOHsJS/0spnUHjyQZ5GdkexeUSXGsUZdMon9CDWh13UT+gyd7Rhh/0zujxo86pC0kOXqTbsVt5n18djij56oYvZ0eqjn0Nd7A6rPvtGF3S0j312bYI7+H10jQJkP8jkhi5mF0bf7PqkMgOX8bTxGAHP+aM+MaZV1UPXh70XIWt98seGPT0/oK+ERugC3Tv52fvSnhL+6vnX9zCTXz+nvw81P+ELvL+BsOI0cd0kjU2EB/PircIu3ZazedBM/VVdRceoqgs/NWDWkNmw2l6WB7sW8RRE2cY14WZRbCumY+2HTvMbANMro/XDC7DL6xTm8yQw/Kj/6ZTng2uLjsm2HYCO2wm9YPBg++96xjy2R3AHRdFV29ILW2po/RogLrLT+INSRrO8xGgPbf7oEqUf2qYd+vV/cl9VheymB//8mqnlD94/0ziZywyP3nuo/609a7zEQTE3SQUj/KBhNB2eC53UYX7gmXwewvV7mE/lslgeB6UciXgaNwcV6HuHgRzc9yAfa80S4xEvKtBZHAboY4yUCUuUQeNlFvMn8TjMWJtuunymDxOO5uGTxPVZwpgcPbN40Aetrulac7VX0SJ/U9l6lJi8KYI+VsXlMdfSn1Q+X81Uvqf5SAEbubCo8wG+fRS0idEZR2fkKWTGkfj+sFO/qivGErsmZmeMMoOZ40SdUka7D8bU03The1VRbGnZA75RMVrECfDW4mM3qdn5Rn9oE39Wt4w+ExOzB7a+dmdcYiL39zXfXgca1IU232IHeXyXB32/qzJnq/gEkFfajPk7dcnHuOk5XHecqoBtSKagGcnVixQYkrOzVX0qJk1spZND33w/ceWSSN5Kbb5PPOgqhsJsXoMpdS+1la3ttKkpQXjSeMgUsMtKcFheyWCY6byWol0CuU0Z1sageg/yJ61M5fRKomSnwDMVez3G9APWm86qJwlYK2OXqmfziiJNJ+WpDaj4tHZSf4CIvni6SX23hrw7dlOmmlyoSYRbceSTCnY5Wu00Tsh4xsRAX3JLeTSZar+anp3rxgVMd9ToZ7bxDf36Et/+PvlSRMW3WEC9BLRjHHALNEnHCBvWEx+k6STjfLsTEn6geDaZH9jpCqia/XQWWTP+wrdVcIcn8hruo1mtiBp881y/hCkBejbTIVYCl89mcParcHC9zIdiy3xH2HHaeaGIbwllDP5V1+ByjLavToFW81m9gxfjDcp1tEps0zAMM/Q32/EzdOXst6JAMtyQqDwbrmfOu0PPYHrD08Mn7xtO+Ru9SqRMrV4/GkHEvWPpJf9R51GBebiBHWtfjDbSG/sb/qbqrgO45Kv4a+6JQDQTrzgUfmK/uBC1+ZMTp66bhMYXuMtdV79+f1HF2OUXixYtWvTV+gdVpj3qMMHargAAAABJRU5ErkJggg=='}
      }
    style={styles.image} 
    />
    
    <Text style={styles.textstyle}> profile pic</Text>
      
     <View style={styles.containerIn}>
      <Text style={styles.textstyle}>User :   
        {userInfo.user.name} 
       </Text>
      <Text style={styles.textstyle}>First Name :   
      {userInfo.user.givenName}  
      </Text>
      <Text style={styles.textstyle}>Last Name :   
       {userInfo.user.familyName}  
      </Text>
      <Text style={styles.textstyle}>Email :    
        { userInfo.user.email}   
       </Text>
       <Text style={styles.textstyle}>ID no :   
         {userInfo.user.id} 
        </Text> 
      </View>
    </View>
  )
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'lightgrey',
  },
  image:{
    height:300,
    width:300,
    borderRadius:300/2,
    borderWidth:2,
    borderColor:'#003f5c',
    margin:5,
  },
  textstyle:{
    color:'black',
    margin:10,
    fontSize:20,
    marginBottom:30

  },
  containerIn:{
   alignItems:'flex-start',
   justifyContent:'space-between',
    borderWidth:2,
    borderColor:'#003f5c',
    borderRadius:10,
    width:'95%',
    height:350,
    backgroundColor:'white',
  }

})