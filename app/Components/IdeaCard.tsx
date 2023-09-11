import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import FeatherIcon from "react-native-vector-icons/Feather";

interface Props {
  idea: Idea;
  index: number;
  navigation?: NavigationProp<any>;
}

export default function IdeaCard({ idea, index, navigation }: Props) {
  return (
    <Pressable
      onPress={() => {
        navigation?.navigate("IdeaDetails", { idea: idea });
      }}
    >
      <View className="border-4 border-green-500 my-1 p-2 rounded-xl flex flex-row items-center justify-between ">
        <View className="flex flex-wrap">
          <Text numberOfLines={1} className="text-xl font-bold  ">
            {index + 1}. {idea.name}
          </Text>
          <Text className="text-xl ">{idea.category}</Text>
        </View>
        {idea.name.length <= 25 ? (
          <FeatherIcon name={idea.icon} size={50} className="flex-1" />
        ) : null}
      </View>
    </Pressable>
  );
}
