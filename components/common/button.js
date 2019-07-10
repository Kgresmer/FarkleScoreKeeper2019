import React from "react";
import {  StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Button = ({ text, onClick, type, disabled, styles, fontSize }) => {

  return (
    <View style={[styles.buttonContainer, styles]}>
      <TouchableOpacity
        disabled={disabled}
        type={type}
        onPress={onClick}>
        <Text style={[styles.buttonText, {fontSize: fontSize}]}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    backgroundColor: '#0b7a75',
    padding: 5,
    margin: 5
  },
  buttonText: {
    color: 'white'
  }
});

export default Button;
