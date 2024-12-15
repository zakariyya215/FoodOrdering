import { Image, StyleSheet, FlatList } from 'react-native';

import { Text, View } from '@/components/Themed';
import { blue } from 'react-native-reanimated/lib/typescript/Colors';
import Colors from '@/constants/Colors';
import products from '@assets/data/products';
import { ProductListItem } from '@components/ProductListItem';

// const product = products[0];



export default function MenuScreen() {
  return (
    <View>
      <FlatList data={products} renderItem={({ item }) => <ProductListItem product={item} />} numColumns={2} contentContainerStyle={{gap:10,padding:10}} columnWrapperStyle={{gap:10}}>
      </FlatList>
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
