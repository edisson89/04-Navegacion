import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';



const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () =>  {

  const {top:paddingTop} = useSafeAreaInsets()
  return (
    <Tab.Navigator
    style={{paddingTop}}
    sceneContainerStyle={{
      backgroundColor:'white', 
       


     }}
    
    screenOptions={{
      tabBarPressColor: colores.fourth,
      tabBarShowIcon:false,
      tabBarIndicatorContainerStyle:{
      backgroundColor:colores.primary,
      },
      tabBarStyle:{
        borderWidth: 0,
        elevation: 0,  
        shadowColor:'transparent',
      },   
      tabBarIndicatorStyle:{
        backgroundColor: colores.primary,        
      
      }, 
      
     }}
     
    
    >
      <Tab.Screen name="ChatScreen" options={{title: 'Chat'}} component={ChatScreen}
         />
      <Tab.Screen name="ContactsScreen" options={{title: 'Contacts'}}  component={ContactsScreen} />
      <Tab.Screen name="AlbumScreen" options={{title:'Album'}} component={ AlbumScreen } />
      </Tab.Navigator>
  );
}