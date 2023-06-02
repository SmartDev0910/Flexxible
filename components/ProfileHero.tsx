import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

import ProfileButtons from '@/components/ProfileButtons';

const ProfileHero = ({ user }) => {
  const { data: session } = useSession();

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
        <p className="text-[35px] leading-[42px] font-bold mt-[40px]">{user?.name}</p>
        <p className="md:text-[47px] text-[30px] md:leading-[61px] leading-[32px] font-extrabold md:mt-[40px] mt-5 lg:max-w-[444px]">
          I’m Software Engineer at JSM 👋
        </p>
        <div className="flex items-center justify-start md:mt-[44px] mt-8 gap-x-[15px] text-[18px] opacity-50 leading-[22px] font-bold">
          ON TEAMS
          <Image
            src="/assets/team.svg"
            width={50}
            height={50}
            alt="team logo"
          />
        </div>
        <div className="flex mt-[30px] gap-5">
          <ProfileButtons />
        </div>
      </div>
      <Image
        src="/assets/profile-project.png"
        width={739}
        height={554}
        alt="project image"
      />
    </section>
  );
};

export default ProfileHero;
