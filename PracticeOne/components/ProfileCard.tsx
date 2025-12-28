import { COLORS } from "@/constants/colors";
import { Text, View } from "react-native";
type ProfileCardProps = {
  name: string;
  age: number;
  profession: string;
  bgColor?: string;
};

export const ProfileCard = ({ name, age, profession, bgColor }: ProfileCardProps) => {
  return (
    <View style={{
      alignItems: "center",
      padding: 20,
      margin: 20,
      borderWidth: 1,
      borderColor: "lightgray",
      borderRadius: 10,
      backgroundColor: bgColor || "white",
    }}>
      <Text style={{
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        color: COLORS.text
      }}>
        {name}
      </Text>
      <Text style={{
        fontSize: 18,
        marginBottom: 5,
        color: COLORS.text
      }}>
        {age}
      </Text>
      <Text style={{
        fontSize: 18,
        color: COLORS.text
      }}>
        {profession}
      </Text>
    </View>
  );
};