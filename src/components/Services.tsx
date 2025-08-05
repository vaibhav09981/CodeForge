import React from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "./Card";

const Services = () => {
  return (
    <div className="pt-24 md:pt-36 px-4">
      {/* Left Column: Title and Description */}
      <div className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-5 md:gap-10">
        <h2 className="bg-green text-3xl font-bold p-2 rounded-md">What We Offer</h2>
        <p className="max-w-xl">
          At CodeForge, we provide a complete ecosystem for aspiring developers.
          These are the core pillars of our community:
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 pt-10 lg:pt-16 place-items-center">
        <Card
          title1="Collaborative"
          title2="Projects"
          description="Gain hands-on experience by contributing to real-world applications. Work in teams to build, test, and deploy meaningful software."
          titleBgColor="bg-green"
          bgColor="bg-grey"
          imgUrl="/images/teamwork.png"
        />
        <Card
          title1="Mentorship &"
          title2="Learning"
          description="Learn from peers and experienced members. Our community fosters a culture of knowledge sharing, from code reviews to workshops."
          titleBgColor="bg-white"
          bgColor="bg-green"
          imgUrl="/images/communication.png"
        />
        <Card
          title1="Portfolio"
          title2="Building"
          description="Build a public portfolio of work that stands out. Your contributions on GitHub will showcase your skills to future employers."
          titleBgColor="bg-white"
          bgColor="bg-dark"
          imgUrl="/images/portfolio.png"
          iconColor="white"
          descriptionColor="text-white"
        />
        <Card
          title1="Open-Source"
          title2="Contribution"
          description="Learn the fundamentals of open-source by contributing to our community projects, from fixing bugs to adding new features."
          titleBgColor="bg-green"
          bgColor="bg-grey"
          imgUrl="/images/opensource.png"
        />
        <Card
          title1="Modern Tech"
          title2="Stacks"
          description="Work with the technologies that power the modern web. Get hands-on with tools like React, Next.js, and Tailwind CSS."
          titleBgColor="bg-white"
          bgColor="bg-green"
          imgUrl="/images/tech-stack.png"
        />
        <Card
          title1="Community"
          title2="Support"
          description="Connect with a vibrant community of developers. Get help, share knowledge, and collaborate on projects."
          titleBgColor="bg-green"
          bgColor="bg-dark"
          imgUrl="/images/community.png"
          iconColor="white"
          descriptionColor="text-white"
        />
      </div>

      {/* Proposal section */}
      <div className="relative flex justify-between items-center px-8 py-12 md:p-16 rounded-[45px] bg-gray mt-24 lg:mt-36">
        <div className="max-w-md flex flex-col gap-4">
          <h2 className="font-medium text-3xl">
            Ready to Build With Us?
          </h2>
          <p>
            Join a growing community of passionate student developers. Whether you're a beginner or an expert, your contribution matters.
          </p>
          <Link href="/whatsapp-community" className="bg-dark py-5 px-5 md:px-9 text-gray rounded-2xl md:self-start">
            Join Our Whatsapp community
          </Link>
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
