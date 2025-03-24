import { View, Text, SafeAreaView, ScrollView, Image, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { product } from '../util/dummyData'
import { Link } from 'expo-router'

export default function Explore() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#FFFFFF"}}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
            <Text style={styles.text}>Find Products</Text>
            <View style={styles.inp}>
              <Image source={require("../assets/images/sea.png")} />
              <TextInput style={{width: "100%", fontSize: 14, color: "#7C7C7C", outline: "none",}} underlineColorAndroid="transparent" placeholder='Search Store' />
            </View>
            <View style={styles.grid}>
              {
                product.map((item) => {
                  return (  
                    <View key={item.id} style={styles.item}>
                        <Image source={item.img} />
                      <Link href={item.link} style={{ marginTop: 10,textAlign: "center"}}>
                        <Text style={{ fontWeight: 700, fontSize: 16, color: "#181725" }}>{item.name}</Text>
                       </Link>   
                    </View>     
                  )
                })
              }
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    paddingHorizontal: 20
  },
  text: {
    fontSize: 20,
    fontWeight: 700,
    marginTop: 20,
    textAlign: "center",
    color: '#181725'
  },
  inp: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    //borderWidth: 1,
    //borderColor: '#ccc',
    borderRadius: 14,
    gap: 10,
    width: '100%',
    height: 51,
    marginBottom: 5,
    marginTop: 30,
    backgroundColor: '#F2F3F2'
  },
  grid: {
    flexDirection: "row",
    justifyContent: "space-between",  // Centers items horizontally
    flexWrap: "wrap",  // Wraps items
  },
  item: {
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 15,
    borderWidth: 1,
    backgroundColor: "#FFFAF9",
    height: 180,
    borderColor: '#FFE1DA',
    borderRadius: 18,
  }
})