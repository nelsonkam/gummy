import React, { useState, useEffect } from "react"
import { View, StyleSheet, Text, Platform, Image } from "react-native"
import Touchable from "react-native-platform-touchable"
import { Colors } from "../utils/constants" 
import Divider from "./Divider"

const TitleBar = ({title}) => {
  return (
    <>
      <View style={styles.topBar}>
        <Text style={{fontWeight: "700", fontSize: 20}}>{title}</Text>
      </View>
      <Divider style={{marginVertical: 0}} />
    </>
  )
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
});

export default TitleBar;