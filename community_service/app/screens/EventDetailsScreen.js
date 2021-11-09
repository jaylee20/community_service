import React from 'react';
import { View, Image, StyleSheet, SafeAreaView, Text, ScrollView } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import AppText from '../components/AppText';
import ListItem from '../components/ListItem'

import colors from '../reusable_styles/colors';

function getAspectRatio(img) {
  const data = Image.resolveAssetSource(img);
  return data.width / data.height;
}
// </Marker>
function EventDetailsScreen({ route }) {
  const event = route.params;

  return (
    <SafeAreaView>
      <View>
        <ScrollView
          horizontal

          style={ styles.imageContainer }
        >
          {event.imageCarousel.map(
            image =>
          (
          <Image
            key={image}
            style={ styles.image }
            source={ image }
          />
          )
          )}
          {
            <MapView
              initialRegion={{
                latitude: event.latitude,
                longitude: event.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.121,
              }}
              provider={PROVIDER_GOOGLE}
              style={styles.map}
            >
            <Marker
              coordinate= {{
                latitude: event.latitude,
                longitude: event.longitude,
              }}
              title={ event.address }
            />
            </MapView>
          }
        </ScrollView>
        <View style={ styles.detailsContainer }>
          <Text style={ styles.title }>{ event.title }</Text>
          <View style={ styles.container }>
            <Text style={ styles.adjText }>What: </Text>
            <Text style={ styles.text }>{ event.description }</Text>
          </View>
          <View style={ styles.container }>
            <Text style={ styles.adjText }>When: </Text>
            <Text style={ styles.text }>{ event.date }</Text>
          </View>
          <View style={ styles.container }>
            <Text style={ styles.adjText }>Contact Name: </Text>
            <Text style={ styles.text }>{ event.contactName }</Text>
          </View>
          <View style={ styles.container }>
            <Text style={ styles.adjText }>Contact Phone: </Text>
            <Text style={ styles.text }>{ event.contactPhone }</Text>
          </View>
          <View style={ styles.container }>
            <Text style={ styles.adjText }>Location: </Text>
            <View>
              <Text style={ styles.text }>{ event.address }</Text>
              <Text style={ styles.text }>{ event.city }</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  adjText: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  container: {
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 7,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    height: 200,
    width: 350,
    margin: 10,
    borderRadius: 25,
  },
  imageContainer: {
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 5},
    shadowOpacity: 0.7,
  },
  map: {
    height: 200,
    width: 350,
    margin: 10,
    borderRadius: 25,
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,

    textAlign: 'center',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  userContainer: {
    marginVertical: 50,
  },
})

export default EventDetailsScreen;