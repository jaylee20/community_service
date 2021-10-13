import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../reusable_styles/colors';

function AppTextInput({ icon, ...textProps }) {
  return (
    <View style={ styles.container }>
      {icon && <MaterialCommunityIcons name={ icon } size={ 30 } color={ colors.medium }  style={ styles.icon }/>}
      <TextInput style={ styles.textInput } { ...textProps }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    fontSize: 18,
    fontFamily: 'Avenir',
  },
})

export default AppTextInput;