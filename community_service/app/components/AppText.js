import React from 'react';
import { Text, StyleSheet } from 'react-native';


function AppText({ children, style }) {
  return (
    <Text style={ [styles.text, { style } ] }>{ children }</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 21,
    fontWeight: "bold",
    paddingTop: 10,
    paddingLeft: 85,
    fontFamily: "Avenir",
  }
})

export default AppText;