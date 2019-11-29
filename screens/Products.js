import React, { useState, useEffect } from "react"
import { View, StyleSheet, Text, Platform, Image, FlatList } from "react-native"
import Touchable from "react-native-platform-touchable"
import { Colors } from "../utils/constants" 
import SegmentedControlTab from "react-native-segmented-control-tab";
import EmptyState from "../components/EmptyState";
import ListItem from "../components/ListItem";
import Divider from "../components/Divider";
import Tabs from "../components/Tabs";


const Products =  () => {
  const [index, setIndex] = useState(0)

  const handleIndexChange = index => {
    setIndex(index)
  }

  let products = [
    {key: '' + Math.random()},
    {key: '' + Math.random()},
    {key: '' + Math.random()},
    {key: '' + Math.random()},
  ];
  // products = []

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <SegmentedControlTab
          values={["Recent", "Best Seller", "Top Revenue"]}
          selectedIndex={index}
          onTabPress={handleIndexChange}
          tabsContainerStyle={{marginVertical: 24}}
          tabTextStyle={{color: Colors.gummyGreen}}
          activeTabStyle={{backgroundColor: Colors.gummyGreen}}
          tabStyle={{borderColor: Colors.gummyGreen}}
        />
      {products.length !== 0 && <FlatList
        ItemSeparatorComponent={() => <Divider style={{marginVertical: 12}} />}
        data={products}
        renderItem={({item, index}) => {
          return <ListItem
            title={<Text style={{fontSize: 16, fontWeight: "500"}}>A product</Text>}
            subtitle={(
              <View style={{flexDirection: "row", alignItems: "center"}}>
                <Image style={{height: 24, width: 24, marginRight: 4}} source={require('../assets/tag.png')} />
                <Text style={styles.grayText}>$100</Text>
              </View>
            )}
            secondaryTitle={<Text style={styles.secondaryTitle}>$15</Text>}
            secondarySubtitle={<Text style={styles.grayText}>Sold 30 times</Text>}
          />
        }}
      />}
      {products.length === 0 && <EmptyState 
        title="No product found" 
        subtitle="We couldn't find any product on your Gumroad account." 
      />}
      <Tabs currentTab="products" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: Platform.OS === "ios" ? 0 : 1,
    height: "100%",
    padding: 16
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 8
  },
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

export default Products;