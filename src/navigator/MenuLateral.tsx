import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();


export const MenuLateral  = () => {

  const { width} = useWindowDimensions();
  return (
    <Drawer.Navigator
    //drawerType= { width >= 768 ? 'permanent' : 'front'}
    drawerContent={(props) => <MenuInterno {...props } />} 
    >
      <Drawer.Screen name="Tabs" options={{title:'Iconos'}} component={Tabs} 
      />
      <Drawer.Screen name="SettingsScreen"  component={SettingsScreen} />
    </Drawer.Navigator>
  );
}  

const MenuInterno  = ({ navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image 
        source={{
          uri:'https://www.misemacau.org/wp-content/uploads/2015/11/avatar-placeholder-01.png'
       }}
       style={styles.avatar}
                 
                 
        />
      </View>
      {/* opciones de menu */}
      <View style={styles.menuContainer} >
        <TouchableOpacity         
         style={{
           ...styles.menuBoton,
           flexDirection:'row',
          
         }}
         onPress={() => navigation.navigate('Tabs')} 
        >
        <Icon name="earth-outline" size={30} color={colores.secondary} />
          <Text style={{
            ...styles.menuTexto,
            margin:5
          }       
          
          }>Navegacion</Text>
        </TouchableOpacity>
  
        <TouchableOpacity 
        
        style={{
          ...styles.menuBoton,
          flexDirection:'row',
         
        }
        } 
        onPress={() => navigation.navigate('SettingsScreen')}
        >
       <Icon  name="cog-outline" size={30} color={colores.secondary} />
        <Text style={ {
          ...styles.menuTexto,
          margin:5
          }}>Ajustes</Text>
        </TouchableOpacity>

      </View>
      
      

    </DrawerContentScrollView>
  );
}   