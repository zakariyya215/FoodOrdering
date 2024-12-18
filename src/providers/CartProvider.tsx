import { CartItem, Product } from "@/types";
import { createContext, PropsWithChildren, useState } from "react";

type CartType = {
    items: CartItem[];
    addItem: (product: Product, size: CartItem['size']) => void;
    updateQuantity: (itemId: string, amount: 1 | -1) => void;
    total: number;
}

const CartContext = createContext<CartType>({
    items: [],
    addItem: () => { },
    updateQuantity: () => { },
    total: 0
})

export default function CartProvider({ children }: PropsWithChildren) {
    const [items, setItems] = useState<CartItem[]>([]);

    const total = items.reduce(
        (sum, item) => sum + item.product.price * item.quantity, 0
    );

    const addItem = (product: Product, size: CartItem['size']) => {
        const existItem = items.find(
            item => item.product.id === product.id && item.size === size);
    }

}