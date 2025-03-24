import { View, Text, SafeAreaView, ImageBackground, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

export default function login() {
  const f = require("../assets/images/rec.png");
  const c = require("../assets/images/car.png");
  const m = require("../assets/images/rec.png");

  return (
    <SafeAreaView style={{flex: 1,backgroundColor: "#FFFFFF"}}>
      <ScrollView style={{flex: 1}}>
        <ImageBackground source={f} style={styles.background}>
          <Image source={c} />
        </ImageBackground>
        <View style={styles.div}>
          <Text style={styles.test}>Loging</Text>
          <Text style={styles.text}>Enter your emails and password</Text>
        </View>
        <View style={styles.contain}>
          <View style={styles.inp}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input}
            placeholder="example@gmail.com" />
          </View>
          <View style={styles.inp}>
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input}
            placeholder="*******"/>
          </View>
          <Text style={styles.pass}>Forgot Password?</Text>
          <TouchableOpacity style={styles.btn}>Login</TouchableOpacity>
          <View style={styles.dont}>
            <Text style={styles.acc}>Don't have an account?</Text>
            <Link href="/signup"><Text style={styles.up}>Sign up</Text></Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  div: {
    padding: 20,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 10
  },
  test: {
    color: "#181725",
    fontSize: 26,
    fontWeight: 600
  },
  text: {
    fontSize: 18,
    fontWeight: 500,
    color: "#7C7C7C",
  },
  contain: {
    padding: 20,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    fontWeight: 500,
    color: "#7C7C7C"
  },
  pass: {
    fontSize: 14,
    fontWeight: 500,
    color: "#181725",
    textAlign: "right"
  },
  btn: {
    backgroundColor: "#53B175",
    borderRadius: 16,
    width: "100%",
    height: 67,
    fontSize: 20,
    color: "#FFFFFF",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  dont: {
    marginTop: 10,
    gap: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  acc: {
    fontSize: 14,
    fontWeight: 500,
    color: "#181725"
  },
  up: {
    color: "#53B175",
    fontWeight: 500,
    fontSize: 14,
  },
  input: {
    borderBottomWidth: 1,
    padding: 20,
    borderBottomColor: "#E2E2E2",
    height: 50,
    fontSize: 16,
    color: "#181725",
    outline: "none"
  },
  inp: {
    display: "flex",
    flexDirection: "column",
    gap: 5
  }
})