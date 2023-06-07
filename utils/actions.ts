"use server";

import {
  AddProject,
  DeleteProject,
  EditProject,
  LikeProject,
} from "@/graphql/server";

export const deleteProject = async (id: string) => {
  await DeleteProject(id);
};

export const editProject = async (
  id: string,
  title: string,
  description: string,
  poster: string | undefined,
  url: string,
  githubUrl: string,
  username: string,
  category: string
) => {
  await EditProject(
    id,
    title,
    description,
    poster || "",
    url,
    githubUrl,
    username,
    category
  );
};

export const likeProject = async (id: string, likes: number) => {
  await LikeProject(id, likes);
};

export const addProject = async (
  title: string,
  description: string,
  poster: string,
  url: string,
  githubUrl: string,
  username: string,
  category: string
) => {
  await AddProject(
    title,
    description,
    poster,
    url,
    githubUrl,
    username,
    category
  );
};
