"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = {
  id: string;
  image: string;
  title: string;
  user: {
    email: string;
    name: string;
    image: string;
  };
};

const PostCard: FC<Props> = ({ id, image, title, user }) => {
  return (
    <div className="flexCenter flex-col min-h-full lg:basis-1/3 sm:basis-1/2 basis-full rounded-[14px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
      <Link
        href={`post/${id}`}
        className="flexCenter group relative w-full h-full max-h-[415px]"
      >
        {image.startsWith("http://") &&
        image.startsWith("https://") &&
        image === "" ? (
          ""
        ) : (
          <Image
            src={`${image}`}
            width={414}
            height={314}
            className="w-full h-full object-cover rounded-[14px]"
            alt="post image"
          />
        )}

        <button
          type="button"
          className="flexCenter gap-[8px] absolute top-0 right-0 font-semibold text-sm leading-[17px] text-white p-[16px]"
          onClick={() => console.log("copy")}
        >
          <Image src="/assets/share.svg" width={13} height={14} alt="share" />
          10
        </button>

        <div className="hidden group-hover:flex w-full h-1/3 bg-gradient-to-b from-transparent to-black/50 rounded-b-[14px] gap-[8px] absolute bottom-0 right-0 font-semibold text-lg leading-[24px] text-white p-[16px]">
          <p className="w-full self-center text-start">{title}</p>
        </div>
      </Link>

      <div className="flexBetween w-full px-[5px] mt-[10px] font-semibold text-sm leading-[17px]">
        <div className="flexCenter gap-[7px]">
          {(user?.image.startsWith("http://") ||
            user?.image.startsWith("https://")) &&
          user?.image !== "" ? (
            <Image
              src={user?.image!}
              width={24}
              height={24}
              className="rounded-full"
              alt="profile image"
            />
          ) : (
            ""
          )}

          <p>{user?.name}</p>
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
