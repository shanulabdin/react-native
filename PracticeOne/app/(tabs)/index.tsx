import { ProfileCard } from "../../components/ProfileCard";
import { TitleText } from "../../components/TitleText";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 20 }}>
      <TitleText 
        text={"Team Members"}
      />
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
        bgColor="lightpink"
      />
    </SafeAreaView>
  );
}
