import { StyleSheet } from "react-native";
import { globalStyles } from "../../theme/GlobalStyles";
import Colors from "../../theme/Colors";

export default StyleSheet.create({
    ...globalStyles,
    container: {
        flexDirection: "row",
        alignItems: "flex-end",
    },
    viewImage: {
        width: 160,
        height: 160,
        justifyContent: "flex-end",
    },
    imageColors: {
        width: '100%',
        height: 146,
    },
    colorGroup: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: 15,
        paddingLeft: 5,
        paddingTop: 5,
    },
    buttonColorItem: {
        width: 31,
        height: 31,     
        margin: 2,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 15,
    },
    colorItem: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: '#878787',
        borderWidth: 1,
    },
});