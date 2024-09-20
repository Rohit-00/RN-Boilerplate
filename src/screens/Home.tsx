import { Text, StyleSheet, View,  StatusBar} from 'react-native'


export default function Home({navigation}:any) {

  
    return (
      
      <View>
        <View style={styles.headingContainer}><Text style={styles.heading}>After Reads</Text></View>
      <StatusBar barStyle='default' backgroundColor={'white'}></StatusBar>
      
       
        
      </View>
      
    )
  }


const styles = StyleSheet.create({
  heading:{
    fontSize:26,
   
    
  },
  headingContainer:{
    backgroundColor:'white',
    paddingHorizontal:10,
    paddingVertical:10

  },
   
})
