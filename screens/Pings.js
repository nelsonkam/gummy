import React, { useState, useEffect } from "react"
import { View, StyleSheet, Text, Platform, Image, FlatList } from "react-native"
import Touchable from "react-native-platform-touchable"
import { Colors } from "../utils/constants" 
import SegmentedControlTab from "react-native-segmented-control-tab";
import EmptyState from "../components/EmptyState";
import ListItem from "../components/ListItem";
import Divider from "../components/Divider";
import Tabs from "../components/Tabs";


const Pings =  () => {
  const [index, setIndex] = useState(0)

  const handleIndexChange = index => {
    setIndex(index)
  }

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
  ];
  // products = []

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pings</Text>
      
      {products.length !== 0 && <FlatList
        ItemSeparatorComponent={() => <Divider style={{marginVertical: 10}} />}
        contentContainerStyle={{paddingBottom:100}}
        data={products}
        renderItem={({item, index}) => {
          return <Ping 
          />
        }}
      />}
      {products.length === 0 && <EmptyState 
        title="No notifications yet" 
        subtitle="Check back later, we'll notify you when something happens." 
      />}
      <Tabs currentTab="products" />
    </View>
  )
}

const Ping =  ({title, subtitle, secondaryTitle, secondarySubtitle}) => {

  return (
    <Touchable style={pingStyles.container}>
      <>
        <View style={pingStyles.row}>
          <Text style={{fontSize: 16, fontWeight: "600", color: Colors.gummyGreen}}>New sale</Text>
          <Text style={styles.secondaryTitle}>$15</Text>
        </View>
        <Text style={{fontSize: 16}}>A product</Text>
        <View style={pingStyles.row}>
          <Text style={styles.grayText}>$100</Text>
          <Text style={styles.grayText}>Sold 30 times</Text>
        </View>
      </>
    </Touchable>
  )
}

const pingStyles = StyleSheet.create({
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

const styles = StyleSheet.create({
  container: {
    flex: Platform.OS === "ios" ? 0 : 1,
    height: "100%",
    padding: 16
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 16
  },
  grayText: {
    fontSize: 15,
    color: Colors.gray
  },
  secondaryTitle: {
    color: Colors.gummyGreen,
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default Pings;