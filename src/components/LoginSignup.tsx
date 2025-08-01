 'use client';

import React, { useState } from 'react';
import Cropper from 'react-easy-crop';

const LoginSignup = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [qualification, setQualification] = useState('');
  const [totalProjects, setTotalProjects] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [showCropper, setShowCropper] = useState(false);
  const [showForms, setShowForms] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement login logic here
    console.log('Login:', loginEmail, loginPassword);
    alert('Login functionality is not yet implemented.');
  };

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePic(e.target.files[0]);
      setShowCropper(true);
    }
  };

  const createImage = (url: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener('load', () => resolve(image));
      image.addEventListener('error', (error) => reject(error));
      image.setAttribute('crossOrigin', 'anonymous'); // needed to avoid cross-origin issues on CodeSandbox
      image.src = url;
    });

  const getCroppedImg = async (imageSrc: string, pixelCrop: any) => {
    const image = await createImage(imageSrc);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return null;
    }

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    ctx.drawImage(
      image,
      pixelCrop.x * scaleX,
      pixelCrop.y * scaleY,
      pixelCrop.width * scaleX,
      pixelCrop.height * scaleY,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob);
      }, 'image/jpeg');
    });
  };

  const onCrop = async () => {
    if (profilePic && croppedAreaPixels) {
      const croppedImageBlob = await getCroppedImg(
        URL.createObjectURL(profilePic),
        croppedAreaPixels
      );
      if (croppedImageBlob) {
        const croppedFile = new File([croppedImageBlob], "profile.jpeg", { type: "image/jpeg" });
        setProfilePic(croppedFile);
        setCroppedImage(URL.createObjectURL(croppedImageBlob));
        setShowCropper(false);
      }
    }
  };

  const onCropComplete = (croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign Up:', signupEmail, signupPassword, confirmPassword, fullName, qualification, totalProjects, githubUrl, profilePic);

    if (signupPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('email', signupEmail);
      formData.append('password', signupPassword);
      formData.append('fullName', fullName);
      formData.append('qualification', qualification);
      formData.append('totalProjects', totalProjects);
      formData.append('githubUrl', githubUrl);
      if (profilePic) {
        // The profilePic state now holds the cropped image (File object) after the cropping process.
        formData.append('profilePic', profilePic);
      }

      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        body: formData,
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
    <div>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-left max-w-md">
          <div className="mb-6">
            <div className="bg-green-500 text-white py-2 px-6 rounded-md inline-block mb-4">
              <span className="text-xl font-bold">Community</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Be a part of Our Community</h2>
            <p className="text-gray-700 mb-4">Join our vibrant community of professionals and unlock exclusive resources, networking opportunities, and collaborative projects designed to help you grow and succeed.</p>
          </div>
          <button
            className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition-colors duration-300"
            onClick={() => setShowForms(true)}
          >
            Join our community
          </button>
        </div>
      </section>



      {showForms && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
          <div className="relative p-8 rounded-lg shadow-lg" style={{ backgroundColor: '#FFFDD0' }}>
            <button
              onClick={() => setShowForms(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl font-bold"
            >
              &times;
            </button>
            {showCropper && profilePic ? (
              <div className="relative w-full h-64 mb-4">
                <Cropper
                  image={URL.createObjectURL(profilePic)}
                  crop={{ x: 0, y: 0 }}
                  zoom={1}
                  aspect={1}
                  onCropComplete={onCropComplete}
                />
                <button
                  onClick={onCrop}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Crop and Set Profile Picture
                </button>
              </div>
            ) : (
              croppedImage && (
                <div className="flex justify-center mb-4">
                  <img src={croppedImage} alt="Profile" className="rounded-full w-24 h-24 object-cover" />
                </div>
              )
            )}
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
                <div className="mb-4">
                  <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Full Name:</label>
                  <input
                    type="text"
                    id="fullName"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="qualification" className="block text-gray-700 text-sm font-bold mb-2">Qualification:</label>
                  <input
                    type="text"
                    id="qualification"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your highest qualification"
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="totalProjects" className="block text-gray-700 text-sm font-bold mb-2">Total Projects:</label>
                  <input
                    type="number"
                    id="totalProjects"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Number of projects completed"
                    value={totalProjects}
                    onChange={(e) => setTotalProjects(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="githubUrl" className="block text-gray-700 text-sm font-bold mb-2">GitHub Repository URL:</label>
                  <input
                    type="url"
                    id="githubUrl"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="https://github.com/your-repo"
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="profilePic" className="block text-gray-700 text-sm font-bold mb-2">Profile Picture:</label>
                  <input
                    type="file"
                    id="profilePic"
                    accept="image/*"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleProfilePicChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="signupPassword" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                  <input
                    type="password"
                    id="signupPassword"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="********"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password:</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="********"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
                >
                  Sign Up
                </button>
                <button
                  type="button"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  onClick={() => alert('Google Sign Up not implemented yet.')}
                >
                  Sign Up with Google
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;