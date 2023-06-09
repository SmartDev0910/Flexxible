import {
  GET_ALL_USER,
  GET_PROJECT_BY_USER,
  GET_PROJECT_BY_ID,
  FILTER_PROJECTS,
  ADD_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT,
  LIKE_PROJECT,
  ADD_USER,
  GET_USER_BY_EMAIL,
  EDIT_USER,
} from "./query";

const fetchHeader = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "x-api-key": `${process.env.GRAFBASE_API_KEY}`,
};

export async function getAllProjects() {
  const encodedQuery = encodeURIComponent(GET_ALL_USER);
  const url = `${process.env.GRAFBASE_API_URL}?query=${encodedQuery}`;

  const res = await fetch(url, {
    method: "GET",
    headers: fetchHeader,
  });

  const { data } = await res.json();

  return data;
}

export async function getProjectsById(id: string) {
  const variables = {
    id: id,
  };

  const encodedQuery = encodeURIComponent(GET_PROJECT_BY_ID);
  const encodedVariables = encodeURIComponent(JSON.stringify(variables));
  const url = `${process.env.GRAFBASE_API_URL}?query=${encodedQuery}&variables=${encodedVariables}`;

  const res = await fetch(url, {
    method: "GET",
    headers: fetchHeader,
  });

  const { data } = await res.json();

  return data;
}

export async function getProjectsByUser(createdBy: string) {
  const variables = {
    createdBy: createdBy,
  };

  const encodedQuery = encodeURIComponent(GET_PROJECT_BY_USER);
  const encodedVariables = encodeURIComponent(JSON.stringify(variables));
  const url = `${process.env.GRAFBASE_API_URL}?query=${encodedQuery}&variables=${encodedVariables}`;

  const res = await fetch(url, {
    method: "GET",
    headers: fetchHeader,
  });

  const { data } = await res.json();

  return data;
}

export async function FilterProjects(
  pageNum: number,
  query: string | null,
  category: string | null
) {
  const variables = {
    pageNum: pageNum,
    query: query,
    category: category,
  };

  const encodedQuery = encodeURIComponent(FILTER_PROJECTS);
  const encodedVariables = encodeURIComponent(JSON.stringify(variables));
  const url = `${process.env.GRAFBASE_API_URL}?query=${encodedQuery}&variables=${encodedVariables}`;

  const res = await fetch(url, {
    method: "GET",
    headers: fetchHeader,
    cache: "no-store",
  });

  const { data } = await res.json();

  return data;
}

export async function AddProject(
  title: string,
  description: string,
  image: string,
  liveSiteUrl: string,
  githubUrl: string,
  createdBy: string,
  category: string
) {
  const res = await fetch(`${process.env.GRAFBASE_API_URL}`, {
    method: "POST",
    headers: fetchHeader,
    body: JSON.stringify({
      query: ADD_PROJECT,
      variables: {
        title: title,
        description: description,
        image: image,
        liveSiteUrl: liveSiteUrl,
        githubUrl: githubUrl,
        createdBy: createdBy,
        category: category,
      },
    }),
  });

  const { data } = await res.json();

  return data;
}

export async function EditProject(
  id: string,
  title: string,
  description: string,
  image: string,
  liveSiteUrl: string,
  githubUrl: string,
  createdBy: string,
  category: string
) {
  const res = await fetch(`${process.env.GRAFBASE_API_URL}`, {
    method: "POST",
    headers: fetchHeader,
    body: JSON.stringify({
      query: EDIT_PROJECT,
      variables: {
        id: id,
        title: title,
        description: description,
        image: image,
        liveSiteUrl: liveSiteUrl,
        githubUrl: githubUrl,
        createdBy: createdBy,
        category: category,
      },
    }),
  });

  const { data } = await res.json();

  return data;
}

export async function DeleteProject(id: string) {
  const res = await fetch(`${process.env.GRAFBASE_API_URL}`, {
    method: "POST",
    headers: fetchHeader,
    body: JSON.stringify({
      query: DELETE_PROJECT,
      variables: {
        id: id,
      },
    }),
  });

  const { data } = await res.json();

  return data;
}

export async function LikeProject(id: string, likes: number) {
  const res = await fetch(`${process.env.GRAFBASE_API_URL}`, {
    method: "POST",
    headers: fetchHeader,
    body: JSON.stringify({
      query: LIKE_PROJECT,
      variables: {
        id: id,
        likes: likes,
      },
    }),
  });

  const { data } = await res.json();

  return data;
}

export async function getUserByEmail(email: string) {
  const variables = {
    email: email,
  };

  const encodedQuery = encodeURIComponent(GET_USER_BY_EMAIL);
  const encodedVariables = encodeURIComponent(JSON.stringify(variables));
  const url = `${process.env.GRAFBASE_API_URL}?query=${encodedQuery}&variables=${encodedVariables}`;

  const res = await fetch(url, {
    method: "GET",
    headers: fetchHeader,
  });

  const { data } = await res.json();
  console.log("*************************", data, email);

  return data;
}

export async function AddUser(
  email: string,
  name: string,
  image: string,
  description: string | null,
  linkedinUrl: string | null,
  githubUrl: string | null
) {
  const res = await fetch(`${process.env.GRAFBASE_API_URL}`, {
    method: "POST",
    headers: fetchHeader,
    body: JSON.stringify({
      query: ADD_USER,
      variables: {
        email: email,
        name: name,
        image: image,
        description: description,
        linkedinUrl: linkedinUrl,
        githubUrl: githubUrl,
      },
    }),
  });

  const { data } = await res.json();

  return data;
}

export async function EditUser(
  email: string,
  image: string,
  name: string,
  description: string,
  linkedinUrl: string,
  githubUrl: string
) {
  const res = await fetch(`${process.env.GRAFBASE_API_URL}`, {
    method: "POST",
    headers: fetchHeader,
    body: JSON.stringify({
      query: EDIT_USER,
      variables: {
        email: email,
        image: image,
        name: name,
        description: description,
        linkedinUrl: linkedinUrl,
        githubUrl: githubUrl,
      },
    }),
  });

  const { data } = await res.json();

  return data;
}

export async function getAllUsers() {
  const encodedQuery = encodeURIComponent(GET_ALL_USER);
  const url = `${process.env.GRAFBASE_API_URL}?query=${encodedQuery}`;

  const res = await fetch(url, {
    method: "GET",
    headers: fetchHeader,
  });

  const { data } = await res.json();

  return data;
}
