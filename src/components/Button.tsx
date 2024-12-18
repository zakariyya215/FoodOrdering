import Colors from "@/constants/Colors";
import { forwardRef } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

type ButtonProps = {
    text: string;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

const Button = forwardRef<View | null, ButtonProps>(
    ({ text, ...pressableProps }, ref) => {
        return (
            <Pressable ref={ref} {...pressableProps} style={styles.container}>
                <Text style={styles.text}>{text}</Text>
            </Pressable>
        )
    }
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light.tint,
        padding: 15,
        alignItems: 'center',
        borderRadius: 100,
        marginVertical: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    },
});

export default Button;