import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import runCompletion from "./openai";
import ADIcon from "react-native-vector-icons/AntDesign";
import IdeaCard from "./IdeaCard";
import QuestionMark from "./Components/QuestionMark";

interface Props {
  navigation: NavigationProp<any>;
  route: RouteProp<{ params: { focus: string; level: string } }>;
}

export default function IdeaList({ navigation, route }: Props) {
  const [ideaGenerated, setIdeaGenerated] = useState(false);
  const [currentIdeas, setCurrentIdeas] = useState<Idea[] | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const { level, focus } = route.params;

  function generateIdeas() {
    setIsGenerating(true);

    runCompletion(level, focus)
      .then((appIdeas) => {
        setCurrentIdeas(appIdeas);
        setIdeaGenerated(true);
        setIsGenerating(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function ideaMap(ideaArray: Idea[] | null) {
    if (ideaArray) {
      return ideaArray.map((idea, index) => {
        return (
          <IdeaCard
            idea={idea}
            index={index}
            key={index}
            navigation={navigation}
          />
        );
      });
    } else {
      const skeletonArray = [1, 2, 3, 4, 5];
      return skeletonArray.map((num) => {
        return <IdeaCard idea={num} index={num} key={num} />;
      });
    }
  }

  useEffect(() => {
    generateIdeas();
  }, []);

  return (
    <View className="flex flex-col  px-8 justify-between  py-4 pb-6 bg-white h-full ">
      <QuestionMark />
      <View>
        <View>{ideaMap(currentIdeas)}</View>
        {/* <Pressable
          className="bg-green-500  p-4 mt-4 px-6 rounded-3xl flex flex-row items-center justify-between active:bg-green-600 "
          onPress={generateIdeas}
        >
          <Text className="font-bold text-3xl">Generate</Text>
          <ADIcon name="arrowright" size={50} />
        </Pressable> */}
      </View>
    </View>
  );
}
