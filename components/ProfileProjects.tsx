import Link from 'next/link';
import Image from 'next/image';

const ProfileProjects = () => (
  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-[30px] w-full gap-[50px]">
    <Link href="post/1" className="relative w-full h-full">
      <Image
        src="/assets/post1.png"
        className="flex object-cover"
        width={468}
        height={374}
        alt="project poster"
      />
    </Link>
    <Link href="post/1" className="relative">
      <Image
        src="/assets/post1.png"
        className="flex object-cover"
        width={468}
        height={374}
        alt="project poster"
      />
    </Link>
    <Link href="post/1" className="relative">
      <Image
        src="/assets/post1.png"
        className="flex object-cover"
        width={468}
        height={374}
        alt="project poster"
      />
    </Link>
  </div>
);

export default ProfileProjects;
