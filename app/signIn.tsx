import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

export default function signIn() {
  const img = require("../assets/images/pic.png");
  const g = require("../assets/images/g.png");
  const f = require("../assets/images/f.png");
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>signIn</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})