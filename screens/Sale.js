import React, { useState, useEffect } from "react"
import { View, StyleSheet, Text, Platform, Image, ImageBackground, ScrollView, Dimensions, Switch } from "react-native"
import Touchable from "react-native-platform-touchable"
import { Colors } from "../utils/constants"
import Divider from "../components/Divider"
import ListItem from "../components/ListItem"
import Tabs from "../components/Tabs"
import Tag from "../components/Tag"

const { width } = Dimensions.get('window');


const Sale = () => {
  
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <ImageBackground resizeMode="cover" style={styles.cover}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Touchable onPress={() => null} style={styles.iconButton} >
              <Image source={require("../assets/back.png")} style={{ width: 24, height: 24}}></Image>
            </Touchable>
          </View>
        </ImageBackground>
        <Divider style={{marginVertical: 0}} />
        <View style={{ marginBottom: 60 }}>
          <View style={styles.middleSection}>
            <View onPress={() => null} style={{ flexDirection: "row", alignItems: "center" }}>
              <Text 
                numberOfLines={1} 
                ellipsizeMode={"tail"} 
                style={styles.toggleText}>
                Order ID: 923336703
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontWeight: "500", fontSize: 16, color: Colors.gummyGreen }}>$100</Text>
            </View>
          </View>
          <Divider style={{marginVertical: 0}} />
          <View style={{ paddingHorizontal: 16, paddingVertical: 16 }}>
            <View style={styles.productTitleContainer}>
              <View style={{flexDirection: "row", alignItems: "center"}}>
                <Image style={{height: 24, width: 24, marginRight: 6}} source={require('../assets/customer.png')} />
                <Text style={{fontWeight: "500", fontSize: 16}}>calvin@gumroad.com</Text>
              </View>
              <Tag text="paid" />
            </View>
            <View style={{flexDirection: "row", alignItems: "center", marginVertical: 8}}>
              <Image style={{height: 24, width: 24, marginRight: 6}} source={require('../assets/tag-black.png')} />
              <Text style={{fontWeight: "500", fontSize: 16, color: "#444"}}>A product</Text>
            </View>
            <View style={{flexDirection: "row", alignItems: "center", marginVertical: 8}}>
              <Image style={{height: 24, width: 24, marginRight: 6}} source={require('../assets/referrer.png')} />
              <Text style={{fontWeight: "500", fontSize: 16, color: "#444"}}>Referred from https://facebook.com</Text>
            </View>
            <View style={{flexDirection: "row", alignItems: "center", marginVertical: 8}}>
              <Image style={{height: 24, width: 24, marginRight: 6}} source={require('../assets/cart.png')} />
              <Text style={{fontWeight: "500", fontSize: 16, color: "#444"}}>Bought 3 units</Text>
            </View>
            <View style={{flexDirection: "row", alignItems: "center", marginVertical: 8}}>
              <Image style={{height: 24, width: 24, marginRight: 6}} source={require('../assets/time.png')} />
              <Text style={{fontWeight: "500", fontSize: 16, color: "#444"}}>2 days ago</Text>
            </View>
            <View style={{flexDirection: "row", alignItems: "center", marginVertical: 8}}>
              <Image style={{height: 24, width: 24, marginRight: 6}} source={require('../assets/shipping.png')} />
              <Text style={{fontWeight: "500", fontSize: 16, color: "#444"}}>This item has been shipped</Text>
            </View>
            
          </View>
        </View>
      </ScrollView>
      <Tabs currentTab="products" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: Platform.OS === 'ios' ? 0 : 1,
    height: '100%',
  },
  cover: {
    backgroundColor: Colors.gummyGreen,
    width,
    justifyContent: 'space-between',
    padding: 16,
    height: 320,
  },
  iconButton: {backgroundColor: '#ffffff', padding: 8, borderRadius: 100},
  middleSection: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  switch: {
    marginRight: 8,
  },
  productTitleContainer: {
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toggleText: {maxWidth: 200, fontWeight: '600', fontSize: 16},
  salesSection: {
    marginVertical: 16,
    fontWeight: 'bold',
    color: '#444',
    fontSize: 16,
  },
  grayText: {
    fontSize: 16,
    color: Colors.gray,
  },
  secondaryTitle: {
    color: Colors.gummyGreen,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Sale;