import { Text, View } from "react-native";

interface Props {
  idea: Idea;
  index: number;
}

export default function IdeaCard({ idea, index }: Props) {
  return (
    <View className="border-4 border-green-500 my-1 p-2 rounded-xl flex flex-row justify-between">
      <Text className="text-xl font-bold">
        {index + 1}. {idea.name}
      </Text>
      <Text className="text-xl">{idea.category}</Text>
    </View>
  );
}
