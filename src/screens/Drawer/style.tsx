import { StyleSheet } from "react-native";
import { globalStyles } from "../../theme/GlobalStyles";

export default StyleSheet.create({
  ...globalStyles,
  container: {
    ...globalStyles.container,
    padding: 0,
    paddingTop: 50,
  },
  backgroundImage:{
    width:"100%",
    height:"100%",
  },
});
