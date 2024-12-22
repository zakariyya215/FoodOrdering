import {useCart} from "@/providers/CartProvider";
import {StatusBar} from "expo-status-bar";
import {View, Text, Platform, FlatList} from "react-native";
import CartListItem from "@components/CartListItem";
import Button from "@components/Button";
import React from "react";

export default function CartScreen() {
    const {items, total} = useCart();

    function checkout() {

    }

    return (
        <View style={{padding:10 }}>
            <FlatList data={items} renderItem={({item}) => <CartListItem cartItem={item}/>}
                      contentContainerStyle={{
                          padding: 10, gap: 10
                      }}
            />
            <Text style={{marginTop: 20, fontSize: 20, fontWeight: 500}}>Total: ${total}</Text>
            <Button text={'Checkout'}/>
            {/* Use a light status bar on iOS to account for the black space above the modal */}
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'}/>
        </View>
    )
}