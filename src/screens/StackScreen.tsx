import React from "react";
import { View, Text } from "react-native";

export default function StackScreen(): JSX.Element {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          marginTop: "20%",
        }}
      >
        Stack Screen
      </Text>
    </View>
  );
}