import { FC } from "react";
import { INodeParam } from "@/utils/type";
import PostCard from "@/components/PostCard";

type Props = {
  projects: any;
  user: any;
};

const ProfileProjects: FC<Props> = ({ projects, user }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-[30px] w-full gap-[50px]">
      {projects?.projectSearch?.edges?.map(
        ({ node }: INodeParam, index: number) => (
          <PostCard
            key={`${node?.id}-${index}`}
            id={node?.id}
            image={node?.image || ""}
            title={node?.title || ""}
            user={user}
          />
        )
      )}
    </div>
  );
};

export default ProfileProjects;
