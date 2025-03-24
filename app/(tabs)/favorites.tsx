import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { data, product } from '../util/dummyData'
import { Image } from 'react-native'

export default function favorites() {
  return (
    <SafeAreaView style={{flex:1,backgroundColor: "#FFFFFF"}}>
      <ScrollView style={{flex: 1}}>
        <View>
          <Text style={{textAlign:"center", fontWeight: 700, fontSize: 20, marginTop: 10}}>Favorites</Text>
          <View style={{marginTop: 30,borderTopWidth: 1,borderBottomWidth: 1,
    borderColor: '#E2E2E2',}}>
            {data.map((item) => {
              return (
                <View style={styles.div} key={item.id}>
                  <View>
                    <Image style={{width: 30, height: 50}} source={item.img}/>
                  </View>
                  <View>
                    <Text style={{fontSize: 16, color: "#181725", fontWeight: 700}}>{item.name}</Text>
                    <Text style={{fontSize: 14, color: "#7C7C7C", fontWeight: 500, marginTop: 5}}>{item.ml}</Text>
                  </View>
                  <View style={{display: "flex", flexDirection: "row", alignItems: "center", gap: 10}}>
                    <Text style={{fontSize: 16, color: "#181725", fontWeight: 700}}>${item.price}</Text>
                    <TouchableOpacity style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
                      <Image  source={require("../../assets/images/left.png")}/>
                    </TouchableOpacity>
                  </View>
                </View>
              )
 
           })}
          </View>
          <TouchableOpacity style={{ height: 65, marginTop: 20, backgroundColor: "#53B175",display:"flex", alignItems: "center", marginBottom:20, justifyContent: "center", marginHorizontal:25, borderRadius: 18 }}>
            <Text style={{fontSize: 18, fontWeight: 400, color: "#FFFFFF"}}>Add All To Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  div: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 25,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: '#E2E2E2',
    marginHorizontal: 25
  },
})
