import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../theme/ThemeContext";
import { GlobalStyles } from "../theme/GlobalStyles";

interface ButtonProps {
    onPress: () => void;
    title: string;
    isBlue?: boolean;
    isGray?: boolean;
}

export default function Button({ title, onPress, isBlue, isGray }: ButtonProps) {
    const theme = useContext(ThemeContext);

    return (
        <TouchableOpacity
            style={[
                GlobalStyles.btn,
            ]}
            onPress={onPress}            
            >
                <Text style={
                    GlobalStyles.container
                }>
                {title}
                </Text>
            </TouchableOpacity>
    );

}