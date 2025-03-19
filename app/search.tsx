import { View, Text, SafeAreaView, Image, StyleSheet, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { data } from './util/dummyData';
import Card from './card';

export default function Search() {
  const f = require("../assets/images/sea.png");
  const c = require("../assets/images/car.png");
  const m = require("../assets/images/fil.png");
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.contain}>
          <View style={styles.cont}>
            <View style={styles.div}>
              <Image source={f} />
              <TextInput style={{ width: "100%", fontSize: 14, color: "#181B19", outline: "none"}} placeholder='Egg' />
            </View>
            <Image source={m} />
          </View>
          <View style={styles.grid}>
            {
              data.map((item) => {
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
  div: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    //borderWidth: 1,
    //borderColor: '#ccc',
    borderRadius: 14,
    gap: 10,
    width: '90%',
    height: 51,
    marginBottom: 5,
    //marginTop: 30,
    backgroundColor: '#F2F3F2'
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