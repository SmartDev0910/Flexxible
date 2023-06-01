'use client';

import { useSession } from 'next-auth/react';
import { useEffect, SyntheticEvent } from 'react';

import HomeFilter from '@/components/HomeFilter';
import PostCard from '@/components/PostCard';
import { useQuery } from '@apollo/client';

import { GET_PROJECTS } from '@/graphql/query';
import { INodeParam } from '@/utils/type';

const Home = () => {
  const { data: session } = useSession();
  const { loading, error, data } = useQuery(GET_PROJECTS);

  useEffect(() => {
    console.log(session?.user?.name);
  }, []);

  return (
    <section className="flexStart flex-col paddings">
        <HomeFilter />
        <section className="flexStart flex-wrap mt-[66px] w-full">
          {
            data?.projectCollection?.edges?.map(({ node }: INodeParam, index: number) => (
              <PostCard key={`${node?.id}-${index}`} id={node?.id}/>
            ))
          }
        </section>
      </section>
  );
};

export default Home;
