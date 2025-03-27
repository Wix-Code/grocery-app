import { View, Text, SafeAreaView, ScrollView, Image, TextInput } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { data } from '../util/dummyData'
import Card from '../card'

export default function Shop() {
  return (
    <SafeAreaView style={{backgroundColor: "#FFFFFF", flex: 1}}>
      <ScrollView style={{ flex: 1}}>
        <View style={{marginBottom: 20}}>
          <View style={{display:"flex", justifyContent: "center", alignItems: "center", flexDirection: "column", paddingVertical: 20, paddingHorizontal: 20, position: "sticky", top: 0, zIndex: 50, backgroundColor: "#FFFFFF"}}>
            <Image style={{width: 20}} source={require("../../assets/images/car.png")} />
            <View style={{display:"flex", gap: 10, alignItems: "center", flexDirection: "row"}}>
              <Image source={require("../../assets/images/ve.png")} />
              <Text style={{fontSize: 18, fontWeight: 700, color: "#4C4F4D"}}>Dhaka, Banassre</Text>
            </View>
            <View style={{display: 'flex',flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, borderRadius: 14, gap: 10,width: '100%', height: 51, marginBottom: 5, marginTop: 20, backgroundColor: '#F2F3F2'}}>
              <Image source={require("../../assets/images/sea.png")} />
              <TextInput style={{width: "100%", fontSize: 14, color: "#7C7C7C", outline: "none",}} underlineColorAndroid="transparent" placeholder='Search Store' />
            </View>
          </View>
          <View style={{marginHorizontal: 20, marginBottom: 10}}>
            <Image style={{width: "100%"}} source={require("../../assets/images/bann.png")} />
          </View>
          <View style={{display:"flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginHorizontal: 20 }}>
            <Text style={{color: "#181725", fontWeight: "bold", fontSize: 22}}>Exclusive Offer</Text>
            <Link style={{color: "#53B175", fontWeight: "semibold", fontSize: 16}} href="/explore">See all</Link>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{display: "flex", gap: 20, flexDirection: "row", marginHorizontal: 20}}>
            {
              data.map((item) => {
                return (
                  <View style={{ width: 200, marginRight: 20 }}>
                  <Card key={item.id} item={item} />
                  </View>
                )
              })
            }
          </ScrollView>
          <View style={{display:"flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginHorizontal: 20 }}>
            <Text style={{color: "#181725", fontWeight: "bold", fontSize: 22, marginTop: 30}}>Best Selling</Text>
            <Link style={{color: "#53B175", fontWeight: "semibold", fontSize: 16}} href="/explore">See all</Link>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{display: "flex", gap: 20, flexDirection: "row", marginHorizontal: 20}}>
            {
              data.map((item) => {
                return (
                  <View style={{ width: 200, marginRight: 20 }}>
                  <Card key={item.id} item={item} />
                  </View>
                )
              })
            }
          </ScrollView>
          <View style={{display:"flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginHorizontal: 20 }}>
            <Text style={{color: "#181725", fontWeight: "bold", fontSize: 22, marginTop: 30}}>Groceries</Text>
            <Link style={{color: "#53B175", fontWeight: "semibold", fontSize: 16}} href="/explore">See all</Link>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{display: "flex", gap: 20, flexDirection: "row", marginHorizontal: 20}}>
            {
              data.map((item) => {
                return (
                  <View style={{ width: 200, marginRight: 20 }}>
                  <Card key={item.id} item={item} />
                  </View>
                )
              })
            }
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}