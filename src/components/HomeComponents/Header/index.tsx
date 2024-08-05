import React from "react";
import { ImageBackground, Text } from "react-native";
import styles from "./style";

const Header = () => {
  return (
    <ImageBackground
      source={require("../../../assets/header.png")}
      style={styles.headerImg}
      resizeMode="cover"
    >
      <Text style={styles.headerTitle}>{"Pintemos"}</Text>
      <Text style={styles.headerSubtitle}>{"Selecciona una categoria"}</Text>
    </ImageBackground>
  );
};

export default Header;
