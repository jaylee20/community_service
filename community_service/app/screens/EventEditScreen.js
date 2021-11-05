import React, { useState } from 'react';
import { Image, StyleSheet, SafeAreaView } from 'react-native';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';

function EventEditScreen({ navigation }) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <SafeAreaView style={ styles.container }>
      <Image
        style={ styles.logo }
        source={require('../assets/logo-red.png')}
      />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        icon='email'
        keyboardType='email-address'
        onChange={ email => setEmail(email)}
        placeholder='Listings'
        textContentType='emailAddress'
      />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={ false }
        icon='lock'
        onChange={ password => setPassword(password)}
        placeholder='Listings'
        secureTextEntry={ true }
        textContentType='password'
      />
      <AppButton title='Login' onPress={() => console.log()} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  }
})

export default EventEditScreen;