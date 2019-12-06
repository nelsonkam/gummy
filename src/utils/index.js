import React from "react"
import {Platform} from "react-native"
import {SafeAreaView} from "react-navigation"

export const withSafeAreaView = (Component) => {
  if (Platform.OS == "android") {
    return Component
  }
  return props => <SafeAreaView><Component {...props} /></SafeAreaView>
}