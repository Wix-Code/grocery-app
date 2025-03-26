import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function order_success() {
  return (
    <SafeAreaView>
      <View style={{marginHorizontal: 20, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100vh", gap: 40 }}>
        <View style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Image source={require("../assets/images/str.png")} />
        </View>
        <View>
          <Text style={{fontSize: 28, fontWeight: "semibold", color: "#181725", textAlign: "center"}}>Your Order has been
            accepted</Text>
          <Text style={{color: "#7C7C7C",fontSize: 16, fontWeight: "normal", textAlign: "center"}}>Your items has been placcd and is on 
          it’s way to being processed</Text>
        </View>
        <View style={{width: "100%"}}>
          <TouchableOpacity style={{backgroundColor: "#53B175", height: 67, borderRadius: 16, width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Text style={{color: "#FFF9FF", fontWeight: "semibold", fontSize: 18}}>Track Order</Text>
          </TouchableOpacity>
          <Text style={{color: "#181725", fontWeight: "semibold", fontSize: 18, textAlign: "center", marginTop: 20}}>Back to home</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}