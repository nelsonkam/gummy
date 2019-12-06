import React, { useState, useEffect } from "react"
import { View, StyleSheet, Text, Platform, Image, StatusBar } from "react-native"
import Touchable from "react-native-platform-touchable"
import { Colors } from "../utils/constants"
import AsyncStorage from "@react-native-community/async-storage"

const Connect = ({navigation}) => {
  const handleConnect = () => {
    AsyncStorage.setItem("is_connected", JSON.stringify(true))
    navigation.navigate("Main")
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#31767A" />
      <Image style={styles.logo} source={require("../assets/gummy.png")} />
      <View style={styles.connect}>
        <Touchable onPress={handleConnect}>
          <View style={styles.connectBtn}>
            <Image style={styles.connectBtnLogo} source={require("../assets/gumroad-logo.png")} />
            <Text style={styles.connectBtnText}>Connect your Gumroad account</Text>
          </View>
        </Touchable>
        <Text style={styles.legalese}>By connecting your Gumroad account, you agree to our Terms of Service and Privacy Policy.</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: Platform.OS === "ios" ? 0 : 1,
    height: "100%",
    backgroundColor: Colors.gummyGreen,
    justifyContent: "space-around",
    alignItems: "center"
  },
  logo: {
    height: 35,
    width: 140
  },
  connect: {
    alignItems: "center",
    marginHorizontal: 16
  },
  connectBtn: {
    padding: 8,
    backgroundColor: "#FFFCF8",
    borderRadius: 12,
    shadowColor: "#444",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  connectBtnText: {
    fontWeight: "500",
    fontSize: 18,
    marginHorizontal: 8
  },
  connectBtnLogo: {
    height: 42,
    width: 42
  },
  legalese: {
    color: "white",
    marginVertical: 12,
    textAlign: "center"
  }
})

export default Connect;