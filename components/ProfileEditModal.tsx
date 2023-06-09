"use client";

import {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import CustomButton from "@/components/CustomButton";

type Props = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};
const ProfileEditModal: FC<Props> = ({ setOpenModal }) => {
  const [githubLink, setGithubLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");

  const overlay = useRef<HTMLDivElement>(null);

  const onDismiss = useCallback(() => {
    window.document.body.style.overflowY = "auto";
    setOpenModal(false);
  }, []);

  const onClick = useCallback(
    (e: MouseEvent) => {
      if (e.target === overlay.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay]
  );

  useEffect(() => {
    window.document.body.style.overflowY = "hidden";
  }, []);

  const updateInfo = () => {
    console.log("update");
    setOpenModal(false);
  };

  return (
    <div
      ref={overlay}
      className="fixed top-0 flexCenter w-full h-screen bg-black/80"
      onClick={() => onClick}
    >
      <form className="flex flex-col bg-white lg:w-1/3 h-fit rounded-xl p-8">
        <h3 className="text-[32px] leading-[38px] font-bold">
          Add your socials
        </h3>
        <label htmlFor="github" className="text-small pt-9">
          GitHub
        </label>
        <input
          type="text"
          id="github"
          className="bg-[#F1F4F5] outline-0 h-[45px] rounded-xl mt-5 px-5"
          placeholder="https://github.com/adrianhajdin"
          value={githubLink}
          onChange={(e) => setGithubLink(e.target.value)}
        />
        <label htmlFor="linkedin" className="text-small pt-9">
          LinkedIn
        </label>
        <input
          type="text"
          id="github"
          className="bg-[#F1F4F5] outline-0 h-[45px] rounded-xl mt-5 mb-9 px-5"
          placeholder="https://www.linkedin.com/in/adrianhajdin/"
          value={linkedinLink}
          onChange={(e) => setLinkedinLink(e.target.value)}
        />
        <CustomButton title="Update Info" handleClick={() => updateInfo()} />
      </form>
    </div>
  );
};

export default ProfileEditModal;
