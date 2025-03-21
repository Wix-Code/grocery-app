import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function order_success() {
  return (
    <SafeAreaView>
      <View style={{marginHorizontal: 20}}>
        <View style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Image source={require("../assets/images/str.png")} />
        </View>
        <View>
          <Text style={{fontSize: 28, fontWeight: "semibold", color: "#181725", textAlign: "center"}}>Your Order has been
            accepted</Text>
          <Text style={{color: "#7C7C7C",fontSize: 16, fontWeight: "normal", textAlign: "center"}}>Your items has been placcd and is on 
          it’s way to being processed</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text>Track Order</Text>
          </TouchableOpacity>
          <Text>Back to home</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}