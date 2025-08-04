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
        "Your first step is to join our vibrant community! Connect with us on Discord and become a part of our GitHub organization. This is where you'll meet the team, get acquainted with our ongoing projects, and discover opportunities to contribute.",
    },
    {
      id: 2,
      title: "How do we choose a project to work on?",
      content:
        "Once you're in, explore our GitHub repositories. We have a range of projects, from open-source tools to internal applications. Look for issues labeled 'good first issue' or 'help wanted' to get started, or propose our own ideas!",
    },
    {
      id: 3,
      title: "What's the process for making our first contribution?",
      content:
        "Fork the repository, create a new branch, and make your changes. Once you're done, submit a pull request. Our maintainers are here to guide you through the process and help you get your code ready for review.",
    },
    {
      id: 4,
      title: "How does code review and feedback work?",
      content:
        "Our team provides constructive feedback to help you improve your code and learn best practices. We believe in collaborative learning, so don't hesitate to ask questions and engage in discussions during the review process.",
    },
    {
      id: 5,
      title: "What happens after my code is reviewed?",
      content:
        "Once your pull request is approved, your code will be merged into the main branch and deployed. You'll see your contributions live, making a real impact on our projects and the community.",
    },
    {
      id: 6,
      title: "How can we showcase our contributions?",
      content:
        "We encourage you to share your work! You can add your contributions to your portfolio, mention them on your resume, and even present them at our community showcases. Your efforts are valuable and deserve recognition!",
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