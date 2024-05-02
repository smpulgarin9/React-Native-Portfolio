import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import { StyleSheet } from "react-native";

// Utils
import Colors from "./Colors";
import Metrics from "../utils/Metrics";

const theme = useContext(ThemeContext);

export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});