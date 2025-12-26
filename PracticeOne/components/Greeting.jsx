import { Text } from "react-native";

export const Greeting = () => {
  return (
    <>
      <Text style={{
        fontSize: 32,
        color: "orange",
        fontWeight: "bold",
      }}>
        Hello
      </Text>
      <Text style={{
        fontSize: 32,
        fontWeight: "bold",
      }}>
        Shan ul Abdin!
      </Text>
    </>
  );
}