"use client";

import { useEffect, useState } from "react";
import HomeFilter from "@/components/HomeFilter";
import PostCard from "@/components/PostCard";

import { INodeParam } from "@/utils/type";
import { getAllProjects } from "@/graphql/server";

const Home = () => {
  const [project, setProject] = useState({
    projectCollection: { edges: [] },
  });
  useEffect(() => {
    window.document.body.style.overflowY = "auto";
    async function fetchData() {
      const result = await getAllProjects();
      setProject(result);
    }
    fetchData();
  }, []);

  return (
    <section className="flexStart flex-col paddings">
      <HomeFilter />
      <section className="flexStart flex-wrap mt-[66px] w-full">
        {project?.projectCollection?.edges?.map(
          ({ node }: INodeParam, index: number) => (
            <PostCard key={`${node?.id}-${index}`} id={node?.id} />
          )
        )}
      </section>
    </section>
  );
};

export default Home;
