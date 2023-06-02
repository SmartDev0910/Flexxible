import React, { Dispatch, Fragment, SetStateAction, FC } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';

import { HomeFilters } from '@/constants/filters';

type Props = {
  category: string,
  setCategory: Dispatch<SetStateAction<string>>,
}

const CategoryModal: FC<Props> = ({ category, setCategory }) => (
  <div className="flexStart flex-col w-full gap-[25px] relative">
    <label htmlFor="category" className="w-full text-[#3d3d4e]">Category</label>
    <Menu as="div" className="self-start relative inline-block text-left">
      <div>
        <Menu.Button className="flexCenter gap-[13px] w-full justify-center rounded-md bg-[#f1f4f5] p-4  text-[17px] leading-[16px] outline-none">
          {category || 'Category'}
          <Image
            src="/assets/arrow-down.svg"
            width={10}
            height={5}
            alt="arrow down"
          />
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
        <Menu.Items className="flexStart flex-col absolute right-0 mt-2 w-fit max-h-[100px] origin-top-right divide-y divide-gray-100 rounded-md bg-[#F1F4F5] outline-none overflow-auto">
          {HomeFilters.map((tag) => (
            <div className="px-1 py-1" key={tag}>
              <Menu.Item>
                <button
                  type="button"
                  value={tag}
                  className="w-full items-center rounded-md px-2 py-2 text-[17px] leading-[20px] hover:text-primary-purple"
                  onClick={(e) => setCategory(e.currentTarget.value)}
                >
                  {tag}
                </button>
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  </div>
);

export default CategoryModal;
