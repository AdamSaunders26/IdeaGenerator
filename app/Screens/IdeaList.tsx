import { useEffect, useState } from "react";
import { View } from "react-native";
import QuestionMark from "../Components/QuestionMark";
import ideaMap from "../Functions/ideaMap";
import generateIdeas from "../Functions/generateIdeas";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../../App";

export default function IdeaList({
  navigation,
  route,
}: NativeStackScreenProps<StackParamList, "IdeaList">) {
  const [currentIdeas, setCurrentIdeas] = useState<Idea[] | null>(null);
  const { level, focus, feature } = route.params;

  useEffect(() => {
    generateIdeas(level, focus, feature, setCurrentIdeas);
  }, []);

  return (
    <View className="flex flex-col  px-8 justify-between  py-4 pb-6 bg-white h-full ">
      <QuestionMark />
      <View>{ideaMap(currentIdeas, navigation)}</View>
    </View>
  );
}
