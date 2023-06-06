import HomeFilter from "@/components/HomeFilter";
import ProjectList from "@/components/ProjectList";

const Home = async () => {
  return (
    <section className="flexStart flex-col paddings">
      <HomeFilter />
      <ProjectList />
    </section>
  );
};

export default Home;
