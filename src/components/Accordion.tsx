"use client";

import { useState } from "react";
import React from "react";

const Accordion: React.FC = () => {
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
         className={`${activeSection === 1 ? "bg-green" : "bg-gray"} border border-b-4 text-black px-8 sm:px-[60px] py-3 rounded-[45px] mt-4 sm:mt-16`}
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
              How do we begin our journey at CodeForge?
            </span>
          </h3>
          <div className="flex justify-center items-center text-2xl border rounded-full w-10 h-10 bg-white">
            <span className="text-4xl"> {activeSection === 1 ? "−" : "+"}</span>
          </div>
        </div>
        {activeSection === 1 && (
          <div className="py-7 border-t">
            <p>
              Your first step is to join our vibrant community! Connect with us on Discord and become a part of our GitHub organization. This is where you&apos;ll meet the team, get acquainted with our ongoing projects, and discover opportunities to contribute.
            </p>
          </div>
        )}
      </div>
      {/* Accordion Item 2 */}
      <div
        className={`${activeSection === 2 ? "bg-green" : "bg-gray"} border border-b-4 text-black px-8 sm:px-[60px] py-3 rounded-[45px] mt-4`}
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
              How do we choose a project to work on?
            </span>
          </h3>
          <div className="flex justify-center items-center text-2xl border rounded-full w-10 h-10 bg-white">
            <span className="text-4xl"> {activeSection === 2 ? "−" : "+"}</span>
          </div>
        </div>
        {activeSection === 2 && (
          <div className="py-7 border-t">
            <p>
              Once you&apos;re in, explore our GitHub repositories. We have a range of projects, from open-source tools to internal applications. Look for issues labeled &apos;good first issue&apos; or &apos;help wanted&apos; to get started, or propose your own ideas!
            </p>
          </div>
        )}
      </div>
      {/* Accordion Item 3 */}
      <div
        className={`${activeSection === 3 ? "bg-green" : "bg-gray"} border border-b-4 text-black px-8 sm:px-[60px] py-3 rounded-[45px] mt-4`}
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
              What&apos;s the process for making our first contribution?
            </span>
          </h3>
          <div className="flex justify-center items-center text-2xl border rounded-full w-10 h-10 bg-white">
            <span className="text-4xl"> {activeSection === 3 ? "−" : "+"}</span>
          </div>
        </div>
        {activeSection === 3 && (
          <div className="py-7 border-t">
            <p>
              Fork the repository, create a new branch, and make your changes. Once you&apos;re done, submit a pull request. Our maintainers are here to guide you through the process and help you get your code ready for review.
            </p>
          </div>
        )}
      </div>
      {/* Accordion Item 4 */}
      <div
        className={`${activeSection === 4 ? "bg-green" : "bg-gray"} border border-b-4 text-black px-8 sm:px-[60px] py-3 rounded-[45px] mt-4`}
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
              How does code review and feedback work?
            </span>
          </h3>
          <div className="flex justify-center items-center text-2xl border rounded-full w-10 h-10 bg-white">
            <span className="text-4xl"> {activeSection === 4 ? "−" : "+"}</span>
          </div>
        </div>
        {activeSection === 4 && (
          <div className="py-7 border-t">
            <p>
              Our team provides constructive feedback to help you improve your code and learn best practices. We believe in collaborative learning, so don&apos;t hesitate to ask questions and engage in discussions during the review process.
            </p>
          </div>
        )}
      </div>
      {/* Accordion Item 5 */}
      <div
        className={`${activeSection === 5 ? "bg-green" : "bg-gray"} border border-b-4 text-black px-8 sm:px-[60px] py-3 rounded-[45px] mt-4`}
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
              What happens after our code is reviewed?
            </span>
          </h3>
          <div className="flex justify-center items-center text-2xl border rounded-full w-10 h-10 bg-white">
            <span className="text-4xl"> {activeSection === 5 ? "−" : "+"}</span>
          </div>
        </div>
        {activeSection === 5 && (
          <div className="py-7 border-t">
            <p>
              Once your pull request is approved, your code will be merged into the main branch and deployed. You&apos;ll see your contributions live, making a real impact on our projects and the community.
            </p>
          </div>
        )}
      </div>
      {/* Accordion Item 6 */}
      <div
        className={`${activeSection === 6 ? "bg-green" : "bg-gray"} border border-b-4 text-black px-8 sm:px-[60px] py-3 rounded-[45px] mt-4`}
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
              How can we showcase our contributions?
            </span>
          </h3>
          <div className="flex justify-center items-center text-2xl border rounded-full w-10 h-10 bg-white">
            <span className="text-4xl"> {activeSection === 6 ? "−" : "+"}</span>
          </div>
        </div>
        {activeSection === 6 && (
          <div className="py-7 border-t">
            <p>
              We encourage you to share your work! You can add your contributions to your portfolio, mention them on your resume, and even present them at our community showcases. Your efforts are valuable and deserve recognition!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Accordion;