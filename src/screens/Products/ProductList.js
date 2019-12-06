import React, { useState, useEffect } from "react"
import { View, StyleSheet, Text, Image, FlatList } from "react-native"
import Divider from "../../components/Divider"
import EmptyState from "../../components/EmptyState"
import { useNavigation } from "react-navigation-hooks"
import { Colors } from "../../utils/constants"
import ListItem from "../../components/ListItem"


const ProductList = ({ products }) => {
 const navigation = useNavigation()
  return (
    <View style={{paddingHorizontal: 16, paddingTop: 12}}>
      {products.length !== 0 && <FlatList
        ItemSeparatorComponent={() => <Divider style={{ marginVertical: 12 }} />}
        data={products}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 12 }}
        renderItem={({ item, index }) => {
          return <ListItem
            onPress={() => navigation.navigate("Product")}
            title={<Text style={{ fontSize: 16, fontWeight: "500" }}>A product</Text>}
            subtitle={(
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image style={{ height: 24, width: 24, marginRight: 4 }} source={require('../../assets/tag-icon.png')} />
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
    </View>
  )
}

const styles = StyleSheet.create({
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

export default ProductList;