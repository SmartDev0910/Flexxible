'use client';

import Image from 'next/image';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';

import SearchBar from './SearchBar';
import CustomButton from './CustomButton';
import ProfileModal from './ProfileModal';

const Navbar = () => {
  const { data: session } = useSession();

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
            <ProfileModal />
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
