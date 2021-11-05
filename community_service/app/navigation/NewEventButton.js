import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import colors from '../reusable_styles/colors';

function NewEventButton({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={ onPress }>
      <View style={styles.container}>
        <AntDesign
          name="rocket1"
          color={ colors.white }
          size={ 40 }
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderWidth: 10,
    borderRadius: 40,
    bottom: 20,
    height: 80,
    width: 80,
  },
})

export default NewEventButton;