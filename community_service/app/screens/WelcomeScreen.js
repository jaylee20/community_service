import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { useFonts, Inter_900Black, Roboto } from '@expo-google-fonts/inter';

import AppButton from '../components/AppButton';

function  WelcomeScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    Inter_900Black, Roboto
  });

  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <LottieView
          style={styles.logo}
          source={require('../assets/lottie/72702-tree.json')}
          autoPlay
        />
        <Text style={styles.header}>
          Community
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title='Login' onPress={() => navigation.navigate('Login')}/>
        <AppButton title='Register' onPress={() => navigation.navigate('Register')} color='secondary'/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 45,
    width: '100%',
  },
  header: {
    fontSize: 45,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 5},
    shadowOpacity: 0.2,
  },
  logo: {
    width: 400,
    height: 400,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 5},
    shadowOpacity: 0.4,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  tagLine: {
    fontFamily: 'Roboto',
    fontSize: 40,
    // fontWeight: "bold",
    // paddingVertical: 20,
  }
})


export default WelcomeScreen;