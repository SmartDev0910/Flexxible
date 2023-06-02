'use client';

import { useState } from 'react';
import Image from 'next/image';
import { HomeFilters } from '@/constants/filters';

const HomeFilter = () => {
  const [tag, setTag] = useState('Discover');

  return (
    <div className="flexBetween w-full gap-5 flex-wrap">
      <button type="button" onClick={() => console.log('Following')} className="flexCenter gap-[20px] text-small py-3 px-[14px] border-[1px] border-[#E4E4E4] rounded-lg max-lg:w-full">
        Following
        <Image
          src="/assets/arrow-down.svg"
          width={10}
          height={5}
          alt="arrow down"
        />
      </button>

      <ul className="flex gap-[7px] overflow-auto">
        {HomeFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setTag(filter)}
            className={`${tag === filter ? 'bg-[#F3F3F4] font-medium' : 'font-normal'} px-[14px] py-[12px] rounded-lg`}
          >
            {filter}
          </button>
        ))}
      </ul>

      <button type="button" onClick={() => console.log('Filters')} className="flexCenter gap-[20px] text-small py-3 px-[14px] border-[1px] border-[#E4E4E4] rounded-lg max-lg:w-full">
        <Image
          src="/assets/filters.svg"
          width={10}
          height={5}
          alt="filters"
        />
        Filters
      </button>
    </div>
  );
};

export default HomeFilter;
