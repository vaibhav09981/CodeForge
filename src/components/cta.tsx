'use client';
import React from 'react';
import { PartyPopper } from "lucide-react"

const LoginSignup = () => {
  return (
    <div>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <div className="bg-green-500 text-white py-2 px-6 rounded-md inline-block mb-4">
              <span className="text-xl font-bold">Community</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Be a part of Our Community</h2>
            <p className="text-gray-700 mb-4">
              Join our vibrant community of professionals and unlock exclusive resources, networking opportunities, and collaborative projects designed to help you grow and succeed.
            </p>
          </div>
          <div className='flex justify-center'>
            <button
              className="group bg-green text-black py-2 px-6 rounded-md hover:scale-105 transition-all duration-300 relative"
              onClick={() => window.open("https://chat.whatsapp.com/COMMUNITY_LINK", "_blank")}
            >
              Join Now
              <span className="absolute -top-3 -right-3 text-lg opacity-0 scale-150 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                <PartyPopper size={30}/>
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginSignup;