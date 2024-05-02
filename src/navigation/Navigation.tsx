import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Navigation
import StackHome from "./StackNavigation";

// screens



const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen 
                name="Home" 
                component={StackHome} 
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
                />               
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
    );
}