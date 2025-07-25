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
        {TeamDetails.map((det, idx) => (
          <TeamCard key={idx} {...det} />
        ))}
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

const TeamDetails: TeamCardProps[] = [
  {
    imageUrl: "/john.png",
    name: "John Smith",
    position: "CEO and Founder",
    experience:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    imageUrl: "/jane.png",
    name: "Jane Doe",
    position: "Director of Operations",
    experience:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    imageUrl: "/michael.png",
    name: "Michael Brown",
    position: "Senior SEO Specialist",
    experience:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    imageUrl: "/emily.png",
    name: "Emily Johnson",
    position: "PPC Manager",
    experience:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
  {
    imageUrl: "/brian.png",
    name: "Brian Williams",
    position: "Social Media Specialist",
    experience:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },
  {
    imageUrl: "/sarah.png",
    name: "John Smith",
    position: "CEO and Founder",
    experience:
      "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
  },
];

export default Team;