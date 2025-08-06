"use client";
import { useState } from "react";
import React from "react";

const Accordion: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number | null>(1);

  const accordionSections = [
    {
      id: 1,
      title: "How do we begin our journey at CodeForge?",
      content:
        "Our first step is to join our vibrant community! We connect on Discord and become a part of our GitHub organization. This is where we meet the team, get acquainted with our ongoing projects, and discover opportunities to contribute.",
    },
    {
      id: 2,
      title: "How do we choose a project to work on?",
      content:
        "Once we're in, we explore our GitHub repositories. We have a range of projects, from open-source tools to internal applications. We look for issues labeled 'good first issue' or 'help wanted' to get started, or propose our own ideas!",
    },
    {
      id: 3,
      title: "What's the process for making our first contribution?",
      content:
        "We fork the repository, create a new branch, and make our changes. Once we're done, we submit a pull request. Our maintainers are here to guide us through the process and help us get our code ready for review.",
    },
    {
      id: 4,
      title: "How does code review and feedback work?",
      content:
        "Our team provides constructive feedback to help us improve our code and learn best practices. We believe in collaborative learning, so we don't hesitate to ask questions and engage in discussions during the review process.",
    },
    {
      id: 5,
      title: "What happens after our code is reviewed?",
      content:
        "Once our pull request is approved, our code will be merged into the main branch and deployed. We'll see our contributions live, making a real impact on our projects and the community.",
    },
    {
      id: 6,
      title: "How can we showcase our contributions?",
      content:
        "We encourage each other to share our work! We can add our contributions to our portfolios, mention them on our resumes, and even present them at our community showcases. Our collective efforts are valuable and deserve recognition!"
    },
  ];

  const toggleSection = (section: number) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <section className="pt-24 sm:pt-36 px-4">
      <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-start sm:gap-10">
        <h2 className="bg-green text-3xl font-bold p-2 rounded-sm">
          Your Journey at CodeForge
        </h2>
        <p className="max-w-xs">
           A Step-by-Step Guide to Becoming a Contributor
         </p>
       </div>

      {accordionSections.map(({ id, title, content }) => (
        <div
          key={id}
          className={`${
            activeSection === id ? "bg-green" : "bg-gray"
          } border border-b-4 text-black px-8 sm:px-[60px] py-3 rounded-[45px] mt-4 sm:mt-16`}
        >
          <div
            className="flex justify-between items-center py-7 cursor-pointer"
            onClick={() => toggleSection(id)}
          >
            <h3 className="flex font-medium">
              <span className="text-3xl sm:text-6xl mr-3 sm:mr-6 font-extrabold">
                {String(id).padStart(2, "0")}
              </span>{" "}
              <span className="text-xl sm:text-3xl self-center">{title}</span>
            </h3>
            <div className="flex justify-center items-center text-2xl border rounded-full w-10 h-10 bg-white">
              <span className="text-4xl">{activeSection === id ? "−" : "+"}</span>
            </div>
          </div>
          {activeSection === id && (
            <div className="py-7 border-t">
              <p>{content}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Accordion;