export interface INodeItems {
  id: string;
  title?: string | null;
  description?: string | null;
  image?: string | null;
  liveSiteUrl?: string | null;
  githubUrl?: string | null;
  upvote?: boolean | false;
  createdBy?: string;
}

export interface INodeParam {
  node: INodeItems;
}

export interface FilterProps {
  category?: string | null;
  search?: string | null;
  tab?: string | null;
}

export interface HomeProps {
  searchParams: FilterProps;
  result: any;
}

export interface UserProps {
  email: string | undefined;
  name: string | undefined;
  image: string | undefined;
}

export interface ProfileProps {
  searchParams: FilterProps;
}
