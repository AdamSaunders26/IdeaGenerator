import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, Image, Pressable, Text, View } from "react-native";
import ADIcon from "react-native-vector-icons/AntDesign";
import runCompletion from "./openai";
import IdeaCard from "./IdeaCard";
import { NavigationProp } from "@react-navigation/native";

interface Props {
  navigation: NavigationProp<any>;
}

export default function HomeScreen({ navigation }: Props) {
  return (
    <View className="flex flex-col  px-8 justify-between  py-4 pb-6 bg-white h-full ">
      <View className="items-center mx-16 py-4 rounded-full justify-center bg-green-500 animate-spin ">
        <Pressable
          onPress={() => {
            // setIdeaGenerated(false);
          }}
        >
          <ADIcon name="questioncircleo" size={200} />
        </Pressable>
      </View>
      <View>
        <Text className="text-lg mt-16">
          Click the button below to generate 5 app ideas.
        </Text>
        <Pressable
          className="bg-green-500  p-4 mt-4 px-6 rounded-3xl flex flex-row items-center justify-between active:bg-green-600 "
          onPress={() => {
            navigation.navigate("IdeaList");
          }}
        >
          <Text className="font-bold text-3xl">Generate</Text>
          <ADIcon name="arrowright" size={50} />
        </Pressable>
      </View>
    </View>
  );
}
