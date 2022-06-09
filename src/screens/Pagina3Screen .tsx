import React from 'react'
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps< any, any>{};
export const Pagina3Screen = ({navigation}: Props) => {
  return (
   <View style={ styles.globlalMargin} >
       <Text style={ styles.title }>Pagina3Screen</Text>
       <Button
       title='Regresar'
       onPress={() => navigation.pop()}
       
       />
          <Button
       title='Ir al home'
       onPress={() => navigation.popToTop()}
       
       />
       
   </View>
  )
}

