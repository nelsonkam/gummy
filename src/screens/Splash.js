import React, { useState, useEffect } from "react"
import { View, StyleSheet, StatusBar, Platform, Image } from "react-native"
import Touchable from "react-native-platform-touchable"
import { Colors } from "../utils/constants" 
import AsyncStorage from "@react-native-community/async-storage"
import {useNavigation} from "react-navigation-hooks"

const Splash = ({navigation}) => {

  // useEffect(() => {
  //   AsyncStorage.getItem("is_connected").then(isConnected => {
  //     if (JSON.parse(isConnected)) {
  //       navigation.replace("Sales")
  //     } else {
  //       navigation.navigate("Main")
  //     }
  //   })
  // }, [])

  return (
    <View style={styles.container}>
    <StatusBar backgroundColor="#31767A" />
    <Image source={require("../assets/gummy.png")} style={styles.logo} />
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: Platform.OS === "ios" ? 0 : 1,
    height: "100%",
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: Colors.gummyGreen,
  },
  logo: {
    height: 35,
    width: 140
  },
});

export default Splash;