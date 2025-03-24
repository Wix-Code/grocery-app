import { Link, useRouter } from "expo-router";
import { Text, View, Modal, StyleSheet, ImageBackground, Button, Image, TouchableOpacity } from "react-native";

export default function Index() {
  const router = useRouter();
  const image = require("../assets/images/back.png");
  const img = require("../assets/images/white.png");
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Image source={img} />
        <Text style={styles.text}>Welcome to our store</Text>
        <Text style={styles.test}>Get your groceries in as fast as one hour</Text>
        <Link href="/login" style={{ width: "100%" }}>
          <TouchableOpacity style={styles.get} onPress={() => router.push("/login")}>
            <Text style={{color: "#FFFFFF",fontSize: 18}}>Get Started</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image:{
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 30,
    height: 100,
    bottom: 60
  },
  text: {
    fontWeight: 500,
    fontSize: 40,
    color: "white",
    textAlign: "center"
  },
  test: {
    fontSize: 16,
    color: "#FCFCFC",
    textAlign: "center"
  },
  get: {
    backgroundColor: "#53B175",
    padding: 10,
    borderRadius: 16,
    width: "100%",
    height: 67,
    color: "#FFFFFF",
    fontSize: 18,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  }
})
