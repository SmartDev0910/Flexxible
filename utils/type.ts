export interface INodeItems {
    id: string;
    title?: string | null;
    description?: string | null;
    image?: string | null;
    liveSiteUrl?: string | null;
    githubUrl?: string | null;
    upvote?: boolean | false;
  }
  
export  interface INodeParam {
    node: INodeItems;
}