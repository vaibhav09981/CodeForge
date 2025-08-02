import React from "react";
import Card from "./Card";

const WhatWeOffer: React.FC = () => {
  return (
    <div id="what-we-offer" className="pt-24 md:pt-36 px-4 flex flex-col md:flex-row gap-6">
      {/* Left Column: Title and Description */}
      <div className="md:w-1/3 text-left">
        <div className="flex items-center mb-6">
          {/* Replaced "Services" with a more fitting title */}
          <h2 className="bg-green text-3xl font-bold p-2 rounded-md mr-4">What We Offer</h2>
        </div>
        {/* Updated the descriptive paragraph */}
        <p className="max-w-xl mb-8">
          At CodeForge, we provide a complete ecosystem for aspiring developers. 
          These are the core pillars of our community:
        </p>

        {/* This is a great spot for a secondary Call to Action */}
        <div className="bg-green-500 text-white py-3 px-6 rounded-md inline-block cursor-pointer hover:bg-green-600 transition-colors duration-300">
          <span className="text-xl font-bold">Join the Community</span>
        </div>
        <p className="text-gray-700 mt-4">
          Unlock exclusive resources, networking opportunities, and collaborative projects designed to help you grow and succeed.
        </p>
      </div>

      {/* Right Column: The Grid of Cards */}
      <div className="md:w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 pt-10 lg:pt-0 place-items-center">
          {/* Card 1 */}
          <Card
            title1="Collaborative"
            title2="Projects"
            description="Gain hands-on experience by contributing to real-world applications. Work in teams to build, test, and deploy meaningful software."
            titleBgColor="bg-green"
            bgColor="bg-grey"
            imgUrl="/images/teamwork.png"
          />
          {/* Card 2 */}
          <Card
            title1="Portfolio"
            title2="Building"
            description="Your contributions on GitHub will create a powerful showcase of your skills for future employers."
            titleBgColor="bg-white"
            bgColor="bg-green"
            imgUrl="/images/portfolio.png"
          />
          {/* Card 4 */}
          <Card
            title1="Open-Source"
            title2="Contribution"
            description="Learn the fundamentals of open-source by contributing to our community projects, from fixing bugs to adding new features."
            titleBgColor="bg-white"
            bgColor="bg-green"
            imgUrl="/images/opensource.png"
          />
          {/* Card 6 */}
          <Card
            title1="Modern Tech"
            title2="Stacks"
            description="Work with the technologies that power the modern web. Get hands-on with tools like React, Next.js, and Tailwind CSS."
            titleBgColor="bg-green"
            bgColor="bg-white"
            imgUrl="/images/tech-stack.png"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
