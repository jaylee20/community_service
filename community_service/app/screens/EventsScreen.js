import React from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';

import Card from "../components/Card";
import colors from "../reusable_styles/colors";

import eventData from '../data/eventData';

function EventsScreen({ navigation }) {
  return (
    <SafeAreaView>
      <FlatList
        data={ eventData }
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={ item.title }
            subtitle={item.date}
            image={item.mainImage[0]}
            onPress={() => navigation.navigate('EventDetails', item)}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default EventsScreen;