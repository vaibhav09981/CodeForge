import React from "react";
import Header from "./Header";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="px-4">
      <Header />
      <section className="flex justify-between py-12 pb-10 lg:py-16">
        <article className="flex flex-col items-center md:items-start">
          <h1 className="font-medium text-4xl/normal md:text-6xl/normal lg:max-w-xl">
            From Concept to Code. Building Real-World Developers.
          </h1>
          <div className="lg:hidden mt-9 lg:mt-0">
            <Image
              src={"/speaker.png"}
              alt="speaker image"
              width={560}
              height={0}
              priority
              className="lg:hidden w-auto h-auto"
            />
          </div>
          <p className="text-lg md:text-xl py-9 lg:max-w-lg">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className="w-full lg:w-auto lg:self-start px-9 py-4 bg-black text-gray rounded-xl">
            Book a consultation
          </button>
        </article>
        <div className="hidden lg:block">
          <Image
            src={"/speaker.png"}
            alt="speaker image"
            width={560}
            height={0}
            priority
            className="w-auto h-auto object-cover"
          />
        </div>
      </section>
      <section className="flex justify-center lg:justify-between flex-wrap gap-x-8 gap-y-3">
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
  );
};

export default Hero;