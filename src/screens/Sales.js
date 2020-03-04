import React, { useState, useEffect } from "react"
import { View, StyleSheet, Text, Platform, Image, FlatList, StatusBar, ScrollView } from "react-native"
import { Colors } from "../utils/constants"
import DateIntervalPicker from "../components/DateIntervalPicker"
import ListItem from "../components/ListItem"
import EmptyState from "../components/EmptyState"
import Divider from "../components/Divider"


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
      <StatusBar backgroundColor={Colors.gummyGreenDark} />
      <ScrollView style={{ flex: 1, paddingTop: 16 }} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={styles.dateContainer}>
            <Text style={styles.currentInterval}>TODAY</Text>
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.salesTotal}>$350</Text>
            <Text style={styles.customersTotal}>from 35 customers</Text>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Your sales</Text>
        {sales.length !== 0 && sales.map(item => (
          <React.Fragment key={item.key}>
            <ListItem
              onPress={() => navigation.navigate("Sale")}
              title={<Text style={{ fontSize: 16, fontWeight: "500" }}>A product</Text>}
              subtitle={<Text style={styles.grayText}>nelson@gmail.com</Text>}
              secondaryTitle={<Text style={styles.secondaryTitle}>$15</Text>}
              secondarySubtitle={<Text style={styles.grayText}>3 hours ago</Text>}
            />
            <Divider />
          </React.Fragment>
        ))}
        {sales.length === 0 && <EmptyState
          title="It’s quiet here..."
          subtitle="Wait for a sale or trying tapping on one of these 👇"
          action={<Image style={{ height: 64, width: 132 }} source={require("../assets/snapshot.png")} />}
        />}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: Platform.OS === "ios" ? 0 : 1,
    height: "100%",
    paddingHorizontal: 16,
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
    justifyContent: "center",
    alignItems: "center"
  },
  currentInterval: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  totalContainer: {
    marginTop: 16
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
    marginTop: 22,
    marginBottom: 16
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

export default Sales;