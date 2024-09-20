import { Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native'


export default function Banner() {
  
    return (
      <View style={styles.bannerBackground}>
        <View style={styles.bannerText}>
          <Text style={styles.bannerHeading}>Today's Read</Text>
          <Text style={styles.bannerBody}>"If you ever find that you're the most talented person in the room, you need to find another room."</Text>
          <Text style={styles.bannerAuthor}>-Austin Kleon</Text>
          <TouchableOpacity><Text style={styles.bannerButton}>Read</Text></TouchableOpacity>
        </View>
        <View>
          <Image 
          source={{uri:('https://m.media-amazon.com/images/I/61sQHzONWBL._AC_UF1000,1000_QL80_.jpg')}}
          style={styles.bannerThumbnail}
          
          />
        </View>
      </View>
    )
  }


const styles = StyleSheet.create({
    bannerBackground:{
        height:200,
        backgroundColor:'#9E81FF',
        margin:20,
        borderRadius:5,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    bannerText:{
      margin:10,
      width:200
    },
    bannerHeading:{
      fontWeight:'bold',
      fontSize:24,
    },
    bannerBody:{
      
      fontSize:14
    },
    bannerAuthor:{
      textAlign:'right'

    },
    bannerButton:{
      backgroundColor:'#00C896',
      padding:12,
      marginRight:100,
      textAlign:'center',
      borderRadius:25,
      color:'white',
      marginTop:10
      
    },
    bannerThumbnail:{
      height:180,
      width:110,
      borderRadius:5,
    }
})
