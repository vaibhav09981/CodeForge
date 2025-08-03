import React from "react";
import Header from "./Header";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="px-4">
      <Header />
      <section className="flex justify-between py-12 pb-10 lg:py-16">
        <article className="flex flex-col items-center md:items-start">
          <h1 className="font-medium text-4xl md:text-4xl lg:max-w-xl">
            From Concept to Code. Building Real-World Developers.
          </h1>
          <div className="lg:hidden mt-9 lg:mt-0">
            <Image
              src={"/speaker.png"}
              alt="speaker image"
              width={750}
              height={0}
              priority
              className="lg:hidden w-auto h-auto"
            />
          </div>
          <p className="text-lg md:text-lg py-9 lg:max-w-lg">
            CodeForge is a student-led community dedicated to building practical skills through collaborative, open-source projects. We bridge the gap between theory and industry, empowering the next generation of developers.
          </p>
          <a href="#projects" className="bg-black text-white px-4 py-2 rounded-md shadow-xl hover:scale-105 duration-300 transition-all">Explore Projects</a>
        </article>
        <div className="hidden lg:block">
          <Image
            src={"/speaker.png"}
            alt="speaker image"
            width={700}
            height={0}
            priority
            className="w-auto h-auto object-cover"
          />
        </div>
      </section>
      <div className="relative py-6">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-fadeLine" style={{ opacity: 1 }}></div>
        <div className="overflow-hidden">
          <section className="flex justify-center lg:justify-between flex-nowrap gap-x-8 gap-y-3 relative z-10 animate-slide">

          <div>
            <Image
              className="grayscale w-full h-auto"
              src={"/amazon.png"}
              alt="amazon logo"
              width={126}
              height={0}
            />
          </div>
          <div>
            <Image
              className="grayscale w-full h-auto"
              src={"/dribble.png"}
              alt="dribble logo"
              width={126}
              height={0}
            />
          </div>
          <div>
            <Image
              className="grayscale w-full h-auto"
              src={"/hubspot.png"}
              alt="hubspot logo"
              width={126}
              height={0}
            />
          </div>
          <div>
            <Image
              className="grayscale w-full h-auto"
              src={"/notion.png"}
              alt="notion logo"
              width={126}
              height={0}
            />
          </div>
          <div>
            <Image
              className="grayscale w-full h-auto"
              src={"/netflix.png"}
              alt="netflix logo"
              width={126}
              height={48}
            />
          </div>
          <div>
            <Image
              className="grayscale w-full h-auto"
              src={"/zoom.png"}
              alt="zoom logo"
              width={126}
              height={0}
            />
          </div>
        </section>

        </div>
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-fadeLine" style={{ opacity: 1 }}></div>
      </div>
    </div>
  );
};

export default Hero;