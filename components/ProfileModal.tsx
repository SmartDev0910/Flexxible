import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const ProfileModal = () => {
  const { data: session } = useSession();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flexStart z-10 flex-col relative">
      <Menu as="div" className="self-start relative inline-block text-left">
        {({ open }) => (
          <>
            <Menu.Button
              className="flexCenter w-full justify-center outline-none"
              onMouseEnter={() => setOpenModal(true)}
            >
              {session?.user?.image && (
                <Image
                  src={session.user.image}
                  width={45}
                  height={45}
                  className="rounded-full"
                  alt="user profile image"
                />
              )}
            </Menu.Button>

            <Transition
              show={openModal}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="flexStart flex-col absolute right-1/2 translate-x-1/2 mt-2 px-7 py-3 w-max origin-top-right divide-y divide-gray-100 rounded-md bg-white outline-gray-300 outline-1 outline overflow-auto"
                onMouseLeave={() => setOpenModal(false)}
              >
                <div className="flex flex-col items-center gap-y-4">
                  {session?.user?.image && (
                    <Image
                      src={session?.user?.image}
                      className="rounded-full"
                      width={50}
                      height={50}
                      alt="profile Image"
                    />
                  )}
                  <p className="font-semibold">{session?.user?.name}</p>
                </div>

                <div className="flex flex-col gap-2 mt-4 pt-2 items-start w-full border-t-[1px] border-gray-100">
                  <Menu.Item>
                    <Link
                      href="/profile"
                      className="w-full items-center rounded-md text-[15px] leading-[20px]"
                    >
                      Profile
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <button
                      type="button"
                      className="text-[15px] leading-[20px]"
                      onClick={() => signOut()}
                    >
                      Sign out
                    </button>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};

export default ProfileModal;
