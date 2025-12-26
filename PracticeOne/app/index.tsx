import { Text, View } from "react-native";
import { Greeting } from "../components/Greeting";
import { Boxes } from "../components/Boxes";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Boxes />
    </View>
  );
}
