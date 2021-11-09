import React from 'react';
import { View, StyleSheet, Image, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import colors from '../reusable_styles/colors';

import AppText from '../components/AppText';

function Card({ title, subtitle, image, onPress, onPressCheck, onPressDelete }) {
  return (
    <TouchableWithoutFeedback onPress={ onPress }>
      <View style={styles.card}>
        <Image style={ styles.image } source={ image } />
        <View styles={ styles.detailsContainer }>
          <Text style={ styles.title }>{ title }</Text>
          <Text style={ styles.subtitle }>{ subtitle }</Text>
          <View style={ styles.container }>
            <MaterialCommunityIcons
              name='trash-can'
              size={ 35 }
              color={ colors.primary }
              style={ styles.trash }
              onPress={onPressDelete}
            />
            <Ionicons
              name="checkmark-circle-outline"
              size={ 35 }
              color="green"
              onPress={onPressCheck}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: colors.white,
    // marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 5},
    shadowOpacity: 0.6,
    margin: 10,
    // overflow: 'hidden',
  },
  container: {
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 7,
  },
  image: {
    borderRadius: 20,
    width: '100%',
    height: 200,
  },
  map: {
    width: 100,
    height: 100,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 21,
    fontWeight: "bold",
    paddingBottom: 5,
    paddingLeft: 85,
    fontFamily: "Avenir",
  },
  title: {
    marginBottom: 1,
    fontSize: 21,
    fontWeight: "bold",
    paddingTop: 10,
    paddingLeft: 85,
    fontFamily: "Avenir",
  },
  trash: {
    paddingRight: 40,
  },
})

export default Card;