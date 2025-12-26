import { Text } from "react-native";

export const Quote = () => {
  return (
    <>
      <Text style={{
        fontSize: 24,
        fontStyle: "italic",
        textAlign: "center",
        margin: 20,
        padding: 20,
        backgroundColor: "lightgray",
        borderRadius: 20,
      }}>
        The only limit to our realization of tomorrow is our doubts of today.
      </Text>
    </>
  );
};