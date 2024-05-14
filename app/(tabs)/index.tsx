import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput } from "react-native";
// import { View } from "react-native-reanimated/lib/typescript/Animated";

const Home = () => {
  return (
    <>
      <View style={styles.viewLogo}>
        <Text style={styles.classLogo}>hello dear</Text>
        <Text>myname is ntwali
        </Text>
      </View>
      <View>
        <Text>Enter name:</Text>
        <TextInput style={styles.input} />
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  classLogo: {
    // position: "absolute",
    justifyContent: "center",
    // alignContent:'',
    backgroundColor: "green",
    alignItems:'center',
    padding: 20,
  },
  viewLogo: {
    padding: 50,
    alignItems:'center',
    justifyContent:'center',
  },
  input:{
    backgroundColor:'red',
    borderColor:'black',
    borderWidth:1,
  }
});
