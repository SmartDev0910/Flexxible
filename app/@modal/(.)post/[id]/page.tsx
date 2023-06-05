import ProjectView from "@/components/ProjectView";
import { getProjectsById } from "@/graphql/server";

const Project = async ({ params: { id } }: { params: { id: string } }) => {
  const result = await getProjectsById(id);
  return <ProjectView project={result} />;
};

export default Project;
