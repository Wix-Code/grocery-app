import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Product_details() {
  const [open, setOpen] = useState<Boolean>(false)
  const [nutrition, setNutrition] = useState<Boolean>(false)
  const [review, setReview] = useState<Boolean>(false)
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#FFFFFF"}}>
      <ScrollView style={{flex: 1}}>
        <View style={{display: "flex", flexDirection: "column", gap: 20, marginBottom: 20}}>
          <View style={{backgroundColor: "#F2F3F2", paddingTop: 20, paddingBottom: 40, borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}>
            <View style={{display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginHorizontal: 20}}>
              <Image source={require("../assets/images/lef.png")} />
              <Image source={require("../assets/images/down.png")} />
            </View>
            <View style={{display: "flex", justifyContent: "space-between", alignItems: "center",}}>
              <Image source={require("../assets/images/apple.png")} />
            </View>
          </View>
          <View style={{marginHorizontal: 20, display: "flex", justifyContent: "space-between", flexDirection: "row",}}>
            <View style={{
              display: "flex", flexDirection: "column",
              gap: 10
            }}>
              <Text style={{fontSize: 22, color: "#181725", fontWeight: "700"}}>Product Name: Apple</Text>
              <Text style={{fontSize: 15, color: "#7C7C7C", fontWeight: "400"}}>1kg, Price</Text>
            </View>
              <Image source={require("../assets/images/lov.png")} />
          </View>
          <View style={{marginHorizontal: 20, display: "flex", justifyContent: "space-between", flexDirection: "row", alignItems: "center", paddingBottom: 20, borderColor: "#E2E2E2", borderBottomWidth: 1}}>
            <View style={{display: "flex", gap:40, flexDirection: "row", alignItems: "center"}}>
              <Text style={{display: "flex", justifyContent: "center", alignItems: "center"}}><Image source={require("../assets/images/mi.png")} /></Text>
              <Text style={{fontSize: 22, color: "#181725", fontWeight: "700"}}>1</Text>
              <Text style={{display: "flex", justifyContent: "center", alignItems: "center"}}><Image source={require("../assets/images/plus.png")} /></Text>
            </View>
            <Text style={{fontSize: 22, color: "#181725", fontWeight: "700"}}>$145</Text>
          </View>
          <View style={{paddingVertical: 20, borderColor: "#E2E2E2", borderBottomWidth: 1, marginHorizontal: 20}}>
            <View style={{display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row"}}>
              <Text style={{fontSize: 18, color: "#181725", fontWeight: "500"}}>Product Details</Text>
              <Text onPress={() => setOpen(!open)}>{open ? <Image source={require("../assets/images/dn.png")} /> : <Image source = { require("../assets/images/left.png") } />}</Text>
            </View>
            {
              open &&  <Text style={{fontSize: 15, color: "#7C7C7C", fontWeight: "500", marginTop: 10}}>
              Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.
              </Text>
            }
          </View>
          <View style={{paddingVertical: 20, borderColor: "#E2E2E2", borderBottomWidth: 1, marginHorizontal: 20}}>
            <View style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row"}}>
              <Text style={{fontSize: 18, color: "#181725", fontWeight: "400"}}>Nutritions</Text>
              <Text onPress={() => setNutrition(!nutrition)}>{nutrition ? <Image source={require("../assets/images/dn.png")} /> : <Image source = { require("../assets/images/left.png") } />}</Text>
            </View>
            {
              nutrition &&  <Text style={{fontSize: 15, color: "#7C7C7C", fontWeight: "500", marginTop: 10}}>
              Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.
              </Text>
            }
          </View>
          <View style={{ marginHorizontal: 20}}>
            <View style={{ display: "flex", justifyContent: "space-between", alignItems: "center",flexDirection: "row"}}>
              <Text style={{fontSize: 18, color: "#181725", fontWeight: "500"}}>Reviews</Text>
              <Text onPress={() => setReview(!review)}>{review ? <Image source={require("../assets/images/dn.png")} /> : <Image source = { require("../assets/images/left.png") } />}</Text>
            </View>
            {
              review &&  <Text style={{ fontSize: 15, color: "#7C7C7C", fontWeight: "500", marginTop: 10}}>
              Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.
              </Text>
            }
          </View>
          <TouchableOpacity style={{justifyContent:"center", alignItems: "center", height: 67, backgroundColor: "#53B175", marginHorizontal: 20, borderRadius: 16}}>
            <Text style={{color: "#FFFFFF", fontWeight: "semibold", fontSize: 18}}>Add to Basket</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}