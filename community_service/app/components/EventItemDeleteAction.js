import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'

import colors from '../reusable_styles/colors';

function EventItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={ styles.container }>
        <MaterialCommunityIcons
          name='trash-can'
          size={ 35 }
          color={ colors.white }
        />
        <Ionicons
          name="checkmark-circle-outline"
          size={ 35 }
          color="green" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.delete,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  }
})

export default EventItemDeleteAction;