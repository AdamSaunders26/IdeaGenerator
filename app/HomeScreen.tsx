import React, { useState } from "react";
import { Alert, Image, Pressable, Text, TextInput, View } from "react-native";
import ADIcon from "react-native-vector-icons/AntDesign";
import { Slider } from "@miblanchard/react-native-slider";
import { NavigationProp } from "@react-navigation/native";
import QuestionMark from "./Components/QuestionMark";

interface Props {
  navigation: NavigationProp<any>;
}

export default function HomeScreen({ navigation }: Props) {
  const [expertiseLevel, setExpertiseLevel] = useState<string>("Beginner");
  const [appFocus, setAppFocus] = useState<string>("");

  interface Lookup {
    [key: number]: string;
  }
  const expertiseLevelLookup: Lookup = {
    0: "Beginner",
    1: "Intermediate",
    2: "Expert",
    3: "Master",
  };

  return (
    <View className="flex flex-col  px-8 justify-between  py-4 pb-6 bg-white h-full ">
      <QuestionMark />
      <View>
        <Text className="text-xl mx-2">Focus for app ideas:</Text>
        <TextInput
          inputMode="text"
          maxLength={20}
          value={appFocus}
          onChangeText={(e) => {
            setAppFocus(e);
          }}
          className="bg-neutral-200 mb-10 text-2xl rounded-2xl p-4 "
        />
        <Text className="text-xl mx-2 mb-8">Select level of expertise:</Text>
        <Slider
          onValueChange={(e) => {
            setExpertiseLevel(expertiseLevelLookup[e[0]]);
          }}
          renderAboveThumbComponent={(e) => {
            return (
              <View className="flex  justify-center items-center  -m-8">
                <Text className="text-lg">{expertiseLevel}</Text>
              </View>
            );
          }}
          minimumValue={0}
          maximumValue={3}
          step={1}
          thumbTintColor="#22C55E"
          minimumTrackTintColor="#22C55E"
        />
        <Text className="text-lg mt-16">
          Click the button below to generate 5 app ideas.
        </Text>
        <Pressable
          className="bg-green-500  p-4 mt-4 px-6 rounded-3xl flex flex-row items-center justify-between active:bg-green-600 "
          onPress={() => {
            navigation.navigate("IdeaList", {
              focus: appFocus,
              level: expertiseLevel,
            });
          }}
        >
          <Text className="font-bold text-3xl">Generate</Text>
          <ADIcon name="arrowright" size={50} />
        </Pressable>
      </View>
    </View>
  );
}
