'use client';

import React, { useState } from 'react'
import LoginHeaders from '../../loginHeaders';


export default function LoginForm() {

  const loginText = 'Login';
  const messageText = 'Welcome Back';

  
  const loginButton = async (formData : FormData) => {
    const email = formData.get('email');
    const password = formData.get('password');
  }
  

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-custom-bg">
      <LoginHeaders Login={loginText} Message={messageText}/>

      <form action={loginButton} className="w-full max-w-sm p-8 rounded" >
        <div className="mb-6">
          <input
            type="text"
            placeholder="Email"
            id="email"
            name="email"
            className="bg-custom-input border rounded-xl w-full py-3.5 px-3 text-custom-input-text placeholder-custom-input-text leading-tight"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            id="password"
            name='password'
            className="bg-custom-input border rounded-xl w-full py-3.5 px-3 text-custom-input-text placeholder-custom-input-text leading-tight"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-custom-button hover:bg-blue-500 text-white font-medium py-3 px-3 rounded-xl focus:outline-none focus:shadow-outline mx-auto w-full"
          >
            Login
          </button>
        </div>
      </form>

      <div className="mt-4 flex justify-center align-middle">
        <p className="text-black font-semibold text-lg">Don&apos;t have an account? </p>
        <span className="text-blue-500 hover:underline cursor-pointer font-semibold pl-1 text-lg"> Sign up</span>
      </div>
    </main>
  );
}
