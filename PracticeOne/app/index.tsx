import { ProfileCard } from "../components/ProfileCard";
import { TitleText } from "../components/TitleText";

export default function Index() {
  return (
    <>
      <TitleText 
        text={"Team Members"}
      />
      <ProfileCard
        name="John Doe"
        age={30}
        profession="Software Engineer"
        bgColor=""
      />
      <ProfileCard
        name="Ali"
        age={22}
        profession={"Student"}
        bgColor=""
      />
      <ProfileCard
        name="Sara"
        age={25}
        profession={"Developer"}
        bgColor="lightpink"
      />
    </>
  );
}
