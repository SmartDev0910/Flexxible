"use client";

import { useState, FC } from "react";
import Link from "next/link";
import ProfileEditModal from "@/components/ProfileEditModal";

type Props = {
  userinfo: any;
};

const ProfileAbout: FC<Props> = ({ userinfo }) => {
  const [github] = useState(null);
  const [linkedIn] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  return (
    <section className="flexStart flex-col w-full lg:gap-[60px] gap-[30px] mt-[30px]">
      {openEditModal && (
        <ProfileEditModal setOpenModal={setOpenEditModal} userinfo={userinfo} />
      )}
      <div className="flex flex-col w-full gap-3">
        <p className="text-lg font-bold">Github</p>
        {userinfo?.githubUrl ? (
          <Link href={userinfo?.githubUrl} target="_blank" rel="norefferer">
            {userinfo?.githubUrl}
          </Link>
        ) : (
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
        {userinfo?.linkedinUrl ? (
          <Link href={userinfo?.linkedinUrl} target="_blank" rel="norefferer">
            {userinfo?.linkedinUrl}
          </Link>
        ) : (
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
