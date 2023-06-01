'use client';

import Image from 'next/image';
import { useState } from 'react';

const SearchBar = () => {
  const [search, setSearch] = useState<string>('');

  return (
    <form className="flexCenter max-sm:hidden max-w-[277px] relative">
      {search === '' && (
        <label htmlFor="search-bar" className="flexStart gap-[12px] absolute left-4 text-small">
          <Image
            src="/assets/magnifying-glass.svg"
            width={14}
            height={14}
            alt="magnifying glass"
          />
          Search
        </label>
      )}
      <input
        id="search-bar"
        type="text"
        value={search}
        className="bg-[#F1F4F5] outline-0 h-[45px] rounded-xl px-5"
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
