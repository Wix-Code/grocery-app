import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { data } from '../util/dummyData'

export default function Cart() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#FFFFFF"}}>
      <ScrollView style={{flex: 1}}>
        <View>
         <Text style={{textAlign:"center", fontWeight: 700, fontSize: 20, paddingVertical: 20, borderColor: "#F2F3F2", borderBottomWidth: 1, position: "sticky", top:0, zIndex: 50, backgroundColor: "#53B175", color: "#FFFFFF"}}>My Cart</Text>
          <View  style={{ borderColor: "#E2E2E2", borderTopWidth: 1, borderBottomWidth: 1, paddingVertical: 20}}>
            <View style={{marginHorizontal: 20 }}>
              {
                data.map((product) => {
                  return (
                    <View key={product.id} style={{flexDirection: 'row', justifyContent: "space-between", alignItems: "center", display: "flex", marginBottom: 10, borderColor: "#E2E2E2", borderBottomWidth: 1, paddingBottom: 10}}>
                      <View style={{display: "flex", width:50, justifyContent: "center", alignItems: "center"}}>
                        <Image source={product.img} resizeMode='cover'/>
                      </View>
                      <View style={{display: "flex", flexDirection: "column", justifyContent: "space-between", gap:10}}>
                        <Text style={{fontSize: 16, fontWeight: "bold", color: "#181725"}}>{product.name}</Text>
                        <Text style={{fontSize: 14, fontWeight: 500, color: "#7C7C7C"}}>{product.ml}</Text>
                        <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                          <TouchableOpacity>
                            <Image source={require('../../assets/images/mi.png')}/>
                          </TouchableOpacity>
                          <Text>1</Text>
                          <TouchableOpacity>
                            <Image source={require('../../assets/images/plus.png')}/>
                          </TouchableOpacity>
                        </View>
                      </View>
                      <View style={{display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 20}}>
                        <TouchableOpacity>
                          <Image source={require("../../assets/images/x.png")}/>
                        </TouchableOpacity>
                        <Text style={{fontSize: 18, fontWeight: "bold", color: "#181725"}}>${product.price}</Text>
                      </View>
                    </View>
                  )
                })
              }
            </View>
            <TouchableOpacity style={{ height: 65, marginTop: 20, backgroundColor: "#53B175",display:"flex", alignItems: "center", marginBottom:20, justifyContent: "center", marginHorizontal:25, borderRadius: 18 }}>
              <Text style={{fontSize: 18, fontWeight: 400, color: "#FFFFFF"}}>Go to Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}