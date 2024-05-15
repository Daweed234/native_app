import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

export default function index () {

  const [people, statePoeple] = useState([
    { name: 'david', age:'20', key:1},
    { name: 'john', age:'22', key:2},
    { name: 'jane', age:'19', key:3},
    { name: 'chris', age:'19', key:4},
    { name: 'kylian', age:'30', key:5},
    { name: 'kenny', age:'27', key:6},
    { name: 'sun', age:'19', key:7},    
    { name: 'korea', age:'27', key:8},
    { name: 'ron', age:'19', key:9},
    { name: 'mandela', age:'27', key:10},
    { name: 'chance', age:'19', key:11,}   
  ]);

  return (
    <ScrollView>
      <View>
      {
        people.map((items) => {
          return(
            <View style={styles.container}>
              <Text style={styles.item}>
                {items.name}, {items.age}
              </Text>
            </View>
          )
        })
      }
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:40,
    paddingHorizontal:20,
    backgroundColor:'lightblue',
  },
  item: {
    fontSize:20,
    padding:30,
    marginTop:20,
    backgroundColor:'lightgreen'
  }
})