import React, { useState } from 'react';
import { Image, StyleSheet, SafeAreaView, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';

import colors from '../reusable_styles/colors';

function LoginScreen(props) {

  const [username, setUsername] = useState();
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
        autoCorrect={ false }
        icon='lock'
        onChange={ password => setPassword(password)}
        placeholder='Password'
        secureTextEntry={ true }
        textContentType='password'
      />
      <View style={styles.buttonsContainer}>
        <AppButton title='Login' onPress={() => console.log('Press')} />
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
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 5},
    shadowOpacity: 0.4,
  }
})

export default LoginScreen;