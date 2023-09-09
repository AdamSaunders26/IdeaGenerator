import { RouteProp } from "@react-navigation/native";
import { FlatList, Pressable, Text, View } from "react-native";
import ADIcon from "react-native-vector-icons/AntDesign";
import QuestionMark from "./Components/QuestionMark";

interface Props {
  route: RouteProp<{ params: { idea: Idea } }>;
}

export default function IdeaDetails({ route }: Props) {
  const { name, category, description, features } = route.params.idea;
  console.log(features);
  return (
    <View className="flex flex-col  px-8 justify-around  py-4 pb-6 bg-white h-full ">
      <QuestionMark />
      <View className="flex flex-2 justify-between border-4  border-green-500 rounded-xl p-2">
        <View className="pb-2 border-b-green-500 border-b-2">
          <Text className="text-3xl">{name}</Text>
          <Text className="text-xl text-neutral-600">{category}</Text>
        </View>
        <View className="py-2 border-b-2 border-b-green-500">
          <Text className="text-2xl ">{description}</Text>
        </View>
        <View>
          {/* <FlatList
            data={features}
            renderItem={(feature) => {
              console.log(feature);
              return <Text className="text-xl">{feature.key}</Text>;
            }}
          /> */}
          {features.map((feature, index) => {
            return (
              <Text key={index} className="text-xl">
                {" "}
                - {feature}
              </Text>
            );
          })}
        </View>

        {/* <Pressable className="bg-green-500  p-4 mt-4 px-6 rounded-3xl flex flex-row items-center justify-between active:bg-green-600 ">
          <Text className="font-bold text-3xl">Not needed?</Text>
          <ADIcon name="arrowright" size={50} />
        </Pressable> */}
      </View>
    </View>
  );
}
