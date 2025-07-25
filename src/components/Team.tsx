import React from "react";
import TeamCard, { TeamCardProps } from "./TeamCard";

const Team = () => {
  return (
    <section className="pt-24 md:pt-36 px-4">
      <div className="flex flex-col md:flex-row text-center md:text-start items-center gap-5 md:gap-10">
        <h2 className="bg-green text-3xl font-bold p-2 rounded-md">Team</h2>
        <p className="max-w-md">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-8 md:pt-16">

      </div>
      <div className="sm:justify-self-end mt-10">
        <a href="#!" className="block">
          <button className="w-full bg-dark text-white px-9 py-5 rounded-[14px]">
            See all team
          </button>
        </a>
      </div>
    </section>
  );
};



export default Team;