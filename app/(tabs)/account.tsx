import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Account() {
  return (
    <SafeAreaView style={{backgroundColor: "#FFFFFF", flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View style={{display: "flex", flexDirection: "column"}}>
          <View style={{marginHorizontal:20, display: "flex", gap: 20, flexDirection: "row", marginVertical: 40}}>
            <Image style={{ width: 70, height: 70, borderRadius: "50%" }} source={require("../../assets/images/hu.png")} />
            <View>
              <View style={{ display: "flex", gap: 10, alignItems: "center", flexDirection: "row"}}>
                <Text style={{color: "#181725", fontSize: 20, fontWeight: 800}}>Ogbonna Wisdom</Text>
                <TouchableOpacity style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                 <Image style={{  }} source={require("../../assets/images/pen.png")} />
                </TouchableOpacity>
              </View>
              <Text style={{color: "#7C7C7C", fontSize: 16, fontWeight: 500, marginTop: 20}}>ogbonna428alex@gmail.com</Text>
            </View>
          </View>
          <View style={{ paddingHorizontal: 20, borderBottomWidth: 1, borderTopWidth: 1, borderColor: "#E2E2E2", paddingVertical: 20, display: "flex", justifyContent: "space-between", flexDirection: "row", alignItems: "center"}}>
            <View  style={{ display: "flex", gap: 10, flexDirection: "row", alignItems: "center"}}>
              <Image style={{  }} source={require("../../assets/images/a6.png")} />
              <Text style={{color: "#181725", fontSize: 18, fontWeight: 700}}>Orders</Text>
            </View>
            <Image style={{  }} source={require("../../assets/images/left.png")} />
          </View>
          <View style={{ paddingHorizontal: 20, borderBottomWidth: 1, borderColor: "#E2E2E2", paddingVertical: 20, display: "flex", justifyContent: "space-between", flexDirection: "row", alignItems: "center"}}>
            <View  style={{ display: "flex", gap: 10, flexDirection: "row", alignItems: "center"}}>
              <Image style={{  }} source={require("../../assets/images/a5.png")} />
              <Text style={{color: "#181725", fontSize: 18, fontWeight: 700}}>My details</Text>
            </View>
            <Image style={{  }} source={require("../../assets/images/left.png")} />
          </View>
          <View style={{ paddingHorizontal: 20, borderBottomWidth: 1, borderColor: "#E2E2E2", paddingVertical: 20, display: "flex", justifyContent: "space-between", flexDirection: "row", alignItems: "center"}}>
            <View  style={{ display: "flex", gap: 10, flexDirection: "row", alignItems: "center"}}>
              <Image style={{  }} source={require("../../assets/images/a3.png")} />
              <Text style={{color: "#181725", fontSize: 18, fontWeight: 700}}>Delivery Address</Text>
            </View>
            <Image style={{  }} source={require("../../assets/images/left.png")} />
          </View>
          <View style={{ paddingHorizontal: 20, borderBottomWidth: 1, borderColor: "#E2E2E2", paddingVertical: 20, display: "flex", justifyContent: "space-between", flexDirection: "row", alignItems: "center"}}>
            <View  style={{ display: "flex", gap: 10, flexDirection: "row", alignItems: "center"}}>
              <Image style={{  }} source={require("../../assets/images/a2.png")} />
              <Text style={{color: "#181725", fontSize: 18, fontWeight: 700}}>Notifications</Text>
            </View>
            <Image style={{  }} source={require("../../assets/images/left.png")} />
          </View>
          <View style={{ paddingHorizontal: 20, borderBottomWidth: 1, borderColor: "#E2E2E2", paddingVertical: 20, display: "flex", justifyContent: "space-between", flexDirection: "row", alignItems: "center"}}>
            <View  style={{ display: "flex", gap: 10, flexDirection: "row", alignItems: "center"}}>
              <Image style={{  }} source={require("../../assets/images/a.png")} />
              <Text style={{color: "#181725", fontSize: 18, fontWeight: 700}}>About</Text>
            </View>
            <Image style={{  }} source={require("../../assets/images/left.png")} />
          </View>
          <View style={{ paddingHorizontal: 20, borderBottomWidth: 1, borderColor: "#E2E2E2", paddingVertical: 20, display: "flex", justifyContent: "space-between", flexDirection: "row", alignItems: "center"}}>
            <View  style={{ display: "flex", gap: 10, flexDirection: "row", alignItems: "center"}}>
              <Image style={{  }} source={require("../../assets/images/a4.png")} />
              <Text style={{color: "#181725", fontSize: 18, fontWeight: 700}}>Help</Text>
            </View>
            <Image style={{  }} source={require("../../assets/images/left.png")} />
          </View>
          <TouchableOpacity style={{marginHorizontal: 20, backgroundColor: "#F2F3F2", borderRadius: 16, height: 67, display: "flex", justifyContent: "center", alignItems: "center", marginVertical: 40}}>
            <Text style={{color: "#53B175", fontSize: 18, fontWeight: "semibold"}}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}