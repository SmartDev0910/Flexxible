"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { HomeFilters } from "@/constants/filters";
import { updateSearchParams } from "@/utils";
import SearchBar from "./SearchBar";

const HomeFilter = () => {
  const router = useRouter();
  const [tag, setTag] = useState("All");

  useEffect(() => {
    if (tag === "All") {
      router.push("/");
    } else {
      const newPathName = updateSearchParams("category", tag);
      router.push(newPathName);
    }
  }, [tag]);

  return (
    <div className="flexBetween w-full gap-5 flex-wrap">
      <ul className="flex gap-[7px] overflow-auto">
        {HomeFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setTag(filter)}
            className={`${
              tag === filter ? "bg-[#F3F3F4] font-medium" : "font-normal"
            } px-[14px] py-[12px] rounded-lg`}
          >
            {filter}
          </button>
        ))}
      </ul>

      <SearchBar />
    </div>
  );
};

export default HomeFilter;
