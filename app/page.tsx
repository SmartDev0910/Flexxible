import HomeFilter from "@/components/HomeFilter";
import { INodeParam, HomeProps } from "@/utils/type";
import { FilterProjects } from "@/graphql/server";
import PostCard from "@/components/PostCard";

const Home = async ({ searchParams }: HomeProps) => {
  let category = searchParams.category || "Web Design";
  let search = searchParams.search || null;
  const result = await FilterProjects(100, search, category);
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
