"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

type Props = {
  id: string;
  image: string;
};

const PostCard: FC<Props> = ({ id, image }) => {
  const [likes, setLikes] = useState<number>(0);
  const [copied, setCopied] = useState<string>("");
  const { data: session } = useSession();

  // const handleShare = () => {
  //   setCopied(slug);
  //   navigator.clipboard.writeText(slug);
  //   setTimeout(() => setCopied(""), 3000);
  // };

  return (
    <div className="flexCenter flex-col lg:basis-1/3 sm:basis-1/2 basis-full rounded-[14px]">
      <Link href={`post/${id}`} className="flexCenter relative">
        {image.startsWith("http://") ||
        image.startsWith("https://") ||
        image === "" ? (
          <Image
            src={`${image}`}
            width={414}
            height={314}
            className="w-full h-auto"
            alt="post image"
          />
        ) : (
          ""
        )}

        <button
          type="button"
          className="flexCenter gap-[8px] absolute top-0 right-0 font-semibold text-sm leading-[17px] text-white p-[16px]"
          onClick={() => console.log("copy")}
        >
          <Image src="/assets/share.svg" width={13} height={14} alt="share" />
          10
        </button>
      </Link>

      <div className="flexBetween w-full px-[5px] mt-[10px] font-semibold text-sm leading-[17px]">
        <div className="flexCenter gap-[7px]">
          <Image
            src={session?.user?.image!}
            width={24}
            height={24}
            className="rounded-full"
            alt="profile image"
          />
          <p>{session?.user?.name}</p>
          <p className="text-[8px] leading-[10px] font-semibold text-white bg-[#D9D9D9] px-[4px] py-[2px]">
            TEAM
          </p>
        </div>

        <div className="flexCenter gap-[11px]">
          <div className="flexCenter gap-[7px]">
            <Image
              src="/assets/hearth.svg"
              width={13}
              height={12}
              alt="hearth"
            />
            124
          </div>
          <div className="flexCenter gap-[7px]">
            <Image src="/assets/eye.svg" width={12} height={9} alt="eye" />
            1.4K
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
