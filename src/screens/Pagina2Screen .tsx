import React from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
//import { useNavigation } from '@react-navigation/native';

interface  Props extends StackScreenProps<any, any>{};


export const Pagina2Screen = ({navigation}: Props) => {
//const navigator = useNavigation()
  
  return (
   <View style={ styles.globlalMargin}> 
       <Text style={ styles.title }>Pagina2Screen</Text>
       <Button
            title='Ir pagina 3'
          //  onPress={() => navigator.navigate('Pagina3Screen') }
            onPress={() => navigation.navigate('Pagina3Screen') }
            />

       
   </View>
  )
}

