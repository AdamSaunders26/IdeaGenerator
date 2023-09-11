import { Slider } from "@miblanchard/react-native-slider";
import { Text, View } from "react-native";

interface Props {
  expertiseLevel: string;
  setExpertiseLevel: React.Dispatch<React.SetStateAction<string>>;
}

export default function ExpertiseSlider({
  expertiseLevel,
  setExpertiseLevel,
}: Props) {
  interface Lookup {
    [key: number]: string;
  }

  const expertiseLevelLookup: Lookup = {
    0: "Beginner",
    1: "Intermediate",
    2: "Expert",
    3: "Master",
  };
  return (
    <View>
      <Text className="text-xl mx-2 font-bold">
        Level of expertise:{" "}
        <Text className=" font-normal">{expertiseLevel}</Text>
      </Text>
      <Slider
        onValueChange={(e) => {
          setExpertiseLevel(expertiseLevelLookup[e[0]]);
        }}
        minimumValue={0}
        maximumValue={3}
        step={1}
        thumbTintColor="#22C55E"
        minimumTrackTintColor="#22C55E"
      />
    </View>
  );
}
