import React, { useState } from 'react';
import { Image, StyleSheet, SafeAreaView, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';

import colors from '../reusable_styles/colors';

function RegisterScreen({ navigation }) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <SafeAreaView style={ styles.container }>
      <Entypo
        name="tree"
        style={ styles.logo }
        size={60}
        color={colors.mediumGrey}
      />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        icon='account-outline'
        onChange={ username => setUsername(username)}
        placeholder='Username'
        textContentType='nickname'
      />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        icon='email'
        keyboardType='email-address'
        onChange={ email => setEmail(email)}
        placeholder='Email'
        textContentType='emailAddress'
      />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={ false }
        icon='lock'
        onChange={ password => setPassword(password)}
        placeholder='Password'
        secureTextEntry={ true }
        textContentType='password'
      />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={ false }
        icon='lock'
        onChange={ password => setPassword(password)}
        placeholder='Confirm password'
        secureTextEntry={ true }
        textContentType='password'
      />
      <View style={styles.buttonsContainer}>
        <AppButton title='Register' onPress={() => console.log('Press')}  color='secondary'/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  buttonsContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 45,
    width: '100%',
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  }
})

export default RegisterScreen;