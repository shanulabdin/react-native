import { View } from "react-native";

export const Boxes = () => {
  return (
    <>
      <View style={{
        height: 100,
        width: 100,
        margin: 10,
        backgroundColor: "red",
      }}></View>
      <View style={{
        height: 100,
        width: 100,
        margin: 10,
        backgroundColor: "blue",
      }}>
      </View>
      <View style={{
        height: 100,
        width: 100,
        margin: 10,
        backgroundColor: "green",
      }}>
      </View>
    </>
  );
}