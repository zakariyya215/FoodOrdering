import { View, Image, Text, Pressable } from "react-native"
import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { Product } from "../types";
import { Link } from "expo-router";

type ProductListItemProps = {
    product: Product,
}

const defaultPizzaImage = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

export const ProductListItem = ({ product }: ProductListItemProps) => {
    return (
        <Link href={"/product"} asChild>
            <Pressable style={styles.container}>
                <Image source={{ uri: product.image || defaultPizzaImage }} style={styles.image} resizeMode="contain" />
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.price}>${product.price}</Text>
            </Pressable>
        </Link>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,
        flex: 1,
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
