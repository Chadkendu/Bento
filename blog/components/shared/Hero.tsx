import React from "react";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  const picture = "/assets/header.jpg";

  return (
    <div className="w-full flex flex-col lg:gap-20 max-md:gap-10 align-middle items-start lg:p-10 p-3">
      <div className="mt-[150px] flex w-full align-middle items-start">
        <h1 className="text-4xl font-bold uppercase lg:text-7xl">
        Welcome to Bento: <br /> A Platform for Unleashing Your Ideas and Creativity
        </h1>
      </div>
      <div className="rounded-3xl w-full">
        <Image
          src={picture}
          alt="header image"
          className="rounded-3xl w-full"
          width="5000"
          height="5000"
        />
      </div>
      <div className="mt-10 flex flex-col w-full align-middle items-start">
        <h1 className="lg:text-4xl text-3xl uppercase lg:leading-relaxed">
        Bento Blog is your digital canvas for unleashing creativity, sharing ideas, and inspiring others. Here, we celebrate the diverse tapestry of human imagination and ingenuity, offering a platform where users can freely express their thoughts, insights, and innovations.
        </h1>
      </div>
    </div>
  );
};

export default Hero;
