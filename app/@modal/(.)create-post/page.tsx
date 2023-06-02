"use client";

import React, { ChangeEvent, useState, SyntheticEvent } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Modal from "@/components/Modal";
import CustomButton from "@/components/CustomButton";

import { AddProject } from "@/graphql/server";

import CategoryModal from "@/components/CategoryModal";

const CreateProjectModal = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [poster, setPoster] = useState<string | undefined>(undefined);
  const [category, setCategory] = useState<string>("Web Design");
  const { data: session } = useSession();

  const saveProject = async (event: SyntheticEvent) => {
    event.preventDefault();
    const username = session?.user?.name || "";
    await AddProject(title, description, "", url, "", username, category);
    window.location.href = "/";
  };

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
        setPoster(event.target!.result?.toString());
      };
      fileReader.readAsDataURL(inputElement.files[0]);
    }
  };

  return (
    <Modal>
      <h3 className="max-md:text-center w-full md:text-[47px] text-[30px] md:leading-[61px] leading-[35px] font-extrabold">
        Create a new Project
      </h3>
      <div className="flexStart flex-col w-full lg:pt-[90px] pt-12 gap-10 text-lg">
        <div className="flexStart w-full lg:min-h-[400px] min-h-[200px] relative">
          <label
            htmlFor="poster"
            className="flexCenter text-center w-full h-full p-20 text-[#3D3D4E] border-2 border-[#D9D9D9] border-dashed"
          >
            Choose a poster for your project
          </label>
          <input
            id="poster"
            type="file"
            className="absolute z-30 w-full opacity-0 h-full cursor-pointer"
            onChange={(e) => addPoster(e)}
          />
          {poster && (
            <Image src={poster} className="object-cover" fill alt="poster" />
          )}
        </div>

        <div className="flexStart flex-col w-full gap-[25px]">
          <label htmlFor="title" className="w-full text-[#3d3d4e]">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Flexibble - Dribble Clone"
            value={title}
            className="self-start w-full outline-0 bg-[#F1F4F5] rounded-xl p-[14px]"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flexStart flex-col w-full gap-[25px]">
          <label htmlFor="title" className="w-full text-[#3d3d4e]">
            Description
          </label>
          <textarea
            placeholder="A dribble clone web application made using..."
            value={description}
            className="self-start w-full outline-0 bg-[#F1F4F5] rounded-xl p-[14px]"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flexStart flex-col w-full gap-[25px]">
          <label htmlFor="title" className="w-full text-[#3d3d4e]">
            WebSite URL
          </label>
          <input
            type="url"
            id="website"
            placeholder="https://flexibble.com"
            value={url}
            className="self-start w-full outline-0 bg-[#F1F4F5] rounded-xl p-[14px]"
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        <CategoryModal category={category} setCategory={setCategory} />

        <div className="flexStart w-full">
          <CustomButton
            title="Create"
            leftIcon="/assets/plus.svg"
            handleClick={async (e) => await saveProject(e)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default CreateProjectModal;
