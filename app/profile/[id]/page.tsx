'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

import { UserFilters } from '@/constants/userFilters';
import ProfileHero from '@/components/ProfileHero';
import ProfileAbout from '@/components/ProfileAbout';
import ProfileProjects from '@/components/ProfileProjects';

const UserID = () => {
  // eslint-disable-next-line no-undef
  const [filter, setFilter] = useState<string>('Work');

  const { data: session } = useSession();

  return (
    <main className="flexCenter flex-col w-full paddings !lg:py-[85px] !py-16">
      <ProfileHero user={session?.user} />

      <section className="flexStart flex-col lg:mt-[118px] mt-16 w-full">
        <div className="flexBetween max-md:flex-col pb-7 w-full text-[16px] leading-[20px] font-medium border-b-[1px] border-[#E2E5F1]">
          <ul className="flex md:gap-x-[30px] gap-x-5 overflow-auto">
            {UserFilters.map((userFilter) => (
              <button
                key={userFilter}
                type="button"
                onClick={() => setFilter(userFilter)}
                className={`${filter !== userFilter && 'opacity-60'}`}
              >
                {userFilter}
              </button>
            ))}
          </ul>
          <button type="button" onClick={() => console.log('Following')} className="flexCenter gap-[11px] text-small py-3 px-[14px] mt-4 opacity-60 border-[1px] border-[#E4E4E4] rounded-lg max-md:w-full">
            Recent Shorts
            <Image
              src="/assets/arrow-down.svg"
              width={10}
              height={5}
              alt="arrow down"
            />
          </button>
        </div>

        {filter === 'Work' && <ProfileProjects />}
        {filter === 'Projects' && <ProfileProjects />}
        {filter === 'About' && <ProfileAbout />}
      </section>
    </main>
  );
};

export default UserID;
