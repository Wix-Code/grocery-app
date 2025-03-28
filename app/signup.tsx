import { View, Text, SafeAreaView, ImageBackground, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router';

export default function signup() {
  const f = require("../assets/images/rec.png");
  const c = require("../assets/images/car.png");
  const m = require("../assets/images/rec.png");
  const router = useRouter()
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#FFFFFF"}}>
      <ScrollView style={{flex: 1}}>
        <ImageBackground source={f} style={styles.background}>
          <Image source={c} />
        </ImageBackground>
        <View style={styles.div}>
          <Text style={styles.test}>Sign Up</Text>
          <Text style={styles.text}>Enter your emails and password</Text>
        </View>
          <View style={styles.contain}>
          <View style={styles.inp}>
            <Text style={styles.label}>Username</Text>
            <TextInput style={styles.input}
            placeholder="Ogbonna Ugochukwu" />
          </View>
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
          <Text style={styles.pass}>By continuing you agree to our Terms of Service
          and Privacy Policy.</Text>
          <TouchableOpacity style={styles.btn} onPress={()=>router.push("/login")}>
            <Text style={{ fontSize: 20, color: "#FFFFFF",}}>Sign up</Text>
          </TouchableOpacity>
          <View style={styles.dont}>
            <Text style={styles.acc}>Already have an account?</Text>
            <Link href="/login"><Text style={styles.up}>Sign in</Text></Link>
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
  carrot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 60,
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
    color: "#7C7C7C",
    textAlign: "justify"
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
    paddingHorizontal: 20,
    borderBottomColor: "#E2E2E2",
    height: 50,
    fontSize: 16,
    color: "#181725"
  },
  inp: {
    display: "flex",
    flexDirection: "column",
    gap: 5
  }
})