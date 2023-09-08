import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, Image, Pressable, Text, View } from "react-native";
import ADIcon from "react-native-vector-icons/AntDesign";
import { NativeWindStyleSheet } from "nativewind";
import IdeaCard from "./app/IdeaCard";
import runCompletion from "./app/openai";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./app/HomeScreen";
import IdeaList from "./app/IdeaList";
import IdeaDetails from "./app/IdeaDetails";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  const Stack = createNativeStackNavigator();

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
