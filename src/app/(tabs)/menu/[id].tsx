import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@assets/data/products';

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();
  const product = products.find((i) => String(i.id) == id);  
  const defaultPizzaImage = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

  if(!product){
    return <Text>Product not Found</Text>
  }
  
  return (
    <View>
      <Stack.Screen options={{ title: product.name }} />
      <Image source={{uri: product.image || defaultPizzaImage}}/>
      <Text style={{ fontSize: 20 }}>ProductDetailsScreen: {id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})