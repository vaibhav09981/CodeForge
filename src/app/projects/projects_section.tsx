import React from 'react';
import Card from "../../components/Card";

const ProjectsPage = () => {
  return (
    <main className="px-4">
      <h1 className="font-bold text-center text-5xl relative">Our Projects</h1>
      <div className="flex flex-col items-center gap-8 mt-8 max-w-5xl mx-auto">
          <Card
            title1="Interview &"
            title2="Career Prep"
            description="Prepare for the job market with mock technical interviews, resume-building sessions, and discussions on industry best practices and career strategies."
            titleBgColor="bg-white"
            bgColor="bg-lime-400"
            imgUrl="/DSAvi.png"
            iconColor="black"
            imagePosition="right"
          />
          <Card
            title1="Modern Tech"
            title2="Stacks"
            description="Work with the technologies that power the modern web. Get hands-on with cutting-edge tools like React, Next.js, Tailwind CSS, and more."
            titleBgColor="bg-lime-400"
            bgColor="bg-gray-900"
            imgUrl="/StreamUI.png"
            titleColor="text-white"
            descriptionColor="text-white"
            iconColor="white"
            imagePosition="left"
          />
        </div>
    </main>
  );
};

export default ProjectsPage;