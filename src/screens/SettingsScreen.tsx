import React from 'react'
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles, colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {

  const insets = useSafeAreaInsets();
  
  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: insets.top + 20,
      
      }}>

        <Text> 
        <Icon name="hardware-chip-outline" size={30} color={colores.secondary} />
          Setting  Screen</Text>
    </View>
  )
}

