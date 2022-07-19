import{initializeApp}from '@react-native-firebase/app'
import {getFirestore,collection,getDocs} from'@react-native-firebase/firestore';
import { SnapshotViewIOSBase } from 'react-native';
//import firestore from '@react-native-firebase/firestore'
// import auth from '@react-native-firebase/auth';
const firebaseConfig={
    apiKey:"",
    authDomain:"",
    projectId:"",
    storageBucket:"",
    messagingSenderId:"",
    appId:"",
}
//init firebase app
initializeApp(firebaseConfig)
//init services
const db = getFirestore()
// collection ref
const colRef = collection(db,'user')

//get collection data
getDocs(colRef)
.then((Snapshot)=>{console.log(snapshot.docs)})

//get data
//const storeData= await firestore().collection('users').add(userInfo.user);