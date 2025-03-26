import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import { Link } from 'expo-router';

interface Item {
  img: any;
  name: string;
  ml: string;
  price: number;
}

interface CardProps {
  item: Item;
}

export default function Card({item}: CardProps) {
 
  return (
    <View style={styles.card}>
      <View  style={styles.center}>
        <Image source={item.img} />
      </View>
     
      <Link href="/product_details"><Text style={styles.fir}>{item.name}</Text></Link>
      <Text style={styles.sec}>{item.ml}</Text>
      <View style={styles.btn}>
        <Text style={styles.thr}>${item.price}</Text>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../assets/images/pl.png")} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderColor: "#E2E2E2",
    borderWidth: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 10,
    marginTop: 20
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  fir: {
    fontSize: 16,
    fontWeight: 700,
    color: "#181725",
  },
  sec: {
    fontSize: 14,
    fontWeight: 500,
    color: "#7C7C7C",
  },
  thr: {
    fontSize: 18,
    fontWeight: 700,
    color: "#181725",
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  button: {
    width: 45,
    height: 45,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  }
})