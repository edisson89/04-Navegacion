import React, { useEffect } from 'react'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { View, Text, Button,TouchableOpacity} from 'react-native';
//import { StackScreenProps } from '@react-navigation/stack';
import { styles, colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';


//interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any, any>{};


export const Pagina1Screen = ({ navigation }: Props) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: ()=>(
        <TouchableOpacity
        onPress={()=> navigation.toggleDrawer()}
        >
         <Icon name="menu-outline" size={30} color={colores.secondary} />

          
        
        </TouchableOpacity>
        

      )

    })
  
  
  }, [])
  
  return (
   <View style={styles.globalMargin}>
       <Text style={ styles.title}>Pagina1Screen</Text>

       <Button
       title= 'Ir pagina 2'
       onPress={ () => navigation.navigate('Pagina2Screen')} >
       </Button>

       <Text  style={{
         marginVertical:20,
         fontSize:20
       }}
       
       >Navegar con Argumentos</Text>

       <View style={{flexDirection:'row'}}>

         <TouchableOpacity
           style={{
                ...styles.botonGrande,
                backgroundColor:'#558556D6'

           }             
            }
           onPress={ () => navigation.navigate('PersonaScreen',{
            id: 1,
            nombre: 'Michell'

          })}
       >
         <Text style={styles.botonGrandeTexto}>Marce</Text>
       </TouchableOpacity>

       <TouchableOpacity
         style={{
          ...styles.botonGrande,
          backgroundColor:'#FF9427'

     }             
      }
          onPress={ () => navigation.navigate('PersonaScreen',{
            id: 2,
            nombre: 'Marcela '

          })}
       >
         <Text style={styles.botonGrandeTexto}>Michelle</Text>
       </TouchableOpacity>
       </View>

       
   </View>
  )
}

