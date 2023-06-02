"use client";

import { useEffect, useState, Suspense } from "react";
import HomeFilter from "@/components/HomeFilter";
import PostCard from "@/components/PostCard";
import { useSearchParams } from "next/navigation";

import { INodeParam } from "@/utils/type";
import { getAllProjects, FilterProjects } from "@/graphql/server";

const Home = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("category");

  const [project, setProject] = useState([]);

  useEffect(() => {
    window.document.body.style.overflowY = "auto";
    async function fetchData() {
      const result = await getAllProjects();
      setProject(result?.projectCollection?.edges);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function updateData() {
      const result = await FilterProjects(6, null, search || "");
      setProject(result?.projectSearch?.edges);
    }
    updateData();
  }, [search]);

  return (
    <section className="flexStart flex-col paddings">
      <HomeFilter />
      <section className="flexStart flex-wrap mt-[66px] w-full">
        {project?.map(({ node }: INodeParam, index: number) => (
          <PostCard key={`${node?.id}-${index}`} id={node?.id} />
        ))}
      </section>
    </section>
  );
};

export default Home;
