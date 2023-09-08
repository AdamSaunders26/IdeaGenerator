import { Text, View } from "react-native";

export default function IdeaDetails({ idea }: { idea: Idea }) {
  return (
    <View className="border-4 border-green-500 my-1 p-2 rounded-xl flex flex-row justify-between">
      <Text className="text-xl font-bold">{idea.name}</Text>
      <Text className="text-xl">{idea.category}</Text>
    </View>
  );
}
