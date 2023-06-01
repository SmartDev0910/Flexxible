import Image from "next/image";
import { FC, MouseEventHandler } from "react";

type Props = {
  title: string,
  leftIcon?: string | null,
  rightIcon?: string | null,
  handleClick: MouseEventHandler,
}

const CustomButton: FC<Props> = ({ title, leftIcon, rightIcon, handleClick }) => (
  <button
    type="button"
    className="flexCenter gap-[13px] p-[14px] text-white bg-primary-purple rounded-xl text-sm leading-[17px] font-medium"
    onClick={handleClick}
  >
    {leftIcon && (
      <Image
        src={leftIcon}
        width={14}
        height={14}
        alt="left icon"
      />
    )}
    {title}
    {rightIcon && (
      <Image
        src={rightIcon}
        width={14}
        height={14}
        alt="right icon"
      />
    )}
  </button>
)

export default CustomButton;
