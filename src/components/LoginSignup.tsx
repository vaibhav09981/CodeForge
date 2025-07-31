'use client';

import React, { useState } from 'react';

const LoginSignup = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [showForms, setShowForms] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement login logic here
    console.log('Login:', loginEmail, loginPassword);
    alert('Login functionality is not yet implemented.');
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign Up:', signupEmail, signupPassword);

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: signupEmail, password: signupPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        setSignupEmail('');
        setSignupPassword('');
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Error during sign up:', error);
      alert('An error occurred during sign up.');
    }
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Account Access</h2>
        {!showForms && (
          <div className="text-center mb-8">
            <button
              onClick={() => setShowForms(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline text-lg"
            >
              Login / Sign Up
            </button>
          </div>
        )}

        {showForms && (
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setIsNewUser(false)}
                className={`py-2 px-4 rounded-l-lg text-lg ${!isNewUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                Existing User Login
              </button>
              <button
                onClick={() => setIsNewUser(true)}
                className={`py-2 px-4 rounded-r-lg text-lg ${isNewUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                New User Sign Up
              </button>
            </div>

            {!isNewUser && (
              <form className="mb-8" onSubmit={handleLogin}>
                <h3 className="text-xl font-semibold mb-4">Login</h3>
                <div className="mb-4">
                  <label htmlFor="loginEmail" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                  <input
                    type="email"
                    id="loginEmail"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="loginPassword" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                  <input
                    type="password"
                    id="loginPassword"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="********"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Login
                </button>
              </form>
            )}

            {isNewUser && (
              <form onSubmit={handleSignUp}>
                <h3 className="text-xl font-semibold mb-4">Sign Up</h3>
                <div className="mb-4">
                  <label htmlFor="signupEmail" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                  <input
                    type="email"
                    id="signupEmail"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your email"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="signupPassword" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                  <input
                    type="password"
                    id="signupPassword"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="********"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Sign Up
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default LoginSignup;