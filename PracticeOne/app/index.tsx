import { ProfileCard } from "../components/ProfileCard";

export default function Index() {
  return (
    <>
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
      />
    </>
  );
}
