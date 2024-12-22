import { GestureResponderEvent, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {Stack, useLocalSearchParams, useRouter} from 'expo-router'
import products from '@assets/data/products';
import { useCart } from '@/providers/CartProvider';
import Button from "@components/Button";

type SizeProp = 'S' | 'M' | 'L' | 'XL';

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();
  const product = products.find((i) => String(i.id) == id);
  const defaultPizzaImage = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

  const sizes: SizeProp[] = ['S', 'M', 'L', 'XL'];
  const [currentSize, setCurrentSize] = useState<SizeProp>('S');

  const { addItem } = useCart();

  const router = useRouter();

  if (!product) {
    return <Text>Product not Found</Text>
  }

  function addToCart(): void {
    if (!product) {
      return;
    }
    addItem(product, currentSize);
    router.push('/cart');
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image source={{ uri: product.image || defaultPizzaImage }} style={styles.image} />
      <Text>Select Size</Text>
      <View style={styles.sizes}>
        {sizes.map((item, index) => (
          <Pressable key={index} onPress={() => setCurrentSize(item)}>
            {item === currentSize ?
              <View style={styles.selectedSize}>
                <Text style={styles.sizeText}>{item}</Text>
              </View>
              :
              <View style={styles.size}>
                <Text style={styles.sizeText}>{item}</Text>
              </View>
            }
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}>${product.price}</Text>
      <Button onPress={addToCart} text={'Add to Cart'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10
  },
  image: {
    width: "100%",
    aspectRatio: 1
  },
  price: {
    fontWeight: 'bold'
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    flex: 1
  },
  selectedSize: {
    backgroundColor: 'gainsboro',
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  size: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sizeText: {
    fontSize: 20,
    fontWeight: 500
  }
})