import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NativeWindStyleSheet } from "nativewind";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./app/Screens/HomeScreen";
import IdeaList from "./app/Screens/IdeaList";
import IdeaDetails from "./app/Screens/IdeaDetails";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export type StackParamList = {
  Home: undefined;
  IdeaList: { focus: string; level: string; feature: string };
  IdeaDetails: { idea: Idea };
};

export default function App() {
  const Stack = createNativeStackNavigator<StackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="IdeaList"
          component={IdeaList}
          options={{ title: "Generated Ideas" }}
        />
        <Stack.Screen
          name="IdeaDetails"
          component={IdeaDetails}
          options={{ title: "Idea Details" }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
