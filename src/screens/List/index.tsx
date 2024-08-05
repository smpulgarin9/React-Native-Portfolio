import React, { useEffect } from "react";
import { BackHandler, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { useFocusEffect } from "@react-navigation/native";
import Background from "../../components/Background";
import { ListScreenProps } from "../../navigation/Types";
import { categories } from "../../utils/categories.json";
import InterstitialAdManager from "../../utils/InterstitialAdManager";
import { ICategories } from "../Home";
import styles from "./style";

export default function ListScreen({
  navigation,
  route,
}: ListScreenProps): JSX.Element {
  const item = route.params.item;

  const onBackPress = () => {
    InterstitialAdManager.show();
    return false;
  };

  useEffect(() => {
    navigation.addListener("beforeRemove", onBackPress);

    return () => {
      navigation.removeListener("beforeRemove", onBackPress);
    };
  }, [navigation]);

  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );

  const onPress = (item: ICategories) => {
    const params = {
      image: item.image,
    };
    navigation.navigate("DrawerScreen", params);
  };

  return (
    <Background image={require("../../assets/background.png")}>
      <ScrollView style={styles.scroll}>
        <Text style={styles.headerTitle}>{item.name}</Text>
        <View style={styles.gridContainer}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index} onPress={() => onPress(category)}>
              <View style={styles.cardContainer}>
                <Image
                  source={{ uri: category.image }}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </Background>
  );
}
