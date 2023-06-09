'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProfileEditModal from '@/components/ProfileEditModal';

const ProfileAbout = () => {
  const [github] = useState(null);
  const [linkedIn] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);

  return (
    <section className="flexStart flex-col w-full lg:gap-[60px] gap-[30px] mt-[30px]">
      {openEditModal && <ProfileEditModal setOpenModal={setOpenEditModal} />}
      <div className="flex flex-col w-full gap-3">
        <p className="text-lg font-bold">Github</p>
        {github ? (
          <Link
            href={github}
            target="_blank"
            rel="norefferer"
          >
            {github}
          </Link>
        ): (
          <button
            type="button"
            className="flex text-primary-purple"
            onClick={() => setOpenEditModal(true)}
          >
            Add GitHub
          </button>
        )}
      </div>
      <div className="flex flex-col w-full gap-3">
        <p className="text-lg font-bold">LinkedIn</p>
        {linkedIn ? (
          <Link
            href={linkedIn}
            target="_blank"
            rel="norefferer"
          >
            {linkedIn}
          </Link>
        ): (
          <button
            type="button"
            className="flex text-primary-purple"
            onClick={() => setOpenEditModal(true)}
          >
            Add LinkedIn
          </button>
        )}
      </div>
    </section>
  );
};

export default ProfileAbout;
