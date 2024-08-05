import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import ListScreen from "../screens/List";
import DrawerScreen from "../screens/Drawer";
import { RootStackParamList } from "./Types";

const StactNavigator = createNativeStackNavigator<RootStackParamList>();

export default function MyStack() {
  return (
    <StactNavigator.Navigator initialRouteName="HomeScreen">
      <StactNavigator.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <StactNavigator.Screen
        name="ListScreen"
        component={ListScreen}
        options={({ route }) => ({
          headerShown: true,
          headerTransparent: true,
          headerTitleAlign: 'center',
          title: '',
        })}
      />
      <StactNavigator.Screen
        name="DrawerScreen"
        component={DrawerScreen}
        options={({ route }) => ({
          headerShown: true,
          headerTransparent: true,
          headerTitleAlign: 'center',
          title: '',
        })}
      />
    </StactNavigator.Navigator>
  );
}
