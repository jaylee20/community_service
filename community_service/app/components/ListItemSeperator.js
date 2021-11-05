import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../reusable_styles/colors';

function ListItemSeperator() {
  return (
    <View style={ styles.separator }/>
  );
}

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.lightGrey
  }
})

export default ListItemSeperator;