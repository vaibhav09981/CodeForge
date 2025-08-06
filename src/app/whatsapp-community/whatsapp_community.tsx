import React from 'react';

const WhatsappCommunityPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Join Our WhatsApp Community!</h1>
      <p className="text-lg text-gray-700 mb-8">Click the button below to join our vibrant community on WhatsApp.</p>
      <a
        href="https://chat.whatsapp.com/your-whatsapp-group-link"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-xl transition duration-300 ease-in-out"
      >
        Join Now
      </a>
      <p className="mt-4 text-sm text-gray-500">Please replace 'your-whatsapp-group-link' with your actual WhatsApp group invite link.</p>
    </div>
  );
};

export default WhatsappCommunityPage;