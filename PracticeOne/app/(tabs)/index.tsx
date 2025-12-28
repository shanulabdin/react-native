import { ProfileCard } from "../../components/ProfileCard";
import { TitleText } from "../../components/TitleText";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants/colors";
import { ScrollView } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 20 }}>
      <TitleText
        text={"Team Members"}
        
      />
      <ScrollView>

        <ProfileCard
          name="John Doe"
          age={30}
          profession="Software Engineer"
        />
        <ProfileCard
          name="Ali"
          age={22}
          profession={"Student"}
        />
        <ProfileCard
          name="Sara"
          age={25}
          profession={"Developer"}
          bgColor={COLORS.background}
        />
        <ProfileCard
          name="Ahmed"
          age={29}
          profession={"Youtuber"}
          bgColor={COLORS.primary}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
