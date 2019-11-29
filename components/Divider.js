import React, { useState, useEffect } from "react"
import { View, StyleSheet, Text, Platform, Image } from "react-native"
import Touchable from "react-native-platform-touchable"
import { Colors } from "../utils/constants" 


const Divider =  (props) => <View {...props} style={{...styles.divider, ...props.style}}></View>

const styles = StyleSheet.create({
  divider: {
    backgroundColor: "#E5E5E5",
    width: "100%",
    marginVertical: 12,
    height: 1
  },
});

export default Divider;