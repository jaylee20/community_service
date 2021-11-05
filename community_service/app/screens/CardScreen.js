import React, {useState} from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';

import eventData from '../data/eventData';
import Card from "../components/Card";

import colors from '../reusable_styles/colors';

const newEvents = [...eventData];

function CardScreen({ navigation }) {
  const [index, setIndex] = useState(0);
  const [event, setEvent] = useState(newEvents[index]);

  const handleOnCheckPress = () => {
    const newIndex = index + 1;
    setEvent(newEvents[newIndex]);
    setIndex(newIndex);
  };

  const handleOnDeletePress = () => {
    const newIndex = index + 1;
    setEvent(newEvents[newIndex]);
    setIndex(newIndex);
  };

  return (
    <SafeAreaView>
      <Card
        title={ event.title }
        subtitle={event.date}
        image={event.mainImage[0]}
        onPress={() => navigation.navigate('EventDetails', event)}
        onPressCheck={handleOnCheckPress}
        onPressDelete={handleOnDeletePress}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,

  },
})

export default CardScreen;