import { Image, StyleSheet } from 'react-native';

import { Text, View } from '@/src/components/Themed';
import { blue } from 'react-native-reanimated/lib/typescript/Colors';
import Colors from '@/src/constants/Colors';
import products from '@/assets/data/products';
import { ProductListItem } from '@/src/components/ProductListItem';

// const product = products[0];



export default function MenuScreen() {
  return (
    <View>
      <ProductListItem product={products[0]} />
      <ProductListItem product={products[1]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20
  },
  image: {
    width: "100%",
    aspectRatio: 1
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 10
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
