import Image from 'next/image';

const Footer = () => (
  <section className="flexStart flex-col paddings w-full gap-y-[89px] bg-[#FAFAFB]">
    <div className="flexStart flex-col">
      <Image
        src="/assets/logo-purple.svg"
        width={116}
        height={38}
        alt="logo"
      />

      <div className="text-start text-[14px] leading-[17px] font-normal mt-[18px]">
        Dribbble is the world's leading
        community for creatives to share, grow,
        and get hired.
      </div>
      <Image
        src="/assets/socials.svg"
        width={95}
        height={18}
        className="pt-[18px]"
        alt="socials"
      />
    </div>

    <div className="flexBetween w-full text-[14px] leading-[17px] font-normal">
      <p>@ 2023 Flexibble. All rights reserved</p>
      <p className="text-[#4D4A4A]"><span className="text-black font-semibold">21,160,075</span> shots flexibble</p>
    </div>
  </section>
);

export default Footer;
