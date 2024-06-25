'use client';

import { useState } from "react";
import { HiOutlineCog } from "react-icons/hi";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Image from "next/image";

export default function ProfilePage () {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center space-x-24">
        <IoArrowBackCircleOutline className="text-3xl" />
        <h1 className="text-3xl font-bold text-black">Profile</h1>
        <HiOutlineCog className="text-3xl" />
      </div>

      <form className="flex flex-col items-center mt-2 w-full max-w-sm p-8 rounded">
        <Image 
          src="/temporary-profile-placeholder-1.jpg" alt="Profile Image" width={200} height={200} className="w-48 my-6 border-2 border-black rounded-full" />
        <div className="mb-2 w-full">
          <input
            defaultValue={username}
            type='text'
            id='username'
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
            className="bg-custom-input border rounded-xl w-full py-3.5 px-3 text-black placeholder-black leading-tight"
          />
        </div>
        <div className="mb-2 w-full">
          <input
            defaultValue={email}
            type='email'
            id='email'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            className="bg-custom-input border rounded-xl w-full py-3.5 px-3 text-black placeholder-black leading-tight"
          />
        </div>
      </form>

      <div className="flex flex-col items-center w-full max-w-sm mt-4 space-y-4">
        <button className="w-full bg-green-700 text-white font-medium py-3 rounded-xl hover:bg-green-600">
          Update Account
        </button>
        <button className="w-full bg-red-500 text-white font-medium py-3 rounded-xl hover:bg-red-600">
          Delete Account
        </button>
      </div>
      
      <button className="w-full max-w-sm bg-custom-logout text-black font-medium py-3 rounded-xl mt-36 hover:bg-red-700">
        Logout
      </button>
    </main>
  );
}