const fetchHeader = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "x-api-key": `${process.env.GRAFBASE_API_KEY}`,
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
						likes
						category
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
				likes
				createdBy
				category
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
						likes
						createdBy
						category
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

export async function FilterProjects(
  pageNum: number,
  query: string | null,
  category: string
) {
  const gquery = `
		query filterProjects($pageNum: Int!, $query: String, $category: String) {
			projectSearch(first: $pageNum, query: $query, filter: { category: { eq: $category } }) {
				edges {
					node {
						id
						title
						description
						githubUrl
						liveSiteUrl
						image
						likes
						createdBy
						category
						updatedAt
					}
				}
			}
		}
	`;

  const variables = {
    pageNum: pageNum,
    query: query,
    category: category,
  };

  const encodedQuery = encodeURIComponent(gquery);
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
      query: `
				mutation AddProject(
					$title: String!
					$description: String!
					$image: String!
					$liveSiteUrl: String!
					$githubUrl: String
					$createdBy: String!
					$category: String!
				) {
					projectCreate(
						input: {
							title: $title
							description: $description
							image: $image
							liveSiteUrl: $liveSiteUrl
							githubUrl: $githubUrl
							createdBy: $createdBy
							category: $category
						}
					) {
						project {
							title
							description
							image
							liveSiteUrl
							githubUrl
							createdBy
							category
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
      query: `
				mutation EditProject(
					$id: ID!
					$title: String!
					$description: String!
					$image: String!
					$liveSiteUrl: String!
					$githubUrl: String
					$createdBy: String!
					$category: String!
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
							category: $category
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
							createdBy
							category
						}
					}
				}
			`,
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

export async function LikeProject(id: string, likes: number) {
  const res = await fetch(`${process.env.GRAFBASE_API_URL}`, {
    method: "POST",
    headers: fetchHeader,
    body: JSON.stringify({
      query: `
				  mutation LikeProject($id: ID!, $likes: Int) {
					  projectUpdate(by: { id: $id } input {likes: {set: $likes}}) {
						id  
						likes
					  }
				  }
			  `,
      variables: {
        id: id,
        likes: likes,
      },
    }),
  });

  const { data } = await res.json();

  return data;
}
