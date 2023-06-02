const fetchHeader = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "x-api-key": `$process.env.GRAFBASE_API_KEY`,
};

export async function getAllProjects() {
  const query = `
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

  const encodedQuery = encodeURIComponent(query);
  const url = `${process.env.GRAFBASE_API_URL}?query=${encodedQuery}`;

  const res = await fetch(url, {
    method: "GET",
    headers: fetchHeader,
  });

  const { data } = await res.json();

  return data;
}

export async function getProjectsById(id: string) {
  const query = `
		query getProjectById($id: ID!) {
			project(by: { id: $id }) {
				id
				title
				description
				image
				liveSiteUrl
				githubUrl
				upvote
				createdBy
			}
		}
	`;

  const variables = {
    id: id,
  };

  const encodedQuery = encodeURIComponent(query);
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
  const query = `
		query getProjectsByUser($createdBy: String!) {
			projectSearch(first: 3, filter: { createdBy: { eq: $createdBy } }) {
				edges {
					node {
						id
						title
						description
						githubUrl
						liveSiteUrl
						image
						upvote
						createdBy
						updatedAt
					}
				}
			}
		}
	`;

  const variables = {
    createdBy: createdBy,
  };

  const encodedQuery = encodeURIComponent(query);
  const encodedVariables = encodeURIComponent(JSON.stringify(variables));
  const url = `${process.env.GRAFBASE_API_URL}?query=${encodedQuery}&variables=${encodedVariables}`;

  const res = await fetch(url, {
    method: "GET",
    headers: fetchHeader,
  });

  const { data } = await res.json();

  return data;
}

export async function FilterProjects(pageNum: number, search: string) {
  const query = `
		query filterProjects($pageNum: Int!, $search: String) {
			projectSearch(first: $pageNum, query: $search) {
				edges {
					node {
						id
						title
						description
						githubUrl
						liveSiteUrl
						image
						upvote
						createdBy
						updatedAt
					}
				}
			}
		}
	`;

  const variables = {
    search: search,
    pageNum: pageNum,
  };

  const encodedQuery = encodeURIComponent(query);
  const encodedVariables = encodeURIComponent(JSON.stringify(variables));
  const url = `${process.env.GRAFBASE_API_URL}?query=${encodedQuery}&variables=${encodedVariables}`;

  const res = await fetch(url, {
    method: "GET",
    headers: fetchHeader,
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
  createdBy: string
) {
  const res = await fetch(`${process.env.GRAFBASE_API_URL}`, {
    method: "POST",
    headers: fetchHeader,
    body: JSON.stringify({
      query: `
				mutation AddProject(
					$title: String!
					$description: String!
					$image: String!
					$liveSiteUrl: String!
					$githubUrl: String
					$createdBy: String!
				) {
					projectCreate(
						input: {
							title: $title
							description: $description
							image: $image
							liveSiteUrl: $liveSiteUrl
							githubUrl: $githubUrl
							createdBy: $createdBy
						}
					) {
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
			`,
      variables: {
        title: title,
        description: description,
        image: image,
        liveSiteUrl: liveSiteUrl,
        githubUrl: githubUrl,
        createdBy: createdBy,
      },
    }),
  });

  const { data } = await res.json();

  return data;
}

export async function EditProject(
  title: string,
  description: string,
  image: string,
  liveSiteUrl: string,
  githubUrl: string,
  createdBy: string
) {
  const res = await fetch(`${process.env.GRAFBASE_API_URL}`, {
    method: "POST",
    headers: fetchHeader,
    body: JSON.stringify({
      query: `
				mutation EditProject(
					$id: String!
					$title: String!
					$description: String!
					$image: String!
					$liveSiteUrl: String!
					$githubUrl: String
					$createdBy: String!
				) {
					projectUpdate(
						by: { id: $id }
						input: {
							title: $title
							description: $description
							image: $image
							liveSiteUrl: $liveSiteUrl
							githubUrl: $githubUrl
							createdBy: $createdBy
						}
					) {
						project {
							createdAt
							description
							githubUrl
							id
							image
							liveSiteUrl
							title
							updatedAt
							upvote
							createdBy
						}
					}
				}
			`,
      variables: {
        title: title,
        description: description,
        image: image,
        liveSiteUrl: liveSiteUrl,
        githubUrl: githubUrl,
        createdBy: createdBy,
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
      query: `
				mutation DeleteProjectById($id: ID!) {
					projectDelete(by: { id: $id }) {
						deletedId
					}
				}
			`,
      variables: {
        id: id,
      },
    }),
  });

  const { data } = await res.json();

  return data;
}