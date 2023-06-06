"use client";

import React, { ChangeEvent, useEffect, useState, FC } from "react";
import Image from "next/image";

import CustomButton from "@/components/CustomButton";
import CategoryModal from "@/components/CategoryModal";
import { editProject } from "@/utils/actions";

type Props = {
  project: any;
  session: any;
};

const EditPost: FC<Props> = ({ project, session }) => {
  const username = session?.name || "";
  const [state, setState] = useState({
    id: project?.project?.id || "",
    title: project?.project?.title || "",
    description: project?.project?.description || "",
    url: project?.project?.liveSiteUrl || "",
    poster: project?.project?.image || undefined,
  });
  const [category, setCategory] = useState<string>("Web Design");

  const addPoster = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const inputElement = e.target as HTMLInputElement;
    const fileReader = new FileReader();

    if (inputElement.files) {
      if (!inputElement.files[0].type.includes("image")) {
        alert("Please upload an image file!");

        return;
      }

      fileReader.onload = (event) => {
        setState({ ...state, poster: event.target!.result?.toString() });
      };
      fileReader.readAsDataURL(inputElement.files[0]);
    }
  };

  useEffect(() => {
    window.document.body.style.overflowY = "auto";
    async function fetchData() {
      setState({
        id: project?.project?.id,
        title: project?.project?.title,
        description: project?.project?.description,
        url: project?.project?.liveSiteUrl,
        poster: project?.project?.image,
      });
    }
    fetchData();
  }, []);

  return (
    <main className="flex flex-col w-full paddings">
      <h3 className="max-md:text-center w-full md:text-[47px] text-[30px] md:leading-[61px] leading-[35px] font-extrabold">
        Edit your Project
      </h3>
      <div className="flexStart flex-col w-full lg:pt-[90px] pt-12 gap-10 text-lg">
        <div className="flexStart w-full relative">
          <label
            htmlFor="poster"
            className="flexCenter text-center w-full lg:min-h-[400px] min-h-[200px] text-[#3D3D4E] border-2 border-[#D9D9D9] border-dashed"
          >
            Choose a poster for your project
          </label>
          <input
            id="poster"
            type="file"
            className="absolute z-30 w-full opacity-0 h-full cursor-pointer"
            onChange={(e) => addPoster(e)}
          />
          {state.poster?.startsWith("http://") ||
          state.poster?.startsWith("https://") ||
          state.poster === "" ? (
            <Image
              src={state.poster}
              className="object-cover"
              fill
              alt="poster"
            />
          ) : (
            ""
          )}
        </div>

        <div className="flexStart flex-col w-full gap-[25px]">
          <label htmlFor="title" className="w-full text-[#3d3d4e]">
            Title
          </label>
          <input
            type="text"
            placeholder="Flexibble - Dribble Clone"
            value={state.title}
            className="self-start w-full outline-0 bg-[#F1F4F5] rounded-xl p-[14px]"
            onChange={(e) => setState({ ...state, title: e.target.value })}
          />
        </div>
        <div className="flexStart flex-col w-full gap-[25px]">
          <label htmlFor="title" className="w-full text-[#3d3d4e]">
            Description
          </label>
          <textarea
            placeholder="A dribble clone web application made using..."
            value={state.description}
            className="self-start w-full outline-0 bg-[#F1F4F5] rounded-xl p-[14px]"
            onChange={(e) =>
              setState({ ...state, description: e.target.value })
            }
          />
        </div>

        <div className="flexStart flex-col w-full gap-[25px]">
          <label htmlFor="title" className="w-full text-[#3d3d4e]">
            WebSite URL
          </label>
          <input
            type="url"
            placeholder="https://flexibble.com"
            value={state.url}
            className="self-start w-full outline-0 bg-[#F1F4F5] rounded-xl p-[14px]"
            onChange={(e) => setState({ ...state, url: e.target.value })}
          />
        </div>

        <CategoryModal category={category} setCategory={setCategory} />

        <div className="flexStart w-full">
          <CustomButton
            title="Save & Exit"
            handleClick={async () =>
              await editProject(
                state.id,
                state.title,
                state.description,
                state.poster,
                state.url,
                "githubUrl",
                username,
                category
              )
            }
          />
        </div>
      </div>
    </main>
  );
};

export default EditPost;
