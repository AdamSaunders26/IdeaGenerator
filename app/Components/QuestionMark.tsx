import { View } from "react-native";
import ADIcon from "react-native-vector-icons/AntDesign";

export default function QuestionMark() {
  return (
    <View className=" flex-1 items-center  justify-center  ">
      <View className="rounded-full justify-center p-4 bg-green-500 ">
        <ADIcon name="questioncircleo" size={200} />
      </View>
    </View>
  );
}
