import React from "react"
// import {useNavigation} from 'react-navigation-hooks'

import {
  View, TouchableOpacity, Image, StyleSheet, Linking, Text, Dimensions
} from "react-native"
import { Colors } from "../utils/constants";

const {width} = Dimensions.get("screen");

const tabs = [
  {
    action: (navigation) => navigation.navigate('Main'),
    name: 'sales',
    label: 'Sales',
    image: require('../assets/sales.png'),
    imageActive: require('../assets/sales-active.png'),
  },
  {
    action: (navigation) => navigation.navigate('Favorites'),
    name: 'products',
    label: "Products",
    image: require('../assets/tag.png'),
    imageActive: require('../assets/tag-active.png'),
  },
  {
    action: (navigation) => navigation.navigate('ShopProfile'),
    name: 'pings',
    label: "Pings",
    image: require('../assets/ping.png'),
    imageActive: require('../assets/ping-active.png'),
  },
  {
    action: (navigation) => Linking.openURL('https://wa.me/22998801811'),
    name: 'support',
    label: "Support",
    image: require('../assets/support.png'),
    imageActive: require('../assets/support-active.png'),
  },
];


const Tabs = ({currentTab = "sales"}) => {
  // const navigation = useNavigation()
  
  const activeIndex = tabs.findIndex(tab => tab.name === currentTab)

  const getActiveDim = (index, dim) => activeIndex ===  index ? dim : 0
  const getDim = (index, dim) => activeIndex !==  index ? dim : 0

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {tabs.map((tab, i) => (
          <TouchableOpacity key={tab.name} onPress={() => tab.action()} style={styles.tab}>
            <Image source={tab.imageActive} style={{ width: getActiveDim(i, 28), height: getActiveDim(i, 28)}}></Image>
            <Image source={tab.image} style={{ width: getDim(i, 28), height: getDim(i, 28) }}></Image>
            <Text style={{...styles.tabText, color: i === activeIndex ? Colors.gummyGreen : Colors.gray}}>{tab.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: 64,
    width,
    alignItems: 'center',
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 6,
    justifyContent: 'space-around',
    shadowColor: Colors.gray,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  tab: {
    position: 'relative',
    padding: 8,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
  },
  tabText: {fontSize: 14, marginTop: 4, textAlign: 'center'},
});

export default Tabs;