import React from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";
import Metrics from "../../../utils/Metrics";
import { ICategories } from "../../../screens/Home";

interface CategoryItemProps {
  index: number;
  item: ICategories;
  onPress: (item: ICategories) => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ index, item, onPress }) => {
  const colors = Metrics.colorsBottons[index % Metrics.colorsBottons.length];

  return (
    <TouchableOpacity key={index} onPress={() => onPress(item)}>
      <View style={styles.cardContainer}>
        <View style={styles.bottomCard}>
          <LinearGradient
            colors={colors}
            start={{ x: 0, y: 0 }}
            style={styles.gradient}
          />
        </View>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <Text style={styles.itemTitle}>{item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;
