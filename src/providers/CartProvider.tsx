import {CartItem, Product} from "@/types";
import {randomUUID} from "expo-crypto";
import {createContext, PropsWithChildren, useContext, useState} from "react";

type CartType = {
    items: CartItem[];
    addItem: (product: Product, size: CartItem['size']) => void;
    updateQuantity: (itemId: string, amount: 1 | -1) => void;
    total: number;
}

export const CartContext = createContext<CartType>({
    items: [],
    addItem: () => {
    },
    updateQuantity: () => {
    },
    total: 0
})

export default function CartProvider({children}: PropsWithChildren) {
    const [items, setItems] = useState<CartItem[]>([]);

    const total = items.reduce(
        (sum, item) => sum + item.product.price * item.quantity, 0
    );

    const addItem = (product: Product, size: CartItem['size']) => {
        const existItem = items.find(
            item => item.product.id === product.id && item.size === size);
        if (existItem) {
            updateQuantity(existItem.id, 1);
            return;
        }
        const newCartItem = {
            id: randomUUID(),
            product,
            productId: product.id,
            size,
            quantity: 1
        }
        setItems((existItems) => [newCartItem, ...existItems]);
    }

    function updateQuantity(itemId: string, amount: 1 | -1) {
        setItems(existingItems => existingItems.map((item) => (
                item.id === itemId ? {...item, quantity: item.quantity + amount} : item)
            ).filter((item) => item.quantity > 0)
        );
    }

    return (
        <CartContext.Provider value={{items, addItem, updateQuantity, total}}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => useContext(CartContext);