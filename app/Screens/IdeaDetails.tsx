import { RouteProp } from "@react-navigation/native";
import { FlatList, ListRenderItemInfo, Text, View } from "react-native";
import QuestionMark from "../Components/QuestionMark";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../../App";

export default function IdeaDetails({
  route,
}: NativeStackScreenProps<StackParamList, "IdeaDetails">) {
  const { name, category, description, features } = route.params.idea;

  function renderItem(feature: ListRenderItemInfo<string>) {
    return (
      <Text key={feature.index} className="text-xl">
        • {feature.item}
      </Text>
    );
  }
  return (
    <View className="flex flex-col  px-4 justify-around  py-4 pb-14 bg-white h-full ">
      <QuestionMark />
      <View className="flex flex-2 justify-between border-4  border-green-500 rounded-xl p-2">
        <View className="pb-2 border-b-green-500 border-b-2">
          <Text className="text-3xl">{name}</Text>
          <Text className="text-xl text-neutral-600">{category}</Text>
        </View>
        <View className="py-2 border-b-2 border-b-green-500">
          <Text className="text-2xl ">{description}</Text>
        </View>
        <View className="py-2">
          <FlatList
            data={features}
            scrollEnabled={false}
            renderItem={renderItem}
          />
        </View>
      </View>
    </View>
  );
}
