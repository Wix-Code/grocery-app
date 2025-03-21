import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function signIn() {
  const img = require("../assets/images/pic.png");
  const g = require("../assets/images/g.png");
  const f = require("../assets/images/f.png");
  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: "100%"}}>
        <Image source={img} style={{width: "100%"}}/>
        <View style={styles.contain}>
          <Text style={styles.text}>{`Get your groceries \nwith nectar`}</Text>
          <Text style={styles.connect}>Or connect with social media</Text>
          <TouchableOpacity style={styles.touch}>
            <Image source={g} style={styles.icon} />
            <Text style={styles.iconText}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tou}>
            <Image source={f} style={styles.icon} />
            <Text style={styles.iconText}>Continue with facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: "100%",
    width: "100%"
  },
  contain: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 20
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold'
  },
  touch: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5383EC',
    borderRadius: 16,
    paddingHorizontal: 30,
    height: 67,
    gap: 50
  },
  icon: {

  },
  iconText: {
    color: "#FFFFFF",
    fontSize: 20
  },
  tou: {
    backgroundColor: "#4A66AC",
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    paddingHorizontal: 30,
    height: 67,
    gap: 50
  },
  connect: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: "center",
    color: "#828282"
  }
})