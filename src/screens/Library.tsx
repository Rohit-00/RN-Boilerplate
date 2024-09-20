import { StyleSheet, View} from 'react-native'
import { useEffect, useState, useContext } from 'react'

import auth from '@react-native-firebase/auth'
import { BookmarkContext } from '../../store/bookmarkContextProvider'



export default function Home({navigation}:any) {
  const {addItem,savedItems} = useContext(BookmarkContext)
  const uid = auth().currentUser?.uid


    return (
      
      <View style={{flex:1}}>

      </View>
      
    )
  }


const styles = StyleSheet.create({
   
})
