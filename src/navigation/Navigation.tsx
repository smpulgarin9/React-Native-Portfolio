import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from '@expo/vector-icons';


// screens
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import StackScreen from '../screens/StackScreen';

const HomeStactNavigator = createNativeStackNavigator();

function MyStack() {
    return (
        <HomeStactNavigator.Navigator
            initialRouteName="HomeScreen">
            <HomeStactNavigator.Screen 
                name="HomeScreen" 
                component={HomeScreen} />
            <HomeStactNavigator.Screen 
                name="Stack" 
                component={StackScreen}
                options={{
                    headerBackTitleVisible: false,
                }} />
        </HomeStactNavigator.Navigator>
    );
}


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: 'purple',
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={MyStack} 
                options={{
                    tabBarLabel: 'Feed',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                    tabBarBadge: 10,
                    headerShown: false,
                }}
                />
            <Tab.Screen 
                name="Settings" 
                component={SettingsScreen} 
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="brightness-5" color={color} size={size} />
                    ),
                }}
                />        
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}