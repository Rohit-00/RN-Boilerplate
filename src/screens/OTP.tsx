import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import {ReactNode, useEffect, useState} from 'react'
import auth from '@react-native-firebase/auth'
export default function OTP({navigation}:any){
 
  const [email,setEmail] = useState('')
  useEffect(()=>{
    const sendVerification = async() =>{
      const email:any = await auth().currentUser?.email
      setEmail(email)
      await auth().currentUser?.sendEmailVerification()
    }
    sendVerification()
  })
    
    return (
      
    <View>
    <View style={styles.otpContainer}>
        <Text style={styles.heading}>Verify Email</Text>
        <Text style={{padding:10}}>Verification Email sent to {email}</Text>
        

</View>
<View style={styles.buttonContainer}>
    <TouchableOpacity onPress={()=>auth().currentUser?.sendEmailVerification()}><Text style={styles.resend}>Resend Email</Text></TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}><Text style={styles.resend}>Sign In</Text></TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.pop()}><Text style={styles.resend}>Change Email</Text></TouchableOpacity>
    </View>
</View>
    
    )
  }


  const styles = StyleSheet.create({
    heading:{
        fontSize:32,
        marginTop:30,
        color:'black',
        opacity:0.65
    },
    otpContainer:{
        alignItems:'center',
    },
    borderStyleBase: {
      width: 30,
      height: 45
    },
  
    borderStyleHighLighted: {
      borderColor: "#03DAC6",
    },
  
    underlineStyleBase: {
      width: 70,
      height: 45,
      borderWidth: 0,
      borderBottomWidth: 1,
      borderColor:'black',
      color:'black',
      fontSize:24
    },
  
    underlineStyleHighLighted: {
      borderColor: "#00C896",
    },
    
      resend:{
        color:'#00C896',
        justifyContent:'center',
        alignItems:'center',
        
      
      },
      buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:'10%',
        marginTop:0
      },
      error:{
        color:'red'
      }
      
  });
  
