import React, { useState, useEffect } from "react"
import { View, StyleSheet, Text, Platform, Image } from "react-native"
import Touchable from "react-native-platform-touchable"
import { Colors } from "../utils/constants" 


const DateIntervalPicker = ({selected, style, letter}) => {

  return (
    <Touchable style={style}>
      <View style={selected ? styles.selectedButton : styles.button}>
        <Text style={selected ? styles.selectedText : styles.text}>{letter}</Text>
      </View>
    </Touchable>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    height: 32,
    width: 32,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 2,
    padding: 2
  },
  selectedButton: {
    borderRadius: 100,
    height: 32,
    width: 32,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    backgroundColor: "white",
    borderWidth: 2,
    padding: 2
  },
  text: {
    color: "white",
    fontWeight: "800",
    fontSize: 16,
    textAlign: "center"
  },
  selectedText: {
    color: Colors.gummyGreenDark,
    fontWeight: "800",
    fontSize: 16,
    textAlign: "center"
  }
});

export default DateIntervalPicker;