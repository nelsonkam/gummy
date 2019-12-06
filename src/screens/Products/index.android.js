import React, { useState, useEffect } from "react"
import { View, StyleSheet, Text, Platform, Dimensions, FlatList } from "react-native"
import { Colors } from "../../utils/constants"
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import ProductList from "./ProductList";

const Route = () => {
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
  
  return <ProductList products={products} />
}

const Products = ({ navigation }) => {
  const [index, setIndex] = useState(0)

  const routes = [
    { key: 'recent', title: 'Recent' },
    { key: 'bestSeller', title: 'Best Seller' },
    { key: 'topRevenue', title: 'Top Revenue' },
  ]

  const handleIndexChange = index => {
    setIndex(index)
  }

  
  return (
    <View style={{ flex: 1}}>
      <TabView
        navigationState={{routes, index}}
        onIndexChange={handleIndexChange}
        renderScene={SceneMap({
          recent: Route,
          bestSeller: Route,
          topRevenue: Route,
        })}
        renderTabBar={props => (
          <TabBar 
            {...props}
            style={{backgroundColor: "white"}} 
            activeColor={Colors.gummyGreen}
            inactiveColor={Colors.gray}
            indicatorStyle={{backgroundColor: Colors.gummyGreen}}
          />
        )}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
});

Products.navigationOptions = {
  // headerTransparent: Platform.OS === "android"
  headerStyle: {
    elevation: 0,
    background: 'white'
  }
}

export default Products;