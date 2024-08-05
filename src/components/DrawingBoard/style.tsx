
import { StyleSheet } from "react-native";
import { globalStyles } from "../../theme/GlobalStyles";
import Colors from "../../theme/Colors";

export default StyleSheet.create({
    ...globalStyles,
    container: {
        ...globalStyles.container,
        backgroundColor: 'transparent',
        padding: 0,
    },
    eraseButton: {
        position: 'absolute',
        width: 36,
        height: 36,
        right: 0,
        margin: 5,
    },
    boardBackground: {
        flex: 1,
        margin: 15,
        borderColor: Colors.black,
        borderWidth: 2, 
        marginBottom: 5
      },
  });