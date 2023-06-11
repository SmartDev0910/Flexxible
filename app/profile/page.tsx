import ProfileHero from "@/components/ProfileHero";
import ProfileAbout from "@/components/ProfileAbout";
import ProfileProjects from "@/components/ProfileProjects";
import { getProjectsByUser, getUserByEmail } from "@/graphql/server";
import { getCurrentUser } from "@/utils/session";
import { ProfileProps } from "@/utils/type";
import ProfileFilter from "@/components/ProfileFilter";

const User = async ({ searchParams }: ProfileProps) => {
  const user = await getCurrentUser();
  const projects = await getProjectsByUser(user?.email || "");
  const userinfo = await getUserByEmail(user?.email || "");
  return (
    <main className="flexCenter flex-col w-full paddings !lg:py-[85px] !py-16">
      <ProfileHero user={user} projects={projects} />

      <section className="flexStart flex-col lg:mt-[118px] mt-16 w-full">
        <ProfileFilter />
        {searchParams.tab === "Work" && (
          <ProfileProjects user={user} projects={projects} />
        )}
        {searchParams.tab === "Projects" && (
          <ProfileProjects user={user} projects={projects} />
        )}
        {searchParams.tab === "About" && (
          <ProfileAbout userinfo={userinfo.userSearch?.edges[0]?.node} />
        )}
      </section>
    </main>
  );
};

export default User;
