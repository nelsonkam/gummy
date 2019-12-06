import React, { useState, useEffect } from "react"
import { View, StyleSheet, Text, Platform, Image, FlatList } from "react-native"
import { Colors } from "../../utils/constants"
import SegmentedControlTab from "react-native-segmented-control-tab";
import ProductList from "./ProductList";


const Products = ({ navigation }) => {
  const [index, setIndex] = useState(0)

  const handleIndexChange = index => {
    setIndex(index)
  }

  let products = [
    { key: '' + Math.random() },
    { key: '' + Math.random() },
    { key: '' + Math.random() },
    { key: '' + Math.random() },
    { key: '' + Math.random() },
    { key: '' + Math.random() },
    { key: '' + Math.random() },
    { key: '' + Math.random() },
    { key: '' + Math.random() },
    { key: '' + Math.random() },
  ];
  // products = []

  return (
    <View style={{ flex: 1}}>
      <SegmentedControlTab
        values={["Recent", "Best Seller", "Top Revenue"]}
        selectedIndex={index}
        onTabPress={handleIndexChange}
        tabsContainerStyle={{ marginTop: 12, marginHorizontal: 16 }}
        tabTextStyle={{ color: Colors.gummyGreen }}
        activeTabStyle={{ backgroundColor: Colors.gummyGreen }}
        tabStyle={{ borderColor: Colors.gummyGreen }}
      />
      <ProductList products={products} />
    </View>
  )
}

const styles = StyleSheet.create({
});

export default Products;