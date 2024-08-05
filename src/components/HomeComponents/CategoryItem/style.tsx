import { StyleSheet } from "react-native";
import { globalStyles } from "../../../theme/GlobalStyles";

export default StyleSheet.create({
  ...globalStyles,
  bottomCard: {
    position: "absolute",
    zIndex: -1,
    bottom: 0,
    height: "70%",
    width: "100%",
    shadowColor: "rgba(210, 210, 210, 1)",
    shadowOffset: { width: 2, height: 2 },
  },
  gradient: {
    flex: 1,
    borderRadius: 10,
  },
  image: {
    width: "90%",
    height: "70%",
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginBottom: 10,
    width: "90%",
  },
  itemTitle: {
    ...globalStyles.buttonText,
    color: "white",
    height: "100%",
    alignContent: "center",
  },
});
