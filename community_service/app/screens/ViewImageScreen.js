import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'


import colors from '../reusable_styles/colors';

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name='close' color='white' size={35} />
      </View>
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../assets/chair.jpg')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    position: 'absolute',
    top: 60,
    left: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
})

export default ViewImageScreen;