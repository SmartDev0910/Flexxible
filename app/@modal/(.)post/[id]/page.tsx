"use client";

import Modal from "@/components/Modal";
import PostCard from "@/components/PostCard";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { INodeParam } from "@/utils/type";
import {
  getProjectsById,
  getProjectsByUser,
  DeleteProject,
} from "@/graphql/server";

const Project = ({ params: { id } }: { params: { id: string } }) => {
  const [liked, setLiked] = useState(false);
  const [project, setProject] = useState({
    project: { title: "", createdBy: "", description: "" },
  });
  const [projectsByUser, setProjectsByUser] = useState({
    projectSearch: { edges: [] },
  });

  useEffect(() => {
    async function fetchData() {
      const result = await getProjectsById(id);
      const createdBy = result?.project?.createdBy;
      const resultByUser = await getProjectsByUser(createdBy);
      setProject(result);
      setProjectsByUser(resultByUser);
    }
    fetchData();
  }, []);

  const deleteProject = async () => {
    const res = await DeleteProject(id);
    window.location.href = "/";
  };

  return (
    <Modal>
      <section className="fixed flex gap-[15px] flex-col right-10 top-22">
        <Image src="/assets/profile.png" width={50} height={50} alt="profile" />
        <Link
          href={""}
          className="flexCenter p-[14px] text-[#3D3D4E] bg-[#E2E5F1] rounded-xl text-sm leading-[17px] font-medium w-full"
          onClick={() => (window.location.href = "/edit-post/" + id)}
        >
          <Image
            src="/assets/pencile.svg"
            className="min-w-[15px]"
            width={14}
            height={14}
            alt="pencile"
          />
        </Link>

        <button
          type="button"
          className="flexCenter p-[14px] text-[#3D3D4E] bg-primary-purple rounded-xl text-sm leading-[17px] font-medium w-full"
          onClick={deleteProject}
        >
          <Image
            src="/assets/trash.svg"
            className="min-w-[15px]"
            width={14}
            height={14}
            alt="trash"
          />
        </button>
      </section>

      <section className="flexCenter max-lg:flex-col gap-x-[299px] gap-y-[30px] max-lg:w-full">
        <div className="flexStart gap-[20px] w-full">
          <Image
            src="/assets/profile.png"
            width={50}
            height={50}
            alt="profile"
            className="rounded-full"
          />
          <div className="flexStart flex-col gap-y-[10px]">
            <p className="text-[18px] leading-[22px] font-semibold">
              {project?.project?.title}
            </p>
            <div className="flex text-[14px] leading-[17px] font-normal gap-[9px] w-full">
              <Link href="/profile/id">
                {project?.project?.createdBy}{" "}
                <span className="text-[#4d4a4a]">for</span>{" "}
                {project?.project?.createdBy}
              </Link>
              <Image src="/assets/dot.svg" width={4} height={4} alt="dot" />
              <button type="button">Follow</button>
              <Image src="/assets/dot.svg" width={4} height={4} alt="dot" />
              <button type="button" className="text-primary-purple">
                Hire Us
              </button>
            </div>
          </div>
        </div>

        <div className="flexCenter max-md:flex-col gap-[18px] lg:w-fit w-full">
          <button
            type="button"
            className="flexCenter gap-[7px] py-[16px] px-[17px] text-[#3D3D4E] bg-[#E2E5F1] rounded-xl text-sm leading-[17px] font-medium w-full"
            onClick={() => console.log("Save")}
          >
            <Image
              src="/assets/save.svg"
              className="min-w-[14px] min-h-[14px]"
              width={14}
              height={14}
              alt="save"
            />
            Save
          </button>

          <button
            type="button"
            className={`flexCenter gap-[7px] py-[16px] px-[17px] ${
              liked
                ? "text-primary-purple bg-white border-[1px] border-primary-purple"
                : "text-white bg-primary-purple"
            } rounded-xl text-sm leading-[17px] font-medium w-full`}
            onClick={() => setLiked(!liked)}
          >
            <Image
              src={`/assets/hearth-${liked ? "purple" : "white"}.svg`}
              className="min-w-[14px] min-h-[14px]"
              width={14}
              height={14}
              alt="like"
            />
            Like
          </button>
        </div>
      </section>

      <section className="mt-[52px]">
        <Image
          src="/assets/post1.png"
          className="object-cover"
          width={1064}
          height={798}
          alt="poster"
        />
      </section>

      <section className="flexCenter flex-col mt-[93px]">
        <h3 className="md:text-[47px] text-[30px] md:leading-[61px] leading-[35px] font-extrabold text-center">
          {project?.project?.title}
        </h3>
        <p className="max-w-[750px] text-[21px] font-normal leading-[36px] text-center mt-[46px]">
          {project?.project?.description}
        </p>
      </section>

      <section className="flexCenter w-full gap-[30px] mt-[116px]">
        <span className="w-full h-[2px] bg-[#d7d7d7]" />
        <Link href="/profile/id" className="min-w-[82px] h-[82px]">
          <Image
            src="/assets/profile.png"
            className="rounded-full"
            width={82}
            height={82}
            alt="profile image"
          />
        </Link>
        <span className="w-full h-[2px] bg-[#d7d7d7]" />
      </section>

      <section className="flex flex-col mt-[135px]">
        <div className="flexBetween">
          <p className="text-[21px] leading-[26px] font-semibold">
            More by {project?.project?.createdBy}
          </p>
          <Link
            href="/"
            className="text-primary-purple text-[16px] leading-[20px] font-semibold"
          >
            View All
          </Link>
        </div>

        <div className="flexCenter max-md:flex-col gap-[19px] pt-6">
          {projectsByUser?.projectSearch?.edges?.map(
            ({ node }: INodeParam, index: number) => (
              <PostCard key={`${node?.id}-${index}`} id={node?.id} />
            )
          )}
        </div>
      </section>
    </Modal>
  );
};

export default Project;
