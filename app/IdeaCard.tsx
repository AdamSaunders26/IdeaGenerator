import { Text, View } from "react-native";

interface Props {
  idea: string;
  index: number;
}

export default function IdeaCard({ idea, index }: Props) {
  return (
    <View className="border-4 border-green-500 my-1 p-2 rounded-xl">
      <Text className="text-xl">
        {index + 1}. {idea}
      </Text>
    </View>
  );
}
