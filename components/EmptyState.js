import React, { useState, useEffect } from "react"
import { View, StyleSheet, Text, Platform, Image } from "react-native"
import Touchable from "react-native-platform-touchable"
import { Colors } from "../utils/constants" 


const EmptyState =  ({title, subtitle, action}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <View style={{marginVertical: 16}}>
        {action}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: Colors.gray,
    fontSize: 24,
    fontWeight: "bold"
  },
  subtitle: {
    color: Colors.gray,
    fontSize: 16,
    textAlign: "center",
    marginVertical: 16,
    maxWidth: 250
  }
});

export default EmptyState;