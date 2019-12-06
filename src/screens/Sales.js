import React, { useState, useEffect } from "react"
import { View, StyleSheet, Text, Platform, Image, FlatList } from "react-native"
import { SafeAreaView } from "react-navigation"
import Touchable from "react-native-platform-touchable"
import { Colors } from "../utils/constants"
import DateIntervalPicker from "../components/DateIntervalPicker"
import ListItem from "../components/ListItem"
import EmptyState from "../components/EmptyState"
import Tabs from "../components/Tabs"
import Divider from "../components/Divider"
import { withSafeAreaView } from "../utils"


const Sales = ({ navigation }) => {
  let sales = [
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
    { key: '' + Math.random() },
  ];
  // sales = []
  return (

    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image style={styles.logo} source={require("../assets/gummy-green.png")}></Image>
      </View>
      <View style={styles.card}>
        <View style={styles.dateContainer}>
          <Text style={styles.currentInterval}>TODAY</Text>
          <View style={{ flexDirection: "row" }}>
            <DateIntervalPicker letter="D" selected style={{ marginLeft: 8 }} />
            <DateIntervalPicker letter="W" style={{ marginLeft: 8 }} />
            <DateIntervalPicker letter="M" style={{ marginLeft: 8 }} />
          </View>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.salesTotal}>$350</Text>
          <Text style={styles.customersTotal}>from 35 customers</Text>
        </View>
      </View>
      <Text style={styles.sectionTitle}>Your sales</Text>
      {sales.length !== 0 && <FlatList
        style={{ marginVertical: 16 }}
        ItemSeparatorComponent={() => <Divider style={{ marginVertical: 12 }} />}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        data={sales}
        renderItem={({ item, index }) => {
          return <ListItem
            onPress={() => navigation.navigate("Sale")}
            title={<Text style={{ fontSize: 16, fontWeight: "500" }}>A product</Text>}
            subtitle={<Text style={styles.grayText}>nelson@gmail.com</Text>}
            secondaryTitle={<Text style={styles.secondaryTitle}>$15</Text>}
            secondarySubtitle={<Text style={styles.grayText}>3 hours ago</Text>}
          />
        }}
      />}
      {sales.length === 0 && <EmptyState
        title="It’s quiet here..."
        subtitle="Wait for a sale or trying tapping on one of these 👇"
        action={<Image style={{ height: 64, width: 132 }} source={require("../assets/snapshot.png")} />}
      />}
      <Tabs currentTab="sales" />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: Platform.OS === "ios" ? 0 : 1,
    height: "100%",
    padding: 16,
  },
  topBar: {
    alignItems: "center",
    width: "100%",
    marginBottom: 24,
  },
  logo: {
    height: 24,
    width: 96
  },
  card: {
    width: "100%",
    padding: 16,
    borderRadius: 4,
    backgroundColor: Colors.gummyGreenLight,
    shadowColor: "#444",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  currentInterval: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  totalContainer: {
    marginVertical: 22
  },
  salesTotal: {
    color: "white",
    textAlign: "center",
    fontSize: 42,
    fontWeight: "bold"
  },
  customersTotal: {
    color: Colors.gummyGreenDark,
    textAlign: "center",
    fontSize: 18,
    marginVertical: 6,
    fontWeight: "500"
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 22
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

export default withSafeAreaView(Sales);