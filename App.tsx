import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import Styled from "./app/Styled";

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-pink-500">
      <Text>Open up App.js to start working on your app!</Text>
      <Styled />
      <StatusBar style="auto" />
    </View>
  );
}
