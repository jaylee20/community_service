import React, { useState } from 'react';
import { Image, StyleSheet, SafeAreaView, View, Picker } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';

import colors from '../reusable_styles/colors';

function EventSelectionScreen({ navigation }) {

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [event, setEvent] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(true);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <SafeAreaView style={ styles.container }>
      <Entypo
        name="tree"
        style={ styles.logo }
        size={60}
        color={colors.mediumGrey}
      />
      <View style={styles.eventContainer}>
        <AppTextInput
          autoCapitalize='none'
          autoCorrect={false}
          icon='baguette'
          onChange={ event => setEvent(event)}
          placeholder='Events...'
          textContentType='nickname'
        />
      </View>
      <View style={styles.dateContainer}>
        <AntDesign style={styles.icon} name="calendar" size={30} color="black" />
        <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
            style={styles.date}
          />
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title='Explore Events'
          onPress={() => navigation.navigate('ExploreEvent')}
          color='secondary'
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,

  },
  buttonsContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 45,
    width: '100%',
  },
  date: {
    paddingRight: 500,
  },
  dateContainer: {
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    paddingLeft: 90,
    paddingBottom: 30,
    marginVertical: 10,
  },
  eventContainer: {
    paddingLeft: 80,
  },
  icon: {
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 5},
    shadowOpacity: 0.6,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 5},
    shadowOpacity: 0.4,
  }
})

export default EventSelectionScreen;