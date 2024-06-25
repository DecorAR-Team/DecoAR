'use client';

import React, { useState } from 'react'
import LoginHeaders from './loginHeaders'


export default function LoginForm() {

  const loginText = 'Login';
  const messageText = 'Welcome Back';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);

    } catch (e) {
      console.log(`There has been an error with handlerSubmit: ${e}`);
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-custom-bg">
      <LoginHeaders Login={loginText} Message={messageText}/>

      <form className="w-full max-w-sm p-8 rounded" onSubmit={handlerSubmit}>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Email"
            id="email"
            className="bg-custom-input border rounded-xl w-full py-3.5 px-3 text-custom-input-text placeholder-custom-input-text leading-tight"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="bg-custom-input border rounded-xl w-full py-3.5 px-3 text-custom-input-text placeholder-custom-input-text leading-tight"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
