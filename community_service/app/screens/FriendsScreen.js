import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, SafeAreaView } from 'react-native';
import AppButton from '../components/AppButton';

function FriendsScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.buttonsContainer}>
        <AppButton
          title='Go To Account Details'
          onPress={() => navigation.navigate('Account')}
          color='secondary'
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    paddingTop: 300,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 45,
    width: '100%',
  }
})

export default FriendsScreen;