import { useState} from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import auth from '@react-native-firebase/auth';

import { object, string, number, date, InferType } from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (id:any,value:any) => {
  try {
    await AsyncStorage.setItem(id, value);
    console.log('uid stored successfully'+value)
  } catch (e) {
    console.log(e)
  }
};

export default function SignIn2({navigation}:any) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const onRegister= async ()=>{
    auth().signInWithEmailAndPassword(email,password) 
    .then(()=>{
      if(auth().currentUser?.emailVerified===true){
      navigation.replace('Main',{email:email})
              console.log('User Signed In successfuly!')}
      else{console.log('email not verfied') 
        

        }
  }).then(()=>{const uid : any = auth().currentUser; storeData("uid",uid.uid)})
    .catch((error)=>{
      console.log(error)
      if (error.code === 'auth/email-already-in-use') {
        console.warn('That email address is already in use!');
      }
      if (error.code === 'auth/invalid-email') {
        console.warn('That email address is invalid!');
      }
    })
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="always">
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <Text style={styles.title}>Sign In</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setEmail}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        autoCapitalize="none"
        onChangeText={setPassword}
      />
      
      <TouchableOpacity onPress={onRegister}><Text style={styles.button}>Sign Up</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.push('SignUp')}><Text style={{textDecorationLine:'underline'}}>Don't have an account? Sign In</Text></TouchableOpacity>
      </View>
      <View style={styles.horizontalLineContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.socialContainer}>
      <TouchableOpacity style={styles.googleButton} onPress={() => {}}>
        <Text style={styles.googleText}>Sign In with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.facebookButton} onPress={() => {}}>
        <Text style={styles.facebookText}>Sign In with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.appleButton} onPress={() => {}}>
        <Text style={styles.appleText}>Sign In with Apple</Text>
      </TouchableOpacity>
      
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  inputContainer:{
    flex:1,
    width:'100%',
    alignItems:'center',
    justifyContent:'flex-end'
  },
  socialContainer:{
    flex:1,
    width:'100%',
    justifyContent:'flex-start',
    alignItems:'center',
    
  },
  title: {
    opacity:0.65,
    color:'black',
    fontSize: 32,
    fontWeight:'bold',
    marginBottom: 16,
  },
  button:{
    backgroundColor:'#00C896',
    width:300,
    textAlign:'center',
    padding:15,
    fontSize:14,
    color:'white',
    fontWeight:'600',
    height:50,
    borderRadius:30,
    marginVertical: 8
  },
  input: {
    width: '85%',
    padding: 10,
    marginVertical: 8,
    borderRadius: 30,
    backgroundColor:'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.20,
    shadowRadius: 1.84,
    elevation: 2,
    
  },
  googleButton: {
    color:'black',
    backgroundColor:'white',
    width:300,
    textAlign:'center',
    padding:15,
    fontSize:14,
    
    fontWeight:'600',
    height:50,
    borderRadius:30,
    marginVertical: 8,
    
  },
  googleText: {
    color: 'black',
    fontWeight:'bold',
  
    fontSize: 14,
    textAlign:'center'
  },
  facebookButton: {
    backgroundColor:'#4267B2',
    width:300,
    padding:15,
    fontSize:14,
    color:'white',
    fontWeight:'600',
    height:50,
    borderRadius:30,
    marginVertical: 8
  },
  facebookText: {
    color: 'white',
    fontWeight:'bold',
    
    textAlign:'center'
  },
  appleButton: {
    backgroundColor:'black',
    width:300,
    padding:15,
    height:50,
    borderRadius:30,
    marginVertical: 8
  },
  appleText: {
    color: 'white',
    fontWeight:'bold',
    textAlign:'center'
  },
  horizontalLineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  line: {
    flex: 0.5,
    height: 1,
    justifyContent:'center',
    alignContent:'center',
    backgroundColor: 'gray',
  },
  orText: {
    marginHorizontal: 8,
    fontSize: 16,
    color: 'gray',
  },
});