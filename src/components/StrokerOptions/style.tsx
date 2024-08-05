import { StyleSheet } from "react-native";
import { globalStyles } from "../../theme/GlobalStyles";
import Colors from "../../theme/Colors";

export default StyleSheet.create({
  ...globalStyles,
  containerButton: {
    ...globalStyles.container,
    ...globalStyles.shadowContainerStyle,
    height: 90,
    backgroundColor: Colors.white,
    marginHorizontal: 3,
  },
  shadow: {
    ...globalStyles.shadowContainerStyle,
    borderBottomWidth: 6,
    borderColor: Colors.gray_opacity,
    shadowColor: Colors.white,
    elevation: 3,
  },
  containt: {
    flex: 1,
    borderWidth: 5,
    borderColor: Colors.white,
    backgroundColor: Colors.white_opacity,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 32,
    borderBottomWidth: 5,
  },
  strokers: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    justifyContent: "space-between",
  },
  svgContainer: {
    width: 60,
    height: 60,
  },
  imageContainer: {    
    width: 60,
    height: 60,
    position: "absolute",
  }
});
