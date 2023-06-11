import Image from "next/image";

import ProfileButtons from "@/components/ProfileButtons";
import { FC } from "react";

type ProfileHeroProps = {
  user: any;
  projects: any;
};

const ProfileHero: FC<ProfileHeroProps> = ({ user, projects }) => {
  return (
    <section className="flexBetween max-lg:flex-col gap-y-10 w-full">
      <div>
        {user?.image && (
          <Image
            src={user?.image}
            width={100}
            height={100}
            className="rounded-full"
            alt="user image"
          />
        )}
        <p className="text-[35px] leading-[42px] font-bold mt-[40px]">
          {user?.name}
        </p>
        <p className="md:text-[47px] text-[30px] md:leading-[61px] leading-[32px] font-extrabold md:mt-[40px] mt-5 lg:max-w-[444px]">
          I’m Software Engineer at JSM 👋
        </p>
        <div className="flex mt-[30px] gap-5">
          <ProfileButtons user={user} />
        </div>
      </div>
      {projects?.projectSearch?.edges?.length && (
        <Image
          src={projects?.projectSearch?.edges[0]?.node?.image}
          width={739}
          height={554}
          alt="project image"
        />
      )}
    </section>
  );
};

export default ProfileHero;
