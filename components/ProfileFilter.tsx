"use client";

import Image from "next/image";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { updateSearchParams } from "@/utils";
import { UserFilters } from "@/constants/userFilters";

const HomeFilter = () => {
  const router = useRouter();
  const [filter, setFilter] = useState("Work");

  useEffect(() => {
    const newPathName = updateSearchParams("tab", filter);
    router.push(newPathName);
  }, [filter]);

  return (
    <div className="flexBetween max-md:flex-col pb-7 w-full text-[16px] leading-[20px] font-medium border-b-[1px] border-[#E2E5F1]">
      <ul className="flex md:gap-x-[30px] gap-x-5 overflow-auto">
        {UserFilters.map((userFilter) => (
          <button
            key={userFilter}
            type="button"
            onClick={() => setFilter(userFilter)}
            className={`${filter !== userFilter && "opacity-60"}`}
          >
            {userFilter}
          </button>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => console.log("Following")}
        className="flexCenter gap-[11px] text-small py-3 px-[14px] mt-4 opacity-60 border-[1px] border-[#E4E4E4] rounded-lg max-md:w-full"
      >
        Recent Shorts
        <Image
          src="/assets/arrow-down.svg"
          width={10}
          height={5}
          alt="arrow down"
        />
      </button>
    </div>
  );
};

export default HomeFilter;
