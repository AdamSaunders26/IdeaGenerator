import { RouteProp } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";
import ADIcon from "react-native-vector-icons/AntDesign";

interface Props {
  route: RouteProp<{ params: { idea: Idea } }>;
}

export default function IdeaDetails({ route }: Props) {
  const { name, category, description, features } = route.params.idea;

  return (
    <View className="flex flex-col  px-8 justify-around  py-4 pb-6 bg-white h-full ">
      <View className="items-center mx-16 py-4 rounded-full justify-center bg-green-500 animate-spin ">
        <ADIcon name="questioncircleo" size={200} />
      </View>
      <View className="flex justify-between border-4  border-green-500 rounded-xl p-2">
        <View className="mb-4">
          <Text className="text-3xl">{name}</Text>
          <Text className="text-xl text-neutral-600">{category}</Text>
        </View>
        <Text className="text-2xl mb-2">{description}</Text>
        {features.map((feature) => {
          return <Text className="text-xl"> - {feature}</Text>;
        })}

        {/* <Pressable className="bg-green-500  p-4 mt-4 px-6 rounded-3xl flex flex-row items-center justify-between active:bg-green-600 ">
          <Text className="font-bold text-3xl">Not needed?</Text>
          <ADIcon name="arrowright" size={50} />
        </Pressable> */}
      </View>
    </View>
  );
}
