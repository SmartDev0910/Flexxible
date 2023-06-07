import HomeFilter from "@/components/HomeFilter";
import { INodeParam } from "@/utils/type";
import { FilterProjects } from "@/graphql/server";
import PostCard from "@/components/PostCard";

const Home = async () => {
  const result = await FilterProjects(100, null, "Web Design");
  return (
    <section className="flexStart flex-col paddings">
      <HomeFilter />
      <section className="flexStart flex-wrap mt-[66px] w-full">
        {result?.projectSearch?.edges?.map(
          ({ node }: INodeParam, index: number) => (
            <PostCard
              key={`${node?.id}-${index}`}
              id={node?.id}
              image={node?.image || ""}
            />
          )
        )}
      </section>
    </section>
  );
};

export default Home;
