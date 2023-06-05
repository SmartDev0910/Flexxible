import Image from "next/image";
import { FC, MouseEventHandler } from "react";

type Props = {
  title: string,
  leftIcon?: string | null,
  rightIcon?: string | null,
  handleClick: MouseEventHandler,
  submitting?: boolean | false,
  type?: 'button' | 'submit',
}

const CustomButton: FC<Props> = ({ title, leftIcon, rightIcon, handleClick, submitting, type }) => (
  <button
    type={type || 'button'}
    disabled={submitting || false}
    className={`flexCenter gap-[13px] p-[14px] text-white ${submitting ? 'bg-black/50' : 'bg-primary-purple'} rounded-xl text-sm leading-[17px] font-medium max-md:w-full`}
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
