import React from 'react';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4 w-full">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Explore Our Projects
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
        Here you will find a collection of our amazing projects. Stay tuned for
        more updates!
      </p>
      <div className="grid grid-cols-1 gap-8 w-full max-w-4xl">
        {/* DSA Visualizer Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
          <div className="md:w-1/2 md:pr-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2"><span className="bg-white px-1 rounded-sm">DSA Visualizer</span></h2>
            <p className="text-gray-700 mb-4 text-sm">
              DSA Visualizer is a web application designed to help students learn Data Structures and Algorithms through interactive, step-by-step visualizations. It simplifies complex concepts like sorting, searching, and tree traversal with animations. Ideal for beginners, it makes DSA learning engaging and intuitive.
            </p>
            <a
              href="https://www.dsavisualizer.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 text-sm"
            >
              Click here to view
            </a>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 md:pl-4 flex justify-center items-center">
            <img src="/DSAvi.png" alt="DSA Visualizer" className="w-48 h-auto rounded-xl" />
          </div>
        </div>

        {/* Stream UI Card */}
        <div className="rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center md:items-start text-center md:text-left mt-8" style={{ backgroundColor: '#bfff00' }}>
          <div className="md:w-1/2 md:pr-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2"><span className="bg-white px-1 rounded-sm">StreamUI</span></h2>
            <p className="text-gray-700 mb-4 text-sm">
              StreamUI (streamui.org) is a library of clean, ready-to-use React + Tailwind CSS components—fully compatible with Next.js. Developers can copy-and-paste prebuilt UI sections into SaaS projects instantly. It includes support for animations using Framer Motion and GSAP, plus dark-mode styling. StreamUI helps you build fast with polished, reusable design blocks.
            </p>
            <a
              href="https://streamui.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 text-sm"
            >
              Click here to view
            </a>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 md:pl-4 flex justify-center items-center">
            <img src="/StreamUI.png" alt="Stream UI" className="w-48 h-auto rounded-xl" />
          </div>
        </div>

        {/* Next Could Be Yours Card */}
        <div className="bg-gray-800 rounded-2xl shadow-md p-6 flex items-center justify-center text-center mt-8" style={{ minHeight: '200px' }}>
          <h2 className="text-4xl font-bold text-white">Next could be yours</h2>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;