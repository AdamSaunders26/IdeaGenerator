import { Text, TextInput, View } from "react-native";

interface Props {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  text: string;
}

export default function StateInput({ state, setState, text }: Props) {
  return (
    <View>
      <Text className="text-xl mx-2 font-bold mb-2">{text}</Text>
      <TextInput
        inputMode="text"
        maxLength={20}
        value={state}
        onPressIn={(e) => {
          setState("");
        }}
        onChangeText={(e) => {
          setState(e);
        }}
        className="bg-neutral-200 mb-4 text-2xl rounded-2xl  px-4 pb-2 "
      />
    </View>
  );
}
