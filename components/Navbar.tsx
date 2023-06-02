'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

import SearchBar from './SearchBar';
import CustomButton from './CustomButton';

const ProfileModal = ({ openModal }: { openModal: boolean }) => (
  <div className={`${openModal ? 'flexCenter flex-col' : 'hidden'} bg-[#F1F4F5] absolute top-14 py-2 min-w-[120px] rounded-xl`}>
    <Link href="/profile" className="text-small py-4">Profile</Link>
    <CustomButton title="Sign out" handleClick={() => signOut()} />
  </div>
)

const Navbar = () => {
  const { data: session } = useSession();

  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <nav className="flexBetween py-[18px] px-[30px] border-b-[1px] border-[#EBEAEA]">
      <div className="flexCenter gap-[40px]">
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            className="min-w-[116px]"
            width={116}
            height={43}
            alt="logo"
          />
        </Link>
        <ul className="xl:flex hidden text-small gap-[27px]">
          <Link href="/">Inspiration</Link>
          <Link href="/">Find Work</Link>
          <Link href="/">Learn Design</Link>
          <Link href="/">Go Pro</Link>
          <Link href="/">Hire Designers</Link>
        </ul>
      </div>

      <div className="flexCenter gap-[17px]">
        <Link href="/" className="text-center max-md:max-w-min text-primary-purple text-small">Apply Now</Link>
        <SearchBar />
        {session?.user ? (
          <>
            <div className="flexCenter relative z-10" onClick={() => setOpenModal(!openModal)}>
              <ProfileModal openModal={openModal} />
              <Image
                src={session.user.image!}
                width={45}
                height={45}
                className="rounded-full"
                alt="user profile image"
              />
            </div>
            <Link
              href="/create-post"
              className="flex gap-[13px] p-[14px] text-white bg-primary-purple rounded-xl text-sm leading-[17px] font-medium"
            >
              <Image
                src="/assets/upload.svg"
                width={14}
                height={14}
                alt="left icon"
              />
              Upload
            </Link>
          </>
        ) : (
          <CustomButton title="Sign in" handleClick={() => signIn()} />
        )}
      </div>
    </nav>
  );
};
export default Navbar;
