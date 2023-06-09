import HomeFilter from "@/components/HomeFilter";
import { INodeParam, HomeProps } from "@/utils/type";
import { FilterProjects, getUserByEmail } from "@/graphql/server";
import PostCard from "@/components/PostCard";

const Home = async ({ searchParams }: HomeProps) => {
  let category = searchParams.category || null;
  let search = searchParams.search || null;
  const result = await FilterProjects(100, search, category);
  return (
    <section className="flexStart flex-col paddings">
      <HomeFilter />
      <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[19px] gap-y-[53px] mt-[66px] md:mb-[150px] mb-[90px] w-full">
        {result?.projectSearch?.edges?.map(
          async ({ node }: INodeParam, index: number) => {
            const user = await getUserByEmail(node?.createdBy || "");
            return (
              <PostCard
                key={`${node?.id}-${index}`}
                id={node?.id}
                image={node?.image || ""}
                title={node?.title || ""}
                user={user?.data}
              />
            );
          }
        )}
      </section>
    </section>
  );
};

export default Home;
