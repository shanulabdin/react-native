import { Text, View } from "react-native";
import { Greeting } from "../components/Greeting";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Greeting />
    </View>
  );
}
