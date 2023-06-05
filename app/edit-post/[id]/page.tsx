import ProjectEdit from "@/components/ProjectEdit";
import { getProjectsById } from "@/graphql/server";

const EditPost = async ({ params: { id } }: { params: { id: string } }) => {
  const result = await getProjectsById(id);
  return <ProjectEdit project={result} />;
};

export default EditPost;
