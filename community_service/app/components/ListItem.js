import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';

import AppText from './AppText';
import colors from '../reusable_styles/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable'

function ListItem({ title, subtitle, image, IconComponent, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={ renderRightActions }>
      <TouchableHighlight
        underlayColor={colors.lightGrey}
        onPress={onPress}
      >
        <View style={ styles.container }>
          {IconComponent}
          {image && <Image style={ styles.image } source={ image } />}
          <View style={ styles.detailsContainer }>
            {title && <AppText style={ styles.title }>{ title }</AppText>}
            {subtitle && <AppText style={ styles.subtitle }>{ subtitle }</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
  },
  detailsContainer: {
    marginLeft: -65,
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: '500',

  },
  subtitle: {
    color: colors.mediumGrey,
  }
})

export default ListItem;