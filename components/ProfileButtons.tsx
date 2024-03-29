import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type ProfileButtonsProps = {
  user: any;
};

const ProfileButtons: FC<ProfileButtonsProps> = ({ user }) => {
  return (
    <>
      <button
        type="button"
        className="flexCenter gap-[13px] p-[14px] text-[#252525] bg-[#F3F3F4] rounded-xl text-sm leading-[17px] font-medium"
      >
        <Image
          src="/assets/plus-round.svg"
          width={14}
          height={14}
          alt="plus icon"
        />
        Follow
      </button>
      <Link
        href={`mailto:${user?.email}`}
        className="flexCenter gap-[13px] p-[14px] text-white bg-primary-purple rounded-xl text-sm leading-[17px] font-medium"
      >
        <Image
          src="/assets/email.svg"
          width={14}
          height={14}
          alt="email icon"
        />
        Hire me
      </Link>
      <button
        type="button"
        className="flexCenter p-[14px] rounded-xl border-[1px] border-[#d9d9d9]"
      >
        <Image
          src="/assets/minus.svg"
          width={14}
          height={14}
          alt="minus icon"
        />
      </button>
    </>
  );
};

export default ProfileButtons;
