
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../screens/Home';


const StactNavigator = createNativeStackNavigator();

export default function MyStack() {
    return (
        <StactNavigator.Navigator
            initialRouteName="HomeScreen">
            <StactNavigator.Screen 
                name="HomeScreen" 
                component={HomeScreen} />
        </StactNavigator.Navigator>
    );
}