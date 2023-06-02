'use client';

import { Combobox, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment, useState } from 'react';

const tags = [
  { id: 1, name: 'Animation' },
  { id: 2, name: 'Web Design' },
  { id: 3, name: 'Animation' },
  { id: 4, name: 'Illustration' },
  { id: 5, name: 'Print Design' },
  { id: 6, name: 'Branding' },
];

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState('');

  const filteredTags = search === ''
    ? tags
    : tags.filter((person) => person.name
      .toLowerCase()
      .replace(/\s+/g, '')
      .includes(search.toLowerCase().replace(/\s+/g, '')));

  return (
    <form className="flexCenter max-sm:hidden max-w-[277px] relative">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left outline-none text-small">
            <Combobox.Input
              className="w-full border-none py-[14px] pl-[15px] pr-10 text-sm leading-5 text-gray-900 outline-0 bg-[#F1F4F5]"
              displayValue={(tag) => tag.name}
              onChange={(event) => setSearch(event.target.value)}
            />
            <Combobox.Button className={`${search !== '' || selected !== '' ? 'hidden' : 'absolute'} inset-y-0 left-0 flex gap-[8px] items-center pl-[15px]`}>
              <Image
                src="/assets/magnifying-glass.svg"
                width={14}
                height={14}
                alt="magnifying glass"
              />
              Search
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setSearch('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base outline-none sm:text-sm">
              {filteredTags.length === 0 && search !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredTags.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-primary-purple text-white' : 'text-gray-900'}`}
                    value={person}
                  >
                    {({ selected }) => (
                      <span
                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                      >
                        {person.name}
                      </span>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </form>
  );
};

export default SearchBar;
