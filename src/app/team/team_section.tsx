import React from 'react';

const TeamPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Our Amazing Team</h1>
      <p className="text-lg text-gray-700 mb-8">Get to know the talented individuals behind our success.</p>
      {/* You can add more content here, like a grid of team members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example Team Member Card */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <img src="/DSAvi.png" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h2 className="text-xl font-semibold">DSAvi</h2>
          <p className="text-gray-600">Lead Developer</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <img src="/Sohan.png" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h2 className="text-xl font-semibold">Sohan</h2>
          <p className="text-gray-600">Designer</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <img src="/Vaibhav.png" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h2 className="text-xl font-semibold">Vaibhav</h2>
          <p className="text-gray-600">Project Manager</p>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;