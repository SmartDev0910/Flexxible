"use client";

import { useEffect, useState } from "react";
import PostCard from "@/components/PostCard";
import { useSearchParams } from "next/navigation";

import { INodeParam } from "@/utils/type";
import { FilterProjects } from "@/graphql/server";

const ProjectList = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("category");

  const [data, setProject] = useState([]);

  useEffect(() => {
    async function updateData() {
      window.document.body.style.overflowY = "auto";

      const result = await FilterProjects(100, null, search || null);
      setProject(result?.projectSearch?.edges);
    }
    updateData();
  }, [search]);

  return (
    <section className="flexStart flex-wrap mt-[66px] w-full">
      {data?.map(({ node }: INodeParam, index: number) => (
        <PostCard
          key={`${node?.id}-${index}`}
          id={node?.id}
          image={node?.image || ""}
        />
      ))}
    </section>
  );
};

export default ProjectList;
