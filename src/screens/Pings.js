import React, { useState, useEffect } from "react"
import { View, StyleSheet, Text, Platform, FlatList } from "react-native"
import Touchable from "react-native-platform-touchable"
import { Colors } from "../utils/constants" 
import EmptyState from "../components/EmptyState";
import Divider from "../components/Divider";


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
      {products.length !== 0 && <FlatList
        ItemSeparatorComponent={() => <Divider style={{marginVertical: 10}} />}
        contentContainerStyle={{paddingVertical:12}}
        data={products}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return <Ping 
          />
        }}
      />}
      {products.length === 0 && <EmptyState 
        title="No notifications yet" 
        subtitle="Check back later, we'll notify you when something happens." 
      />}
    </View>
  )
}

const Ping =  ({title, subtitle, secondaryTitle, secondarySubtitle}) => {

  return (
    <Touchable style={pingStyles.container}>
      <>
        <View style={pingStyles.row}>
          <Text style={{fontSize: 16, fontWeight: "700", color: Colors.gummyGreen}}>New sale</Text>
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
    paddingHorizontal: 16,
    backgroundColor: "white"
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