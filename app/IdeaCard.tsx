import { Pressable, Text, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import ADIcon from "react-native-vector-icons/AntDesign";

interface Props {
  idea: Idea | number;
  index: number;
  navigation?: NavigationProp<any>;
}

export default function IdeaCard({ idea, index, navigation }: Props) {
  if (typeof idea === "number") {
    return (
      <View className="border-4  border-green-500 my-1 p-2 rounded-xl flex flex-row justify-between">
        <Text className="text-xl text-neutral-500 font-bold">
          {idea}. Generating
        </Text>
      </View>
    );
  } else {
    return (
      <Pressable
        onPress={() => {
          navigation?.navigate("IdeaDetails", { idea: idea });
        }}
      >
        <View className="border-4 border-green-500 my-1 p-2 rounded-xl flex flex-row items-center justify-between ">
          <View className="flex">
            <Text className="text-xl font-bold">
              {index + 1}. {idea.name}
            </Text>
            <Text className="text-xl ">{idea.category}</Text>
          </View>
          <ADIcon name={idea.icon} size={50} />
        </View>
      </Pressable>
    );
  }
}
