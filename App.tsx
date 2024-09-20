import React, { Component,useState,useEffect } from 'react';
import { registerRootComponent } from 'expo';
import 'react-native-url-polyfill/auto';
import {
  StyleSheet,
} from 'react-native';
import { NativeBaseProvider, Box } from "native-base";

import { Svg } from 'react-native-svg';
import Icon from "react-native-vector-icons/Ionicons.js"

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import auth from '@react-native-firebase/auth'



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


//Login Screens
import Welcome from './src/screens/Welcome.tsx';
import SignUp from './src/screens/SignUp.tsx';
import SignIn from './src/screens/SignIn.tsx';
import OTP from './src/screens/OTP.tsx';


//Tab Screens
import Home from './src/screens/Home.tsx';
import Search from './src/screens/Search.tsx';
import Library from './src/screens/Library.tsx';
import Profile from './src/screens/Profile.tsx';
import Search2 from './src/screens/Search2.tsx';
import { BookmarkContextProvider } from './store/bookmarkContextProvider.tsx';
import { LanguageContextProvider } from './store/languageContextProvider.tsx';



function StackNavigations(){
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<any>();

  function onAuthStateChanged(user:any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  {user?console.log(user.emailVerified):'h'}
  
  return(
        <Stack.Navigator  
        initialRouteName={user?'Main':'SingIn'}
        screenOptions={{
          headerShown: false,
          animation: 'fade',}}>
        {user?<Stack.Screen name='Main' component={MainTabNavigator} options={{headerShown:false}}/> :
        <Stack.Screen name='Welcome' component={Welcome} options={{headerShown:false}}/>
        
        }
        <Stack.Screen name='OTP' component={OTP} options={{headerShown:false}}/>
        <Stack.Screen name='SignIn' component={SignIn} options={{headerShown:false, animation:'simple_push'}}/>
        <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false, animation:'simple_push'}}/>
        <Stack.Screen name='Search2' component={Search2} options={{headerShown:false}}/>
        
      </Stack.Navigator>
  )
}


function MainTabNavigator(): React.JSX.Element{
  return(
      <Tab.Navigator screenOptions={
        {
          tabBarStyle:{
            height:60,
            position:'absolute',
            margin:5,   
            borderRadius:24,
            borderWidth:0,
            marginBottom:10
          },
          
          tabBarShowLabel:false
          
        }
      }>
        <Tab.Screen name='Home' component={Home} options={{headerShown:false, tabBarIcon:({focused,size}:any)=>
          (focused?<Icon name='home' size={size} color={'#00C896'}></Icon>:<Icon name='home-outline' size={size}></Icon>)
        }} />

        <Tab.Screen name='Search' component={Search} options={{headerShown:false, tabBarIcon:({focused,size}:any)=>
          (focused?<Icon name='search' size={size} color={'#00C896'}></Icon>:<Icon name='search-outline' size={size}></Icon>)
        }} />
        <Tab.Screen name='Library' component={Library} options={{headerShown:false, tabBarIcon:({focused,size}:any)=>
          (focused?<Icon name='bookmark' size={size} color={'#00C896'}></Icon>:<Icon name='bookmark-outline' size={size}></Icon>)
        }} />
        <Tab.Screen name='Profile' component={Profile} options={{headerShown:false, tabBarIcon:({focused,size}:any)=>
          (focused?<Icon name='person' size={size} color={'#00C896'}></Icon>:<Icon name='person-outline' size={size}></Icon>)
        }}/>
      </Tab.Navigator>
  )
}

function App(): React.JSX.Element {


  
  return (
      <NativeBaseProvider>
      <NavigationContainer>
      <BookmarkContextProvider>
      <LanguageContextProvider>
      <StackNavigations />
      </LanguageContextProvider>
      </BookmarkContextProvider>
      </NavigationContainer>
      </NativeBaseProvider>
     
  );
}

const styles = StyleSheet.create({
 icon:{
  height:25,
  width:25,
  resizeMode:'contain'
 }
  
})


export default App;
