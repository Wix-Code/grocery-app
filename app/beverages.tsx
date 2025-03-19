import { View, Text, SafeAreaView, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { data } from './util/dummyData';
import Card from './card';

export default function beverages() {
  const f = require("../assets/images/lef.png");
  const c = require("../assets/images/car.png");
  const m = require("../assets/images/fil.png");
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.contain}>
          <View style={styles.cont}>
            <Image source={f} />
            <Text style={styles.bev}>beverages</Text>
            <Image source={m} />
          </View>
          <View style={styles.grid}>
            {
              data.map((item: any) => {
                return (
                  <View style={{width: "48%"}}>
                  <Card key={item.id} item={item} />
                  </View>
                )
              })
            }
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contain: {
    padding: 20
  },
  cont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  bev: {
    fontWeight: 800,
    color: "#181725",
    fontSize: 20,
    textTransform: "capitalize"
  },
  grid: {
    flexDirection: "row",
    justifyContent: "space-between",  // Centers items horizontally
    flexWrap: "wrap",  // Wraps items
  }
})