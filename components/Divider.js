import React, { useState, useEffect } from "react"
import { View, StyleSheet, Text, Platform, Image } from "react-native"
import Touchable from "react-native-platform-touchable"
import { Colors } from "../utils/constants" 


const Divider =  () => <View style={styles.divider}></View>

const styles = StyleSheet.create({
  divider: {
    backgroundColor: "#E5E5E5",
    marginVertical: 12,
    width: "100%",
    height: 1
  },
});

export default Divider;