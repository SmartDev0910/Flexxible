import ProjectView from "@/components/ProjectView";
import {
  getProjectsById,
  getProjectsByUser,
  getUserByEmail,
} from "@/graphql/server";
import { getCurrentUser } from "@/utils/session";

const Project = async ({ params: { id } }: { params: { id: string } }) => {
  const result = await getProjectsById(id);
  const session = await getCurrentUser();
  const user = await getUserByEmail(result?.project?.createdBy);
  const resultByUser = await getProjectsByUser(result?.project?.createdBy);

  return (
    <ProjectView
      user={user.userSearch?.edges[0]?.node}
      project={result}
      session={session}
      relatedProjects={resultByUser}
    />
  );
};

export default Project;
