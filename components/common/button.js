import React from "react";
import {  StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Button = ({ text, onClick, type, disabled, styles }) => {

  return (
    <View>
      <TouchableOpacity
        style={[styles, styles.buttonContainer]}
        disabled={disabled}
        type={type}
        onPress={onClick}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white'
  }
});

export default Button;