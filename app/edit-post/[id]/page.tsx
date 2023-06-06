import ProjectEdit from "@/components/ProjectEdit";
import { getProjectsById } from "@/graphql/server";
import { getCurrentUser } from "@/utils/session";

const EditPost = async ({ params: { id } }: { params: { id: string } }) => {
  const result = await getProjectsById(id);
  const session = await getCurrentUser();
  return <ProjectEdit project={result} session={session} />;
};

export default EditPost;
