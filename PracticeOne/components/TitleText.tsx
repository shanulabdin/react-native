import { COLORS } from "@/constants/colors";
import { Text } from "react-native";

type TitleTextProps = {
  text: string;
};

export const TitleText = ({ text }: TitleTextProps) => {
  return (
    <Text style={{
      fontSize: 28,
      color: COLORS.text,
      fontWeight: "bold",
      textAlign: "center",
      paddingTop: 20,
      paddingBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: COLORS.border,
    }}>
      {text}
    </Text>
  );
};