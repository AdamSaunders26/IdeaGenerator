import { NavigationProp } from "@react-navigation/native";
import IdeaCard from "../Components/IdeaCard";
import { ActivityIndicator, Text, View } from "react-native";

export default function ideaMap(
  ideaArray: Idea[] | null,
  navigation: NavigationProp<any>
) {
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
    return (
      <View className="flex mb-32 items-center justify-around gap-8">
        <ActivityIndicator color="#22C55E" size="large" />
        <Text className="text-3xl font-bold">Generating</Text>
      </View>
    );
  }
}
