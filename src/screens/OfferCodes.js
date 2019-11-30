import React, { useState, useEffect } from "react"
import { View, StyleSheet, Text, Platform, Image, FlatList } from "react-native"
import Touchable from "react-native-platform-touchable"
import { Colors } from "../utils/constants" 
import SegmentedControlTab from "react-native-segmented-control-tab";
import EmptyState from "../components/EmptyState";
import ListItem from "../components/ListItem";
import Divider from "../components/Divider";
import Tabs from "../components/Tabs";
import Tag from "../components/Tag";


const OfferCodes =  ({navigation}) => {

  let products = [
    {key: '' + Math.random()},
    {key: '' + Math.random()},
    {key: '' + Math.random()},
    {key: '' + Math.random()},
    {key: '' + Math.random()},
    {key: '' + Math.random()},
    {key: '' + Math.random()},
    {key: '' + Math.random()},
    {key: '' + Math.random()},
    {key: '' + Math.random()},
    {key: '' + Math.random()},
    {key: '' + Math.random()},
    {key: '' + Math.random()},
    {key: '' + Math.random()},
    {key: '' + Math.random()},
  ];
  // products = []

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Touchable onPress={() => navigation.goback()} style={styles.iconButton} >
          <Image source={require("../assets/back.png")} style={{ width: 24, height: 24}}></Image>
        </Touchable>
        <Text style={{fontWeight: "500", fontSize: 18}}>Offer Codes</Text>
        <Touchable onPress={() => null} style={{...styles.iconButton, backgroundColor: Colors.gummyGreen}}>
          <Image source={require("../assets/plus.png")} style={{ width: 24, height: 24}}></Image>
        </Touchable>
      </View>
      <Divider style={{marginVertical: 0}} />
      
      {products.length !== 0 && <FlatList
        ItemSeparatorComponent={() => <Divider />}
        data={products}
        style={{paddingHorizontal: 16, paddingTop: 16}}
        contentContainerStyle={{paddingBottom:100}}
        renderItem={({item, index}) => {
          return <ListItem
            title={<Text style={{fontSize: 16, fontWeight: "500"}}>discount-code</Text>}
            subtitle={(
              <View style={{flexDirection: "row", alignItems: "center"}}>
                <Tag text="universal" style={{marginRight: 8}} />
                <Text style={styles.grayText}>3 times max.</Text>
              </View>
            )}
            secondaryTitle={<Text style={styles.secondaryTitle}>-$15</Text>}
            secondarySubtitle={<Text style={styles.grayText}>Used 30 times</Text>}
          />
        }}
      />}
      {products.length === 0 && <EmptyState 
        title="No offer code found" 
        subtitle="We couldn't find any offer code on your Gumroad account." 
      />}
      <Tabs currentTab="products" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: Platform.OS === "ios" ? 0 : 1,
    height: "100%",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    padding: 8,
  },
  iconButton: {backgroundColor: '#ffffff', padding: 8, borderRadius: 100},
  grayText: {
    fontSize: 16,
    color: Colors.gray
  },
  secondaryTitle: {
    color: Colors.gummyGreen,
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default OfferCodes;