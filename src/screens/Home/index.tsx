import React from "react";
import { ScrollView, View } from "react-native";

// Components
import Background from "../../components/Background";
import CategoryItem from "../../components/HomeComponents/CategoryItem";
import Header from "../../components/HomeComponents/Header";

// Utils
import { HomeScreenProps } from "../../navigation/Types";
import { categories } from "../../utils/categories.json";
import styles from "./style";

export interface ICategories {
  name: string;
  image: string;
  images: string;
}

export default function HomeScreen({
  navigation,
}: HomeScreenProps): JSX.Element {
  const onPress = (item: ICategories) => {
    const params = { item: item };
    navigation.navigate("ListScreen", params);
  };

  return (
    <Background image={require("../../assets/background.png")}>
      <ScrollView style={styles.scroll}>
        <Header />
        <View style={styles.gridContainer}>
          {categories.map((item, index) => (
            <CategoryItem
              key={index}
              index={index}
              item={item}
              onPress={onPress}
            />
          ))}
        </View>
      </ScrollView>
    </Background>
  );
}
