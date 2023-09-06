import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, Image, Pressable, Text, View } from "react-native";
import Styled from "./app/Styled";
import ADIcon from "react-native-vector-icons/AntDesign";
import { ideaListArray } from "./app/ideas";

import { NativeWindStyleSheet } from "nativewind";
import IdeaCard from "./app/IdeaCard";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  const [ideaGenerated, setIdeaGenerated] = useState(false);

  function generateIdeas() {
    setIdeaGenerated(true);
  }

  function ideaList(ideaArray: string[]) {
    return ideaArray.map((idea, index) => {
      return <IdeaCard idea={idea} index={index} key={index} />;
    });
  }

  return (
    <View className="flex flex-col  px-8 justify-between py-8 pt-14 bg-white h-full ">
      <Text className="  font-bold text-3xl ">App Idea Generator</Text>

      <View className="items-center mx-16 py-4 rounded-full justify-center bg-green-500">
        <ADIcon name="questioncircleo" size={200} />
      </View>
      <View>
        {ideaGenerated ? (
          <View>{ideaList(ideaListArray)}</View>
        ) : (
          <Text className="text-lg mt-16">
            Click the button below to generate 5 app ideas.
          </Text>
        )}

        <Pressable
          className="bg-green-500  p-4 mt-4 px-6 rounded-3xl flex flex-row items-center justify-between active:bg-green-600 "
          onPress={generateIdeas}
        >
          <Text className="font-bold text-3xl">Generate</Text>
          <ADIcon name="arrowright" size={50} />
        </Pressable>
      </View>
      <StatusBar style="light" />
    </View>
  );
}
