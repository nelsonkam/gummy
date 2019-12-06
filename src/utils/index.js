import React from "react"
import {Platform, Image} from "react-native"
import {SafeAreaView} from "react-navigation"

export const withSafeAreaView = (Component) => {
  if (Platform.OS == "android") {
    return Component
  }
  return props => <SafeAreaView><Component {...props} /></SafeAreaView>
}

const Icons = {
  sales: {
    active: require('../assets/sales-active.png'),
    normal: require('../assets/sales.png')
  },
  tag: {
    active: require('../assets/tag-active.png'),
    normal: require('../assets/tag.png')
  },
  ping: {
    active: require('../assets/ping-active.png'),
    normal: require('../assets/ping.png')
  },
  support: {
    active: require('../assets/support-active.png'),
    normal: require('../assets/support.png')
  },
}

export const renderIcon = iconName => ({focused}) => {
  return focused
    ? <Image source={Icons[iconName].active} style={{ width: 24, height: 24}}></Image>
    : <Image source={Icons[iconName].normal} style={{ width: 24, height: 24 }}></Image>
}