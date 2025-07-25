import Image from "next/image";
import React from "react";

const CaseStudies = () => {
  return (
    <section className="pt-24 md:pt-36 px-4">
      <div className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-5 sm:gap-10">
        <h2 className="bg-green text-3xl font-bold p-2 rounded-md">
          Case Studies
        </h2>
        <p className="max-w-lg">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <div className="mt-8 lg:mt-16 lg:bg-dark lg:py-[70px] lg:px-[60px] lg:rounded-[45px] flex flex-wrap lg:flex-nowrap gap-8 lg:gap-16">
        <article className="bg-dark p-10 rounded-[45px] lg:bg-none lg:p-0 lg:rounded-none flex flex-col items-start gap-5 border-r-2 lg:pr-16 border-gray">
          <p className="text-gray text-sm">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <button className="text-green flex items-center">
            Learn more
            <Image
              src={"/arrow-icon.svg"}
              alt="arrow icon"
              width={15}
              height={15}
              className="ml-2 w-auto h-auto"
            />{" "}
          </button>
        </article>
        <article className="bg-dark p-10 rounded-[45px] lg:bg-none lg:p-0 lg:rounded-none flex flex-col items-start gap-5 lg:pr-16 border-r-2 border-gray">
          <p className="text-gray text-sm">
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <button className="text-green flex items-center">
            Learn more
            <Image
              src={"/arrow-icon.svg"}
              alt="arrow icon"
              width={15}
              height={15}
              className="ml-2 w-auto h-auto"
            />{" "}
          </button>
        </article>
        <article className="bg-dark p-10 rounded-[45px] lg:bg-none lg:p-0 lg:rounded-none flex flex-col items-start gap-5">
          <p className="text-gray text-sm">
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <button className="text-green flex items-center">
            Learn more
            <Image
              src={"/arrow-icon.svg"}
              alt="arrow icon"
              width={15}
              height={15}
              className="ml-2 w-auto h-auto"
            />{" "}
          </button>
        </article>
      </div>
    </section>
  );
};

export default CaseStudies;