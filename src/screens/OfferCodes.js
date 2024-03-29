import React, { useState, useEffect } from "react"
import { View, StyleSheet, Text, Platform, Image, FlatList } from "react-native"
import { Colors } from "../utils/constants" 
import EmptyState from "../components/EmptyState";
import ListItem from "../components/ListItem";
import Divider from "../components/Divider";
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
      
      
      {products.length !== 0 && <FlatList
        ItemSeparatorComponent={() => <Divider />}
        data={products}
        style={{paddingHorizontal: 16, paddingTop: 12}}
        contentContainerStyle={{paddingBottom:100}}
        showsVerticalScrollIndicator={false}
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

OfferCodes.navigationOptions = {
  title: 'Offer Codes'
}

export default OfferCodes;