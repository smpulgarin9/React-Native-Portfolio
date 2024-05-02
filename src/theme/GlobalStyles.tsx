import { StyleSheet } from "react-native";
import { myColors } from "./Colors";

export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: myColors.light,
    },
    btn: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.light
    }
});