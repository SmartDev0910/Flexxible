export const GET_PROJECT_BY_ID = `query getProjectById($id: ID!) {
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

export const GET_PROJECT_BY_USER = `query getProjectsByUser($createdBy: String!) {
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

export const FILTER_PROJECTS = `query filterProjects($pageNum: Int!, $query: String, $category: String) {
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

export const ADD_PROJECT = `mutation AddProject(
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
`;

export const EDIT_PROJECT = `mutation EditProject(
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
`;

export const DELETE_PROJECT = `mutation DeleteProjectById($id: ID!) {
	projectDelete(by: { id: $id }) {
		deletedId
	}
}
`;

export const LIKE_PROJECT = `mutation LikeProject($id: ID!, $likes: Int) {
	projectUpdate(by: { id: $id } input {likes: {set: $likes}}) {
	  id  
	  likes
	}
}
`;

export const GET_USER_BY_EMAIL = `query getUserByEmail($email: string!) {
	user(by: { email: $email }) {
		email
		name
		image
		description
		githubUrl
		linkedinUrl
	}
}
`;

export const ADD_USER = `mutation AddUser(
	$email: String!
	$name: String!
	$image: String!
	$description: String
	$linkedinUrl: String
	$githubUrl: String
) {
	userCreate(
		input: {
			email: $email
			name: $name
			image: $image
			description: $description
			githubUrl: $githubUrl
			linkedinUrl: $linkedinUrl
		}
	) {
		user {
			email
			name
			image
			description
			githubUrl
			linkedinUrl
		}
	}
}
`;

export const EDIT_USER = `mutation EditUser(
	$email: String!
	$name: String!
	$image: String!
	$description: String
	$linkedinUrl: String
	$githubUrl: String
) {
	userUpdate(
		by: { email: $email }
		input: {
			email: $email
			name: $name
			image: $image
			description: $description
			githubUrl: $githubUrl
			linkedinUrl: $linkedinUrl
		}
	) {
		user {
			email
			name
			image
			description
			githubUrl
			linkedinUrl
		}
	}
}
`;

export const GET_ALL_USER = `query getUsers {
    userCollection(first: 10) {
        edges {
            node {
                id
                email
                name
                image
                description
                linkedinUrl
                githubUrl
            }
        }
    }
}`;
