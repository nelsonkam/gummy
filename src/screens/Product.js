import React, { useState, useEffect } from "react"
import { View, StyleSheet, StatusBar, Text, Platform, Image, ImageBackground, ScrollView, Dimensions, Switch } from "react-native"
import Touchable from "react-native-platform-touchable"
import { Colors } from "../utils/constants"
import Divider from "../components/Divider"
import ListItem from "../components/ListItem"
import Tabs from "../components/Tabs"
import Tag from "../components/Tag"
import { withSafeAreaView } from "../utils"

const { width, height } = Dimensions.get('window');

const shareIcon = Platform.OS === "ios" ? require("../assets/share-ios.png") : require("../assets/share-android.png")

const Product = ({navigation}) => {
  const [isProductEnabled, setIsProductEnabled] = useState(false);
  let sales = [
    {key: '' + Math.random()},
    {key: '' + Math.random()},
    {key: '' + Math.random()},
    {key: '' + Math.random()},
  ];

  const toggleProduct = value => {
    setIsProductEnabled(value)
  }

  const url = "https://static-2.gumroad.com/res/gumroad/5375728731577/asset_previews/0b8ca09c4b6fae834febe2837275bda3/retina/PH_cover.png"
  // sales = []
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#31767A" />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <ImageBackground source={{uri: url}} resizeMode="cover" style={styles.cover}>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <View style={{flexDirection: "row"}}>
              <Touchable onPress={() => navigation.navigate("OfferCodes")} style={{...styles.iconButton, marginHorizontal: 16}}>
                <Image source={require("../assets/discounts.png")} style={{ width: 24, height: 24}}></Image>
              </Touchable>
              <Touchable onPress={() => null} style={styles.iconButton} >
                <Image source={shareIcon} style={{ width: 24, height: 24}}></Image>
              </Touchable>
            </View>
          </View>
        </ImageBackground>
        <Divider style={{marginVertical: 0}} />
        <View style={{ marginBottom: 12 }}>
          <View style={styles.middleSection}>
            <View onPress={() => null} style={{ flexDirection: "row", alignItems: "center" }}>
              <Switch style={styles.switch} onValueChange={toggleProduct} value={isProductEnabled} />
              <Text 
                numberOfLines={1} 
                ellipsizeMode={"tail"} 
                style={styles.toggleText}>
                {!isProductEnabled ? "Enable" : "Disable"}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontWeight: "500", fontSize: 16 }}>$100</Text>
            </View>
          </View>
          <Divider style={{marginVertical: 0}} />
          <View style={{ paddingHorizontal: 16, paddingVertical: 16 }}>
            <View style={styles.productTitleContainer}>
              <Text style={{fontWeight: "500", fontSize: 16}}>A product</Text>
              <Tag text="published" />
            </View>
            <Text style={{color: Colors.gray, fontSize: 16}}>Product description</Text>
            <Text style={styles.salesSection}>PRODUCT SALES</Text>
            {sales.length !== 0 && sales.map(item => (
              <React.Fragment key={item.key}>
                <ListItem
                  title={<Text style={{fontSize: 16, fontWeight: "500"}}>A product</Text>}
                  subtitle={<Text style={styles.grayText}>nelson@gmail.com</Text>}
                  secondaryTitle={<Text style={styles.secondaryTitle}>$15</Text>}
                  secondarySubtitle={<Text style={styles.grayText}>3 hours ago</Text>}
                />
                <Divider />
              </React.Fragment>
            ))}
          </View>
        </View>
      </ScrollView>
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
    justifyContent: 'flex-end',
    padding: 16,
    height: height * 0.4,
  },
  iconButton: {backgroundColor: '#ffffff', padding: 8, borderRadius: 100},
  middleSection: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  switch: {
    marginRight: 4,
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

Product.navigationOptions = {
  title: Platform.OS === "android" ? '' : 'Product',
  headerTitleStyle: {
    color: Platform.OS === "android" ? 'white' : 'black',
  },
  headerTintColor: Platform.OS === "android" ? 'white' : Colors.gummyGreen,
  headerTransparent: Platform.OS === "android"
}

export default Product;