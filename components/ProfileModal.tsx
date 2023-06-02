import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const ProfileModal = () => {
  const { data: session } = useSession();

  return (
    <div className="flexStart flex-col relative">
      <Menu as="div" className="self-start relative inline-block text-left">
        <div>
          <Menu.Button className="flexCenter w-full justify-center outline-none">
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
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="flexStart flex-col absolute right-1/2 translate-x-1/2 mt-2 p-2 w-max origin-top-right divide-y divide-gray-100 rounded-md bg-[#F1F4F5] outline-none overflow-auto">
            <div className="px-1 py-1">
              <Menu.Item>
                <Link
                  href="/profile"
                  className="w-full items-center rounded-md px-2 py-2 text-[17px] leading-[20px]"
                >
                  Profile
                </Link>
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                <button
                  type="button"
                  className="w-full items-center rounded-md px-3 py-3 text-[17px] leading-[20px] bg-primary-purple text-white"
                  onClick={() => signOut()}
                >
                  Sign out
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default ProfileModal;
