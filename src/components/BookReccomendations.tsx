import React,{useEffect,useState} from 'react';
import { Text, StyleSheet, View, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import { supabase } from '../../utils/supabase';
import { Skeleton } from 'native-base';






export default function BookRecommendations({heading,navigation}:any){
    const [datad, setData] = useState<any>()
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        const getLibrary = async() =>{
          const {data,error} = await supabase.from('recommendations')
          .select('*')
          .eq('category',heading)
          setData(data)
          setLoading(false)
          
    }
    getLibrary()
    console.log(datad)
      },[])
  return (
    <View>
    <Text style={styles.heading}>{heading}</Text>
    <View style={styles.container}>
    {loading?
    
    <Skeleton h={200} w={130}></Skeleton>
    
    
    : <FlatList
        data={datad}
        horizontal
        keyExtractor={(item) => item.bookId}
        renderItem={({ item }) => (
        <View>      
          <TouchableOpacity onPress={()=>navigation.navigate('BookDetails',{thumbnail:item.bookThumbnail,id:item.bookId,title:item.bookTitle,author:item.bookAuthor,desc:item.description})}>
          <Image source={{ uri: item.bookThumbnail}} style={styles.image}/>
          <Text style={styles.bookTitle}>{item.bookAuthor}</Text>
          </TouchableOpacity>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        
      />}
     
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
 
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  image: {
    width: 130,
    margin:5,
    marginBottom:0,
    height: 200, // Adjust the height as needed
    resizeMode: 'cover',
    borderRadius:6
  },
  heading:{
    color:'black',
    fontSize:20,
    margin:5,
    fontWeight:'bold',
    opacity:0.80,
    marginBottom:10
  },
  bookTitle:{
    width:121,
    margin:5,
    fontWeight:'bold',
    textAlign:'center'
  }
});