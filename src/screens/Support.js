import React, { useState, useEffect } from "react"
import { View, StyleSheet, Text, Platform, Image } from "react-native"
import Touchable from "react-native-platform-touchable"
import { Colors } from "../utils/constants" 


const Support = () => {
  return (
    <View style={styles.container}>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: Platform.OS === "ios" ? 0 : 1,
    height: "100%",
  },
});


export default Support;