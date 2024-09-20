
import { Text, StyleSheet, View, Image, TouchableOpacity, useColorScheme} from 'react-native'
import auth from '@react-native-firebase/auth'

export default function Welcome({navigation}:any) {
    const colorScheme = useColorScheme();
    

    const styles = StyleSheet.create({
        body:{
            
            
        },
        bodyText:{
            color:'black',
            marginTop:10,
            fontSize:18,
            fontWeight:'bold',
            fontFamily:'inter',
            textAlign:'center'
            
        },
        highlight:{
            color:"#00C896"
        },
        imageContainer:{
           flex:1.5,
           justifyContent:"flex-end",
           alignItems:'center',
           paddingBottom:30
           
        },
        buttonContainer:{ 
            flex:1,
            justifyContent:'flex-start',
            alignItems:'center',
            marginTop:20,  
            
        },
        image:{
            
            height:250,
            width:250
        },
        container:{
            height:'100%',
            width:'auto',
            alignItems:'center',
            backgroundColor: colorScheme === 'dark' ? '#23252D' : '#F7F7F7'
           
            
        },
        
        darkContainer:{
              
        },
        button:{
            fontSize:15,
            fontWeight:'bold',
            color:'white',
            height:50,
            width:300,
            padding:15,
            textAlign:'center',
            borderRadius:30,
            backgroundColor:'#00C896',
            margin:10,
            marginTop:0,
            shadowOffset:{width:10,height:10}
        },
        button2:{
            fontSize:15,
            fontWeight:'bold',
            color:colorScheme === 'dark' ? 'white' : 'black',
            opacity:0.65,
            height:50,
            width:300,
            padding:15,
            textAlign:'center',
            borderRadius:25,
            backgroundColor:colorScheme === 'dark' ? 'white' : 'white',
            margin:10,
            marginTop:0    
        }
    })
    
    
    return (
      
        <View style={styles.container}>
        <View style={styles.imageContainer}>
        <Image 
        source={require('../../assets/images/welcomeImg2.png')} 
        style={styles.image} />
        <Text style={styles.bodyText}>
        Revising books made {'\n'}
        easy with <Text style={styles.highlight}> After Reads </Text>
        </Text>
        </View>
        
        <View style={styles.buttonContainer}>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.replace('SignIn')}>
            <Text style={styles.button}>
            Get Started
            </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>{ auth().signOut() }}>
            <Text style={styles.button2}>
            Already have an account
            </Text>
        </TouchableOpacity>
        </View>
        </View>
        
        
      
    )
  }


