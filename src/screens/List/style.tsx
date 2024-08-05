import { StyleSheet } from "react-native";
import { globalStyles } from "../../theme/GlobalStyles";
import Metrics from "../../utils/Metrics";
import Colors from "../../theme/Colors";

export default StyleSheet.create({
  ...globalStyles,
  scroll: {
    ...globalStyles.scroll,
    paddingTop: 50,
  },
  headerTitle: {
    ...globalStyles.headerTitle,
    marginVertical: 20,
    fontSize: 35,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  cardContainer: {
    ...globalStyles.cardContainer,
    width: (Metrics.screenWidth - 70) / 2,
    height: (Metrics.screenWidth - 70) / 2,
  },
  gridContainer: {
    ...globalStyles.gridContainer,
    paddingHorizontal: 5,
  },
});