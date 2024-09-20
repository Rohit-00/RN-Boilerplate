import React,{useContext, useEffect, useState} from 'react'
import { View,StyleSheet,TouchableOpacity,Text, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Modal } from 'native-base';
import { supabase } from '../../utils/supabase';
import { BookmarkContext } from '../../store/bookmarkContextProvider';
import { LanguageContext } from '../../store/languageContextProvider';

const languages = [{id:1,lang:'Arabic'},
    {id:2,lang:'Bengali'},
    {id:3,lang:'Bulgarian'},
    {id:4,lang:'Chinese simplified'},
    {id:5,lang:'Chinese traditional'},
    {id:6,lang:'Croatian'},
    {id:7,lang:'Czech'},
    {id:8,lang:'Danish'},
    {id:9,lang:'Dutch'},
    {id:10,lang:'English'},
    {id:11,lang:'Estonian'},
    {id:12,lang:'Finnish'},
    {id:13,lang:'French'},
    {id:14,lang:'German'},
    {id:15,lang:'Greek'},
    {id:16,lang:'Hebrew'},
    {id:17,lang:'Hindi'},
    {id:18,lang:'Hungarian'},
    {id:19,lang:'Indonesian'},
    {id:20,lang:'Italian'},
    {id:21,lang:'Japanese'},
    {id:22,lang:'Korean'},
    {id:23,lang:'Latvian'},
    {id:24,lang:'Lithuanian'},
    {id:25,lang:'Norwegian'},
    {id:26,lang:'Polish'},
    {id:27,lang:'Portuguese'},
    {id:28,lang:'Romanian'},
    {id:29,lang:'Russian'},
    {id:30,lang:'Serbian'},
    {id:31,lang:'Slovak'},
    {id:32,lang:'Slovenian'},
    {id:33,lang:'Spanish'}, 
    {id:34,lang:'Swahili'}, 
    {id:35,lang:'Swedish'}, 
    {id:36,lang:'Thai'}, 
    {id:37,lang:'Turkish'}, 
    {id:38,lang:'Ukrainian'}, 
    {id:39,lang:'Vietnamese', }]
const Buttons = ({uid,id,bookThumbnail,bookTitle}:any) => {
    const [showModal,setShowModal] = useState<boolean>(false)
    const {language,addLanguage} = useContext(LanguageContext)
    const [isSaved,setIsSaved] = useState<boolean>()
   const {addItem,savedItems} = useContext(BookmarkContext)
    useEffect(()=>{
        const fetchReadLater = async () =>{
        const {data,error} = await supabase
        .from('ReadLater')
        .select('*')
        .eq('bookId',id)
        .eq('uid',uid)
        if(data?.length===0){
          setIsSaved(false)
          }
        else{
          setIsSaved(true)
        }
    }
    })

    const addToLibrary = async () =>{
      
        const {data,error} = await supabase
        .from('ReadLater')
        .select('*')
        .eq('bookId',id)
        .eq('uid',uid)
         getLibrary()
  if(data?.length===0){
    setIsSaved(true)
        await supabase
        .from('ReadLater')
        .insert([
          { uid:uid, bookTitle:bookTitle ,bookId:id,bookThumbnail:bookThumbnail },
        ])
        .select()
        getLibrary()
              
        }
  else{
    setIsSaved(false) 
    await supabase.from('ReadLater')
    .delete()
    .eq('uid',uid)
    .eq('bookId',id)
    console.log('deleted from db')
    
  }
      }
      const getLibrary = async() =>{
            const {data,error} = await supabase.from('ReadLater')
            .select('*')
            .eq('uid',uid)
            .order('created_at',{ascending:false})
            addItem(data)
            console.log('Fetched and stored')
      }
  return (
    <View style={styles.groupButtons}>
          {isSaved===true?<View style={styles.buttonContainer}><TouchableOpacity onPress={addToLibrary}><View style={styles.button}><Icon name='bookmark' size={26} color='white' ></Icon></View></TouchableOpacity><Text style={styles.buttonLabel}>Saved</Text></View>
          :<View style={styles.buttonContainer}><TouchableOpacity onPress={addToLibrary}><View style={styles.button}><Icon name='bookmark-outline' size={26} color='white' ></Icon></View></TouchableOpacity><Text style={styles.buttonLabel}>Save</Text></View>
        }
          
          <View style={styles.buttonContainer}><TouchableOpacity onPress={()=>setShowModal(true)}><View style={styles.button}><Icon name='language-outline' size={26} color='white' ></Icon></View></TouchableOpacity><Text style={styles.buttonLabel}>{language?language:'English'}</Text></View>
          <View style={styles.buttonContainer}><TouchableOpacity><View style={styles.button}><Icon name='share-social-outline' size={26} color='white' ></Icon></View></TouchableOpacity><Text style={styles.buttonLabel}>Save</Text></View>
        
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header ><Text style={styles.modalHeader}>Choose a language</Text></Modal.Header>
          <Modal.Body style={styles.modalBody}>
              <ScrollView>
              {languages.map((item)=>(
                <View style={styles.languageContainer}>
                <TouchableOpacity onPress={()=>{addLanguage(item.lang); setShowModal(false)}}><Text style={styles.languageText} key={item.id}>{item.lang}</Text></TouchableOpacity>
                </View>
              ))}
              </ScrollView>
          </Modal.Body>
          
        </Modal.Content>
      </Modal>
          </View>
  )
}

export default Buttons
const styles = StyleSheet.create({
    button:{
        backgroundColor:"#00C896",
        marginHorizontal:10,
        padding:7,
        borderRadius:25,
        width:40,
        alignItems:'center',
        justifyContent:'center'
      },
      buttonContainer:{
        
      },
      groupButtons:{
        flexDirection:'row',
        
        justifyContent:'center'
      },
      buttonLabel:{
        textAlign:'center',
        fontSize:12
      },
      modalHeader:{
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
      },
      modalBody:{
        height:300
      },
      languageText:{
        fontSize:20,
        
        fontWeight:'bold',
        textAlign:'center',
        
        
      },
     
      languageContainer:{
        
        marginVertical:2.5,
        paddingVertical:2.5
  
  
      },
})