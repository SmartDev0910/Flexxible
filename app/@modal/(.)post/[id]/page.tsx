import ProjectView from "@/components/ProjectView";
import { getProjectsById } from "@/graphql/server";
import { getCurrentUser } from "@/utils/session";

const Project = async ({ params: { id } }: { params: { id: string } }) => {
  const result = await getProjectsById(id);
  const session = await getCurrentUser();

  return <ProjectView project={result} session={session} />;
};

export default Project;
