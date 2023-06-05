import HomeFilter from "@/components/HomeFilter";
import ProjectList from "@/components/ProjectList";
import { getAllProjects } from "@/graphql/server";

const Home = async () => {
  const result = await getAllProjects();
  return (
    <section className="flexStart flex-col paddings">
      <HomeFilter />
      <ProjectList project={result?.projectCollection?.edges} />
    </section>
  );
};

export default Home;
