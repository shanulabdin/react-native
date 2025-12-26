import { Text } from "react-native";

type TitleTextProps = {
  text: string;
};

export const TitleText = ({ text }: TitleTextProps) => {
  return (
    <Text style={{
      fontSize: 28,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 20,
    }}>
      {text}
    </Text>
  );
};