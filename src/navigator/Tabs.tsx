import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabNavigator } from './TopTabNavigator';
import TabBarTop from '@react-navigation/material-top-tabs/lib/typescript/src/views/MaterialTopTabBar';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs =() =>{

return Platform.OS ==='ios'
  ? <TabsIos/>
  :
  <TabsAndroid/>

}


const BottomTabAndroid = createMaterialBottomTabNavigator();

function TabsAndroid() {
  return (
    <BottomTabAndroid.Navigator
        sceneAnimationEnabled={ true }
        barStyle={{ 
          backgroundColor : colores.primary
        }}
       
       screenOptions={({route}) => ({

        tabBarStyle:{
            borderTopColor: 'white',
          borderTopWidth:  0,
          elevation: 0,
          shadowColor:'transparent'
           
        }, 
        tabBarActiveTintColor: 'blue',
        tabBarLabelStyle:{
        fontSize:16               
     } ,
          tabBarIcon:({color, focused,}) => {
          let iconName: string =  '';
           switch (route.name) {
             case 'Tab1Screen':
              iconName ='game-controller-outline'
                break;
             case 'Tab2Screen':
               iconName = 'hardware-chip-outline'
                break;
           
             case 'StackNavigator':
              iconName =  'cash-outline'           
                break;
                 
           }
   
            return <Icon name={ iconName } size={25} color={colores.third} />
                 
          },
        
        })
                  
        }
         
        
         
        
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{title: 'Tab2'}} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />

       </BottomTabAndroid.Navigator>
  );
}



const BottomTabIos = createBottomTabNavigator();

export function TabsIos() {
  return (
    <BottomTabIos.Navigator
    sceneContainerStyle={{
      backgroundColor: 'white'     
    }}
     
     screenOptions={({route}) => ({
       tabBarActiveTintColor: 'blue',
      tabBarStyle:{
        borderTopColor: 'white',
        borderTopWidth:  0,
        elevation: 0
      },
      tabBarLabelStyle:{
        fontSize:16
      },
       tabBarIcon:({color, focused, size}) => {
        let iconName: string =  '';
        switch (route.name) {
          case '':
            iconName = 'game-controller-outline'
                break;
          case 'Tab2Screen':
            iconName = 'hardware-chip-outline'
                break;
        
          case 'StackNavigator':
            iconName = 'St'
          break;
              
        }

         return <Icon name={ iconName } size={25} color={colores.primary} />
       }
     })
    }
     // tabBarActiveBackgroundColor: 'gray',
     
   
    
    >
      <BottomTabIos.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabIos.Screen name="Tab2Screen" options={{title: 'Tab2'}} component={TopTabNavigator} />
      <BottomTabIos.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />

    
    </BottomTabIos.Navigator>
  );
}