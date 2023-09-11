import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import QuestionMark from "../Components/QuestionMark";
import ExpertiseSlider from "../Components/ExpertiseSlider";
import GenerateButton from "../Components/GenerateButton";
import StateInput from "../Components/StateInput";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../../App";

export default function HomeScreen({
  navigation,
}: NativeStackScreenProps<StackParamList>) {
  const [expertiseLevel, setExpertiseLevel] = useState<string>("Beginner");
  const [appFocus, setAppFocus] = useState<string>("Anything");
  const [keyFeature, setKeyFeature] = useState<string>("Anything");

  return (
    <View className="flex flex-col  px-8 justify-between  py-4 pb-6 bg-white h-full ">
      <QuestionMark />
      <ScrollView automaticallyAdjustKeyboardInsets={true} className="flex-1 ">
        <StateInput
          state={appFocus}
          setState={setAppFocus}
          text="Focus for app ideas:"
        />
        <StateInput
          state={keyFeature}
          setState={setKeyFeature}
          text="Key feature for app ideas:"
        />
        <ExpertiseSlider
          expertiseLevel={expertiseLevel}
          setExpertiseLevel={setExpertiseLevel}
        />
        <GenerateButton
          navigation={navigation}
          appFocus={appFocus}
          expertiseLevel={expertiseLevel}
          keyFeature={keyFeature}
        />
      </ScrollView>
    </View>
  );
}
