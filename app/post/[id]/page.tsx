"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/components/Modal";
import PostCard from "@/components/PostCard";

const Project = ({ params: { id } }: { params: { id: string } }) => {
  const [liked, setLiked] = useState(false);

  return (
    <Modal>
      <section className="fixed flex gap-[15px] flex-col right-10 top-22">
        <Image src="/assets/profile.png" width={50} height={50} alt="profile" />
        <Link
          href={`/edit-post/${id}`}
          className="flexCenter p-[14px] text-[#3D3D4E] bg-[#E2E5F1] rounded-xl text-sm leading-[17px] font-medium w-full"
          onClick={() => console.log("Edit")}
        >
          <Image
            src="/assets/pencile.svg"
            className="min-w-[15px]"
            width={14}
            height={14}
            alt="save"
          />
        </Link>

        <button
          type="button"
          className="flexCenter p-[14px] text-[#3D3D4E] bg-primary-purple rounded-xl text-sm leading-[17px] font-medium w-full"
          onClick={() => console.log("Delete")}
        >
          <Image
            src="/assets/trash.svg"
            className="min-w-[15px]"
            width={14}
            height={14}
            alt="save"
          />
        </button>
      </section>

      <section className="flexCenter max-lg:flex-col gap-x-[299px] gap-y-[30px] max-lg:w-full">
        <div className="flexStart gap-[20px] w-full">
          <Image
            src="/assets/profile.png"
            width={50}
            height={50}
            alt="profile"
            className="rounded-full"
          />
          <div className="flexStart flex-col gap-y-[10px]">
            <p className="text-[18px] leading-[22px] font-semibold">
              Crypik - Crypto Wallet Dashboard
            </p>
            <div className="flex text-[14px] leading-[17px] font-normal gap-[9px] w-full">
              <Link href="/profile/id">
                Clair Danko <span className="text-[#4d4a4a]">for</span> JSM
              </Link>
              <Image src="/assets/dot.svg" width={4} height={4} alt="dot" />
              <button type="button">Follow</button>
              <Image src="/assets/dot.svg" width={4} height={4} alt="dot" />
              <button type="button" className="text-primary-purple">
                Hire Us
              </button>
            </div>
          </div>
        </div>

        <div className="flexCenter max-md:flex-col gap-[18px] lg:w-fit w-full">
          <button
            type="button"
            className="flexCenter gap-[7px] py-[16px] px-[17px] text-[#3D3D4E] bg-[#E2E5F1] rounded-xl text-sm leading-[17px] font-medium w-full"
            onClick={() => console.log("Save")}
          >
            <Image
              src="/assets/save.svg"
              className="min-w-[14px] min-h-[14px]"
              width={14}
              height={14}
              alt="save"
            />
            Save
          </button>

          <button
            type="button"
            className={`flexCenter gap-[7px] py-[16px] px-[17px] ${
              liked
                ? "text-primary-purple bg-white border-[1px] border-primary-purple"
                : "text-white bg-primary-purple"
            } rounded-xl text-sm leading-[17px] font-medium w-full`}
            onClick={() => setLiked(!liked)}
          >
            <Image
              src={`/assets/hearth-${liked ? "purple" : "white"}.svg`}
              className="min-w-[14px] min-h-[14px]"
              width={14}
              height={14}
              alt="like"
            />
            Like
          </button>
        </div>
      </section>

      <section className="mt-[52px]">
        <Image
          src="/assets/post1.png"
          className="object-cover"
          width={1064}
          height={798}
          alt="poster"
        />
      </section>

      <section className="flexCenter flex-col mt-[93px]">
        <h3 className="md:text-[47px] text-[30px] md:leading-[61px] leading-[35px] font-extrabold text-center">
          Flexibble - Dribble Clone
        </h3>
        <p className="max-w-[750px] text-[21px] font-normal leading-[36px] text-center mt-[46px]">
          Proud to share my latest exploration for Crypik - Crypto Wallet
          Dashboard Do you have any thoughts or feedback? Please leave your
          comment. Hope you guys enjoy it and press "L" if you like it ❤️
        </p>
      </section>

      <section className="flexCenter w-full gap-[30px] mt-[116px]">
        <span className="w-full h-[2px] bg-[#d7d7d7]" />
        <Link href="/profile/id" className="min-w-[82px] h-[82px]">
          <Image
            src="/assets/profile.png"
            className="rounded-full"
            width={82}
            height={82}
            alt="profile image"
          />
        </Link>
        <span className="w-full h-[2px] bg-[#d7d7d7]" />
      </section>

      <section className="flex flex-col mt-[135px]">
        <div className="flexBetween">
          <p className="text-[21px] leading-[26px] font-semibold">
            More by Clair
          </p>
          <Link
            href="/"
            className="text-primary-purple text-[16px] leading-[20px] font-semibold"
          >
            View All
          </Link>
        </div>

        <div className="flexCenter max-md:flex-col gap-[19px] pt-6">
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </section>
    </Modal>
  );
};

export default Project;
