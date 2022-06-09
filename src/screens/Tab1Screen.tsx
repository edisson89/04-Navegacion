import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles, colores } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export const Tab1Screen = () => {
  const  Icono = <Icon name="rocket" size={30} color="#900" />;
  const {top} = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1Screen');        
    
  }, [])
  
  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: top + 10


    }}>
        <Text style={styles.title}> Iconos</Text>
 <Text>
    <Icon name="hardware-chip-outline" size={30} color={colores.secondary} />
  {Icono}
 </Text>

  
 

   

    </View>
  )
}

