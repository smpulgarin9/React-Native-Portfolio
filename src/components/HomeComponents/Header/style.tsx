import { StyleSheet } from "react-native";
import { globalStyles } from "../../../theme/GlobalStyles";
import Metrics from "../../../utils/Metrics";

export default StyleSheet.create({
  ...globalStyles,
  headerImg: {
    width: "100%",
    height: Metrics.screenWidth / 1.6739790753, // relacion de aspecto
    justifyContent: "flex-end",
    paddingBottom: 15,
  },
});
