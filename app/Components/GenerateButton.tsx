import { NavigationProp } from "@react-navigation/native";
import { Pressable, Text } from "react-native";
import ADIcon from "react-native-vector-icons/AntDesign";

interface Props {
  navigation: NavigationProp<any>;
  appFocus: string;
  expertiseLevel: string;
  keyFeature: string;
}

export default function GenerateButton({
  navigation,
  appFocus,
  expertiseLevel,
  keyFeature,
}: Props) {
  return (
    <Pressable
      className="bg-green-500  p-4 mt-4 px-6 rounded-3xl flex flex-row items-center justify-between active:bg-green-600 "
      onPress={() => {
        navigation.navigate("IdeaList", {
          focus: appFocus,
          level: expertiseLevel,
          feature: keyFeature,
        });
      }}
    >
      <Text className="font-bold text-3xl">Generate</Text>
      <ADIcon name="arrowright" size={50} />
    </Pressable>
  );
}
