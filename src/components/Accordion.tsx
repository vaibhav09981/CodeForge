"use client";

import { useState } from "react";

export default function Accordion() {
  const [activeSection, setActiveSection] = useState<number | null>(1);

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
      <div
        className={`${
          activeSection === 1 ? "bg-green" : "bg-gray"
        } border border-b-4 text-black px-8 sm:px-[60px] py-3 rounded-[45px] mt-4 sm:mt-16`}
      >
        <div
          className="flex justify-between items-center py-7 cursor-pointer"
          onClick={() => toggleSection(1)}
        >
          <h3 className="flex font-medium">
            <span className="text-3xl sm:text-6xl mr-3 sm:mr-6 font-extrabold">
              01
            </span>{" "}
            <span className="text-xl sm:text-3xl self-center">
              Join the Community
            </span>
          </h3>
          <div className="flex justify-center items-center text-2xl border rounded-full w-10 h-10 bg-white">
            <span className="text-4xl"> {activeSection === 1 ? "−" : "+"}</span>
          </div>
        </div>
        {activeSection === 1 && (
          <div className="py-7 border-t">
            <p>
              Start by joining our Discord and GitHub organization to meet the team and see what we're working on.
            </p>
          </div>
        )}
      </div>

      <div
        className={`${
          activeSection === 2 ? "bg-green" : "bg-gray"
        } border border-b-4 text-black px-8 sm:px-[60px] py-3 rounded-[45px] mt-4 sm:mt-8`}
      >
        <div
          className="flex justify-between items-center py-7 cursor-pointer"
          onClick={() => toggleSection(2)}
        >
          <h3 className="flex font-medium">
            <span className="text-3xl sm:text-6xl mr-3 sm:mr-6 font-extrabold">
              02
            </span>{" "}
            <span className="text-xl sm:text-3xl self-center">
              Pick a Project
            </span>
          </h3>
          <div className="flex justify-center items-center text-2xl border rounded-full w-10 h-10 bg-white">
            <span className="text-4xl"> {activeSection === 2 ? "−" : "+"}</span>
          </div>
        </div>
        {activeSection === 2 && (
          <div className="py-7 border-t">
            <p>
              Explore our active projects, find one that interests you, and read the contribution guidelines to get started.
            </p>
          </div>
        )}
      </div>

      <div
        className={`${
          activeSection === 3 ? "bg-green" : "bg-gray"
        } border border-b-4 text-black px-8 sm:px-[60px] py-3 rounded-[45px] mt-4 sm:mt-8`}
      >
        <div
          className="flex justify-between items-center py-7 cursor-pointer"
          onClick={() => toggleSection(3)}
        >
          <h3 className="flex font-medium">
            <span className="text-3xl sm:text-6xl mr-3 sm:mr-6 font-extrabold">
              03
            </span>{" "}
            <span className="text-xl sm:text-3xl self-center">
              Make Your First Contribution
            </span>
          </h3>
          <div className="flex justify-center items-center text-2xl border rounded-full w-10 h-10 bg-white">
            <span className="text-4xl"> {activeSection === 3 ? "−" : "+"}</span>
          </div>
        </div>
        {activeSection === 3 && (
          <div className="py-7 border-t">
            <p>
              Clone the repository, set up the project, and tackle your first issue—whether it's a bug fix, documentation, or a new feature.
            </p>
          </div>
        )}
      </div>

      <div
        className={`${
          activeSection === 4 ? "bg-green" : "bg-gray"
        } border border-b-4 text-black px-8 sm:px-[60px] py-3 rounded-[45px] mt-4 sm:mt-8`}
      >
        <div
          className="flex justify-between items-center py-7 cursor-pointer"
          onClick={() => toggleSection(4)}
        >
          <h3 className="flex font-medium">
            <span className="text-3xl sm:text-6xl mr-3 sm:mr-6 font-extrabold">
              04
            </span>{" "}
            <span className="text-xl sm:text-3xl self-center">
              Code Review & Feedback
            </span>
          </h3>

          <div className="flex justify-center items-center text-2xl border rounded-full w-10 h-10 bg-white">
            <span className="text-4xl"> {activeSection === 4 ? "−" : "+"}</span>
          </div>
        </div>
        {activeSection === 4 && (
          <div className="py-7 border-t">
            <p>
              Submit your changes for review. Our team provides constructive feedback to help you improve your code and learn best practices.
            </p>
          </div>
        )}
      </div>

      <div
        className={`${
          activeSection === 5 ? "bg-green" : "bg-gray"
        } border border-b-4 text-black px-8 sm:px-[60px] py-3 rounded-[45px] mt-4 sm:mt-8`}
      >
        <div
          className="flex justify-between items-center py-7 cursor-pointer"
          onClick={() => toggleSection(5)}
        >
          <h3 className="flex font-medium">
            <span className="text-3xl sm:text-6xl mr-3 sm:mr-6 font-extrabold">
              05
            </span>{" "}
            <span className="text-xl sm:text-3xl self-center">
              Merge & Deploy
            </span>
          </h3>
          <div className="flex justify-center items-center text-2xl border rounded-full w-10 h-10 bg-white">
            <span className="text-4xl"> {activeSection === 5 ? "−" : "+"}</span>
          </div>
        </div>
        {activeSection === 5 && (
          <div className="py-7 border-t">
            <p>
              Once approved, your contributions are merged into the main project and deployed, making your work live for everyone to see.
            </p>
          </div>
        )}
      </div>

      <div
        className={`${
          activeSection === 6 ? "bg-green" : "bg-gray"
        } border border-b-4 text-black px-8 sm:px-[60px] py-3 rounded-[45px] mt-4 sm:mt-8`}
      >
        <div
          className="flex justify-between items-center py-7 cursor-pointer"
          onClick={() => toggleSection(6)}
        >
          <h3 className="flex font-medium">
            <span className="text-3xl sm:text-6xl mr-3 sm:mr-6 font-extrabold">
              06
            </span>{" "}
            <span className="text-xl sm:text-3xl self-center">
              Showcase Your Work
            </span>
          </h3>
          <div className="flex justify-center items-center text-2xl border rounded-full w-10 h-10 bg-white">
            <span className="text-4xl"> {activeSection === 6 ? "−" : "+"}</span>
          </div>
        </div>
        {activeSection === 6 && (
          <div className="py-7 border-t">
            <p>
              Your merged contributions are highlighted in our community updates and can be proudly displayed in your personal portfolio.
            </p>
          </div>
        </div>
        {activeSection === 6 && (
          <div className="py-7 border-t">
            <p>
              Stay ahead of the curve by continuously refining and improving
              your marketing strategies to adapt to changing market conditions.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}