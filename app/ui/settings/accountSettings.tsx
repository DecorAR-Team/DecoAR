'use client';
import { IoMdArrowBack } from "react-icons/io";
import { PassThrough } from "stream";
import { signOut } from "next-auth/react";
import Link from "next/link";


export default function AccountSettings ({user}: any) {

  const handleLogOut = async () => {
    try {
      await signOut();
      // Redirect to login page
      window.location.href = "/";
    } catch (error) {
      console.error('An error occurred while logging out', error);
    }

  }

  return (
    <main className="flex justify-center flex-col items-center min-h-full md:mx-32">

      <div className="flex flex-row items-center justify-center mt-10 w-full">
        <Link href="/">
        <IoMdArrowBack className="text-2xl ml-5 md:ml-10 md:text-4xl md:mt-12"/>
        </Link>
        <h1 className="text-xl font-bold mx-auto w-full text-center md:text-4xl md:text-left md:ml-32 md:mt-12" >
          Account Settings
        </h1>
        
        <img src={user.image} alt="profile picture" className="w-20 h-20 rounded-full mx-auto mr-10 md:w-36 md:h-36" />
      </div>
      
      <div className="flex flex-col justify-center mt-5 w-full">
        <h1 className="text-base font-bold ml-5 
          md:text-3xl md:ml-20 md:mt-10">
          Profile
        </h1>
        <div className="flex flex-row justify-between mx-5 mt-5 
          md:mt-10 md:ml-20 md:flex-col">
          <h2 className="text-base md:text-xl md:font-semibold">
            First Name
          </h2> 
          <input
            className="border-b-2 border-gray-300 w-1/2 
            md:outline md:rounded md:border-black md:border-0 md:p-3 md:mt-2"
            defaultValue={user.name.split(' ')[0]}
            type='text'
            id='first-name'
            placeholder='First Name'
          />
        </div>
        <div className="flex flex-row justify-between mx-5 mt-5 
          md:mt-10 md:ml-20 md:flex-col">
          <h2 className="text-base md:text-xl md:font-semibold">
            Last Name
          </h2> 
          <input
            className="border-b-2 border-gray-300 w-1/2 
            md:outline md:rounded md:border-black md:border-0 md:p-3 md:mt-2"
            defaultValue={user.name.split(' ')[1]}
            type='text'
            id='last-name'
            placeholder='Last Name'
          />
        </div>

        <div className="flex flex-row justify-between mx-5 mt-5 
          md:mt-10 md:ml-20 md:flex-col">
          <h2 className="text-base md:text-xl md:font-semibold">
            Email
          </h2> 
          <input
            className="border-b-2 border-gray-300 w-1/2 
            md:outline md:rounded md:border-black md:border-0 md:p-3 md:mt-2"
            defaultValue={user.email}
            type='text'
            id='email'
            placeholder='Email'
            />
          </div>

        {/* <div className="flex flex-row justify-between mx-5 mt-5 
        md:mt-10 md:ml-20 md:flex-col">
          <h2 className="text-base 
          md:text-xl md:font-semibold">Password</h2> 
          <input
            className="border-b-2 border-gray-300 w-1/2 
          md:outline md:rounded md:border-black md:border-0 md:p-3 md:mt-2"
            defaultValue={password}
            type='password'
            id='password'
            placeholder='Password'
          />
        </div> */}
      </div>

      <div className="flex flex-col justify-center mt-16 md:mt-16 w-full">
        <h1
          className="text-base font-bold ml-5 
        md:text-3xl md:ml-20 md:mt-10"
        >
          Notifications
        </h1>

        <div
          className="flex flex-row justify-between mx-5 mt-5 
        md:mt-10 md:ml-20 md:flex-row"
        >
          <h2
            className="text-base 
          md:text-xl md:font-semibold"
          >
            Marketing
          </h2>
          <input
            className="w-5 mr-5
          md:w-7 md:mr-20"
            type="checkbox"
          />
        </div>
        <div
          className="flex flex-row justify-between mx-5 mt-5 
        md:mt-10 md:ml-20 md:flex-row"
        >
          <h2 className="md:text-xl md:font-semibold">Reminders</h2>
          <input
            className="w-5 mr-5
          md:w-7 md:mr-20"
            type="checkbox"
          />
        </div>
      </div>

      <div className="flex-grow flex flex-col justify-end items-center">
        <button className="border bg-custom-logout text-black w-auto px-40 py-2 font-bold rounded-xl text-lg mt-96" onClick={handleLogOut}>Sign Out</button> 
        {/* fix the button */}
      </div>
    </main>
  );
}
