import React, { useState, useEffect } from "react"
import { View, StyleSheet, Text, Platform, Image } from "react-native"
import Touchable from "react-native-platform-touchable"
import { Colors } from "../utils/constants" 


const Tag = ({text, color = Colors.green, style}) => {
  return (
    <View style={{...styles.tag, backgroundColor: color, ...style}}>
      <Text style={{color: "white", fontWeight: "600"}}>{text.toUpperCase()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  tag: {
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,

  },
});

export default Tag;