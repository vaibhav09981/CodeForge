import React from "react";
import Card from "./Card";
import Image from "next/image";

const Services = () => {
  return (
    <div className="pt-24 md:pt-36 px-4">
      <div className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-5 md:gap-10">
        <h2 className="bg-green text-3xl font-bold p-2 rounded-md">Services</h2>
        <p className="max-w-xl">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      {/* Crads Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 pt-10 lg:pt-16 place-items-center">
        <Card
          title1="Collaborative"
          title2="Projects"
          description="Gain hands-on experience by contributing to real-world applications. Work in teams to build, test, and deploy meaningful software from the ground up."
          titleBgColor="bg-green"
          bgColor="bg-grey"
          imgUrl="/teamwork.png" // Placeholder for teamwork/building blocks icon
        />
        <Card
          title1="Portfolio"
          title2="Building"
          description="Build a public portfolio of work that stands out. Your contributions on GitHub will create a powerful showcase of your skills for future employers."
          titleBgColor="bg-white"
          bgColor="bg-green"
          imgUrl="/portfolio.png" // Placeholder for personal profile/achievement icon
        />
        <Card
          title1="Mentorship &"
          title2="Learning"
          description="Learn from peers and experienced members. Our community fosters a culture of knowledge sharing, from collaborative code reviews to technical workshops."
          titleBgColor="bg-white"
          bgColor="bg-dark"
          imgUrl="/mentorship.png" // Placeholder for communication/guidance icon
          iconColor="white"
          descriptionColor="text-gray-50"
        />
        <Card
          title1="Open-Source"
          title2="Contribution"
          description="Learn the fundamentals of open-source by contributing to our community projects, from fixing bugs and writing documentation to adding new features."
          titleBgColor="bg-green"
          bgColor="bg-grey"
          imgUrl="/github.png" // Placeholder for GitHub/open-source icon
        />
        <Card
          title1="Interview &"
          title2="Career Prep"
          description="Prepare for the job market with mock technical interviews, resume-building sessions, and discussions on industry best practices and career strategies."
          titleBgColor="bg-white"
          bgColor="bg-green"
          imgUrl="/career.png" // Placeholder for goals/career progression icon
        />
        <Card
          title1="Modern Tech"
          title2="Stacks"
          description="Work with the technologies that power the modern web. Get hands-on with cutting-edge tools like React, Next.js, Tailwind CSS, and more."
          titleBgColor="bg-green"
          bgColor="bg-dark"
          imgUrl="/tech-stacks.png" // Placeholder for tech logos icon
          iconColor="white"
          descriptionColor="text-gray-50"
        />
      </div>

      {/* Proposal section */}
      <div className="relative flex justify-between items-center px-8 py-12 md:p-16 rounded-[45px] bg-gray mt-24 lg:mt-36">
        <div className="max-w-md flex flex-col gap-4">
          <h2 className="font-medium text-3xl">
            Let&apos;s make things happen
          </h2>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="bg-dark py-5 px-5 md:px-9 text-gray rounded-2xl md:self-start">
            Get your free proposal
          </button>
        </div>
        <div>
          <Image
            src="/stars.png"
            width={350}
            height={200}
            alt="decorative stars"
            className="hidden lg:block absolute -top-6 -bottom-4 right-0 mr-24 w-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;