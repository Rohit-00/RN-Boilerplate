import React, { useEffect, useState, useRef, lazy } from 'react'
import {  StyleSheet, View, TextInput, ScrollView, Image,  Pressable, TouchableOpacity, StatusBar, ActivityIndicator} from 'react-native'
import axios from 'axios';
import Icon from 'react-native-vector-icons/Feather'; 
import Icon2 from 'react-native-vector-icons/AntDesign'
import {Skeleton,Text, Box}from 'native-base'
import { supabase } from '../../utils/supabase';

export const truncateString = (str: string, maxLength: number): string => {
  if (str.length <= maxLength) {
    return str;
  }
  return str.substring(0, maxLength) + '...';
};

export default function Search2({navigation}:any) {
    const [query, setQuery] = useState('')
    const [keyword, setKeyword] = useState('')
    const [Items, setItems] = useState<any>([])
    const [loading, setLoading] = useState<boolean>()

    function addSearch(){
      setKeyword(query)
      setLoading(true)
      console.log(query)
    }

    //useEffect to fetch result
    useEffect(()=>{
          const func = async() => {
          }

          func()
                         
          },[keyword])



    
  
    return (
        
      <View style={styles.container}>
      <StatusBar barStyle='default' backgroundColor={'white'}></StatusBar>
      <View style={styles.searchContainer} >
      <TouchableOpacity onPress={()=>navigation.pop()} style={styles.backButton}><Icon2 name='left' size={24}  style={styles.searchIcon} /></TouchableOpacity>
        <TextInput
        autoFocus={true}
        onChangeText={setQuery}
        style={styles.searchInput}
        placeholder='Search Book, Author'
        onSubmitEditing={addSearch}
        />
        <TouchableOpacity onPress={addSearch} style={styles.searchButton}><Icon name='search' size={24}  style={styles.searchIcon} /></TouchableOpacity>
        </View>
        
        <View style={styles.resultContainer}>

        {loading?
        <View>
        <Skeleton h={180} width={'100%'} marginTop={3} borderTopLeftRadius={15} borderBottomLeftRadius={15}/>
        <Skeleton h={180} width={'100%'} marginTop={3} borderTopLeftRadius={15} borderBottomLeftRadius={15}/>
        <Skeleton h={180} width={'100%'} marginTop={3} borderTopLeftRadius={15} borderBottomLeftRadius={15}/>
        <Skeleton h={180} width={'100%'} marginTop={3} borderTopLeftRadius={15} borderBottomLeftRadius={15}/>
        </View>
        :
        <ScrollView showsVerticalScrollIndicator={false}>
        
        
      </ScrollView>}
        
      </View>
      
      
      </View>
    )
  }


const styles = StyleSheet.create({
  thumbnail:{
    height:100,
    width:70, 
    
     
    
  },
  container:{
    flex:1,
  },
  
  searchContainer:{
   flexDirection:'row', 
   justifyContent:'space-evenly',
   alignItems:'center',
   backgroundColor:'white',
   paddingBottom:10
  },

  searchInput:{   
    width:'70%',
    height:50,
    paddingLeft:20,
    marginRight:10,
    fontSize:16
  },
  searchButton:{
    marginRight:10
  },
  searchIcon:{
    padding:2
      },
  backButton:{
    marginLeft:10
  },

  bookContainer:{
    flexDirection:'row',
    marginVertical:10,
    marginHorizontal:0,
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  bookDetails:{
    flexDirection:'column',
    width:'65%',
    padding:10,
    justifyContent:'center'
    
    
    
  },
  bookDescription:{
  fontSize:11,
  lineHeight:15
  
  
  
  },
  bookTitle:{
    fontWeight:'bold',
    color:'black',
    fontSize:18,
    
  },
  bookAuthor:{
    fontSize:14,
    color:'black',
    
  },
  resultContainer:{

  },
  line:{
    height:1,
    backgroundColor:'grey',
    marginHorizontal:20
  }

  
 
})
