import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { data } from '../util/dummyData'

export default function Cart() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={{fontSize: 20, fontWeight: "bold", color: "#181725", textAlign: "center", marginBottom: 40, marginTop: 20}}>My Cart</Text>
          <View  style={{ borderColor: "#E2E2E2", borderTopWidth: 1, borderBottomWidth: 1, paddingVertical: 20}}>
            <View style={{marginHorizontal: 20 }}>
              {
                data.map((product) => {
                  return (
                    <View key={product.id} style={{flexDirection: 'row', justifyContent: "space-between", alignItems: "center", display: "flex", marginBottom: 10, borderColor: "#E2E2E2", borderBottomWidth: 1, paddingBottom: 10}}>
                      <View style={{display: "flex", width:100, justifyContent: "center", alignItems: "center"}}>
                        <Image source={product.img} />
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