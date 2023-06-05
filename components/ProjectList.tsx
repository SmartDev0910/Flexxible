"use client";

import { useEffect, useState, FC } from "react";
import PostCard from "@/components/PostCard";
import { useSearchParams } from "next/navigation";

import { INodeParam } from "@/utils/type";
import { FilterProjects } from "@/graphql/server";

type Props = {
  project: any;
};

const ProjectList: FC<Props> = ({ project }) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("category");

  const [data, setProject] = useState([]);

  useEffect(() => {
    window.document.body.style.overflowY = "auto";
    async function fetchData() {
      setProject(project);
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
