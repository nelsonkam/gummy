import React, { useState, useEffect } from "react"
import { View, StyleSheet, Text, Platform, Image } from "react-native"
import Touchable from "react-native-platform-touchable"
import { Colors } from "../utils/constants" 


const ListItem =  ({title, subtitle, secondaryTitle, secondarySubtitle}) => {

  return (
    <Touchable style={styles.container}>
      <>
        <View style={styles.row}>
          <View>{title}</View>
          <View>{secondaryTitle}</View>
        </View>
        <View style={styles.row}>
          <View>{subtitle}</View>
          <View>{secondarySubtitle}</View>
        </View>
      </>
    </Touchable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    marginVertical: 4
  }
});

export default ListItem;