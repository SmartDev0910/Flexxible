import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
  query getProjects {
    projectCollection(first: 10) {
      edges {
        node {
          id
          title
          description
          image
          liveSiteUrl
          githubUrl
          upvote
        }
      }
    }
  }
`;

export const GET_PROJECT_BY_ID = gql`
  query getProjectById($id: ID!) {
    project(by: { id: $id }) {
      id
      title
      description
      image
      liveSiteUrl
      githubUrl
      upvote
    }
  }
`;

export const GET_PROJECTS_BY_USER = gql`
  query getProjectsByUser($createdBy: String!) {
    project(where: {createdBy: {_eq: $createdBy}}) {
      edges {
        node {
          id
          title
          description
          image
          liveSiteUrl
          githubUrl
          upvote
        }
      }
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation AddProject($title: String!, $description: String!, $image: String!, $liveSiteUrl: String!, $githubUrl: String, $createdBy: String!) {
    projectCreate(input: { title: $title, description: $description, image: $image, liveSiteUrl: $liveSiteUrl, githubUrl: $githubUrl, createdBy: $createdBy }) {
      project {
        title
        description
        image
        liveSiteUrl
        githubUrl
        createdBy
      }
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation DeleteProjectById($id: ID!) {
    projectDelete(by: { id: $id }) {
      deletedId
    }
  }
`;
