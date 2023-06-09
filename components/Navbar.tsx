/* eslint-disable react/jsx-no-useless-fragment */

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getProviders, signIn, useSession } from "next-auth/react";

import CustomButton from "./CustomButton";
import ProfileModal from "./ProfileModal";

const Navbar = () => {
  const { data: session } = useSession();
  // eslint-disable-next-line no-undef
  const [providers, setProviders] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

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
          <Link href="/" key="Inspiration">
            Inspiration
          </Link>
          <Link href="/" key="Find Work">
            Find Work
          </Link>
          <Link href="/" key="Learn Design">
            Learn Design
          </Link>
          <Link href="/" key="Go Pro">
            Go Pro
          </Link>
          <Link href="/" key="Hire Designers">
            Hire Designers
          </Link>
        </ul>
      </div>

      <div className="flexCenter gap-[17px]">
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
          <>
            {providers &&
              Object.values(providers).map((provider: any, index) => (
                <CustomButton
                  key={index}
                  title="Sign in"
                  handleClick={() => signIn(provider?.id)}
                />
              ))}
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
