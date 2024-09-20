import React from 'react';
import { Text, StyleSheet, View, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';






const images = [
  { id: '1', uri: 'https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg' },
  { id: '2', uri: 'https://images.squarespace-cdn.com/content/v1/624da83e75ca872f189ffa42/aa45e942-f55d-432d-8217-17c7d98105ce/image001.jpg' },
  { id: '3', uri: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg' },
  { id: '4', uri: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg' },
  { id: '5', uri: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg' },
  // Add more images as needed
];



export default function Home({heading,data,navigation}:any){
  
  return (
    <View>
    <Text style={styles.heading}>{heading}</Text>
    <View style={styles.container}>
      <FlatList
        data={data}
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
        
      />
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