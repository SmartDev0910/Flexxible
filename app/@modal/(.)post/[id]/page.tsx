import ProjectView from "@/components/ProjectView";
import { getProjectsById, getProjectsByUser } from "@/graphql/server";
import { getCurrentUser } from "@/utils/session";

const Project = async ({ params: { id } }: { params: { id: string } }) => {
  const result = await getProjectsById(id);
  const session = await getCurrentUser();
  const resultByUser = await getProjectsByUser(result?.project?.createdBy);

  return (
    <ProjectView
      project={result}
      session={session}
      relatedProjects={resultByUser}
    />
  );
};

export default Project;
