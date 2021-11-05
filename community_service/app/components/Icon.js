import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

function Icon({ name, size=42, backgroundColor='#000', iconColor='#fff' }) {
  return (
    <View style={{
      width: size,
      height: size,
      borderRadius: 20,
      backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {width: 1, height: 5},
      shadowOpacity: 0.4,
    }}>
      <MaterialCommunityIcons name={ name } color={ iconColor } size={ size / 2 }/>
    </View>
  );
}

export default Icon;