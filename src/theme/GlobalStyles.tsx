import { StyleSheet, Appearance } from "react-native";

// Utils
import Colors from "./Colors";
import Metrics from "../utils/Metrics";

export const globalStyles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginVertical: 15,
    marginHorizontal: 20,
  },
  cardContainer: {
    width: (Metrics.screenWidth - 60) / 2,
    height: (Metrics.screenWidth - 60) / 2,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(210, 210, 210, 0.1)",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
  },
  scroll: {
    width: Metrics.screenWidth,
  },
  imageBackground: {
    height: "100%",
    width: "100%",
  },
  headerTitle: {
    fontSize: 45,
    color: "black",
    textAlign: "left",
    fontWeight: "bold",
    width: "100%",
    paddingHorizontal: 20,
    // fontFamily: Metrics.fontFamily,
  },
  headerSubtitle: {
    color: "#4B5768",
    // fontFamily: Metrics.fontFamily,   
    marginTop: 5,
    fontSize: 15,
    textAlign: "left",
    paddingHorizontal: 20,
    width: "100%",
  },
  navTitle: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
    // fontFamily: Metrics.fontFamily,
  },
  buttonText: {
    fontSize: 18,
    color: "#4B5768",
    fontWeight: "500",
    textAlign: "left",
    textShadowColor: "rgba(210, 210, 210, 1)",
    textShadowOffset: { width: 1, height: 1 },
  },
  shadowContainerStyle: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 32,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 10,
  },
});
