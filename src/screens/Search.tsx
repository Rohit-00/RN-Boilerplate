import { Text, StyleSheet, View, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'; 


import { SafeAreaView } from 'react-native-safe-area-context';

export default function Search({navigation}:any) {
   
    return (
      <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
      <Text style={styles.heading}>Explore</Text>
      </View>
      <View style={styles.searchContainer} >
      <Icon name='search' size={24} color='white' style={styles.searchIcon} />
        <TextInput
        style={styles.searchInput}
        placeholder='Search Book, Author'
        onPress={()=>navigation.push('Search2')}
        />
      </View>
      
      
      </SafeAreaView>
    )
  }


const styles = StyleSheet.create({
  headingContainer:{

  },
  heading:{
    marginTop:'10%',
    fontSize:36,
    color:'white',
    fontWeight:'bold'
  },
  container:{
    
    marginHorizontal:10
  },
  
  searchContainer:{
   backgroundColor:'white',
   paddingHorizontal:10,
   flexDirection:'row', 
   marginTop:'7%',
   justifyContent:'center',
   alignItems:'center',
   
  },

  searchInput:{
    flex:1,
     
    height:50,
    paddingLeft:20,
    fontSize:16,
    paddingRight:0,
    
    borderColor:'#E6E6E6',
  },

  searchIcon:{
    opacity:0.50
  }
 
 
})
