import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ICategories } from "../screens/Home";

export type RootStackParamList = {
  HomeScreen: undefined;
  ListScreen: { item: ICategories };
  DrawerScreen: { image: string };
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "HomeScreen"
>;

export type ListScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "ListScreen"
>;

export type DrawerScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "DrawerScreen"
>;
