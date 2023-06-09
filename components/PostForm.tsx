"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, SyntheticEvent, useState, FC } from "react";
import { addProject } from "@/utils/actions";
import { UploadImage } from "@/utils/upload-image";
import CategoryModal from "./CategoryModal";
import CustomButton from "./CustomButton";
import FormComponent from "./FormComponent";

type Props = {
  session: any;
};

const PostForm: FC<Props> = ({ session }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [githubUrl, setGithubUrl] = useState<string>("");
  const [poster, setPoster] = useState<string | undefined>(undefined);
  const [category, setCategory] = useState<string>("Web Design");
  const [submitting, setSubmitting] = useState<boolean>(false);

  const router = useRouter();

  const saveProject = async (event: SyntheticEvent) => {
    event.preventDefault();
    const email = session?.email || "";

    try {
      setSubmitting(true);
      const image = await UploadImage(poster!);
      await addProject(
        title,
        description,
        image.url,
        url,
        githubUrl,
        email,
        category
      );

      router.push("/");
    } catch (err) {
      alert(err);
    } finally {
      setSubmitting(false);
    }
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

      fileReader.onload = (e: any) => {
        setPoster(e.target?.result);
      };

      fileReader.readAsDataURL(inputElement.files[0]);
    }
  };

  return (
    <form className="flexStart flex-col w-full lg:pt-[90px] pt-12 gap-10 text-lg">
      <div className="flexStart w-full lg:min-h-[400px] min-h-[200px] relative">
        <label
          htmlFor="poster"
          className="flexCenter z-10 text-center w-full h-full p-20 text-[#3D3D4E] border-2 border-[#D9D9D9] border-dashed"
        >
          Choose a poster for your project
        </label>
        <input
          id="poster"
          type="file"
          required
          className="absolute z-30 w-full opacity-0 h-full cursor-pointer"
          onChange={(e) => addPoster(e)}
        />
        {poster && (
          <Image src={poster} className="object-cover z-20" fill alt="poster" />
        )}
      </div>

      <FormComponent title="Title" state={title} setState={setTitle} />

      <FormComponent
        title="Description"
        state={description}
        setState={setDescription}
      />

      <FormComponent title="Website URL" state={url} setState={setUrl} />

      <FormComponent
        title="GitHub URL"
        state={githubUrl}
        setState={setGithubUrl}
      />

      <CategoryModal category={category} setCategory={setCategory} />

      <div className="flexStart w-full">
        <CustomButton
          title={submitting ? "Creating" : "Create"}
          type="submit"
          leftIcon={submitting ? "" : "/assets/plus.svg"}
          submitting={submitting}
          handleClick={saveProject}
        />
      </div>
    </form>
  );
};

export default PostForm;
