import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, View } from "react-native";
import Styled from "./app/Styled";
import ADIcon from "react-native-vector-icons/AntDesign";

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <View className="flex flex-col  px-8 justify-between py-8 pt-14 bg-white h-full ">
      <Text className="  font-bold text-3xl ">App Idea Generator</Text>
      <View className="items-center my-32 mx-16 py-4 rounded-full justify-center bg-green-500">
        <ADIcon name="questioncircleo" size={200} />
      </View>
      <Text className="text-lg mt-16">
        Click the button below to generate 5 app ideas.
      </Text>
      <View className="bg-green-500  p-4  px-6 rounded-full flex flex-row items-center justify-between">
        <Text className="font-bold text-3xl">Generate</Text>
        <ADIcon name="arrowright" size={50} />
      </View>
      <StatusBar style="light" />
    </View>
  );
}
