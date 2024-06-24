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
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <LoginHeaders Login={loginText} Message={messageText} />

      <form  className="w-full max-w-sm bg-white p-8 rounded shadow-md" onSubmit={handlerSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="text"
            placeholder="Email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
      </form>

      <div className="mt-4">
        <p className="text-gray-600">Don't have an account?</p>
        <span className="text-blue-500 hover:underline cursor-pointer">Sign up</span>
      </div>
    </main>
  )
}
