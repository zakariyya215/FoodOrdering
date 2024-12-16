import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{title: 'Details'}}/>
      <Text style={{fontSize:20}}>ProductDetailsScreen: {id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})