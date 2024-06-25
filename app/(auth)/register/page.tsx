'use client';

import LoginHeaders from "@/app/ui/loginHeaders";

const { useState } = require("react");

export default function Register() {
  const loginText = 'DecoAR';
  const messageText = 'Start visualizing your dream room';

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword ] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-custom-bg">
      <LoginHeaders Login={loginText} Message={messageText} />

      <form className="w-full max-w-sm p-8 rounded">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Username"
            id="username"
            className="bg-custom-input border rounded-xl w-full py-3.5 px-3 text-custom-input-text placeholder-custom-input-text leading-tight"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
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
        <div className="mb-6">
          <input
            type="password"
            placeholder="Confirm Password"
            id="confirmPassword"
            className="bg-custom-input border rounded-xl w-full py-3.5 px-3 text-custom-input-text placeholder-custom-input-text leading-tight"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-custom-button hover:bg-blue-500 text-white font-medium py-3 px-3 rounded-xl focus:outline-none focus:shadow-outline mx-auto w-full"
          >
            Create Account
          </button>
        </div>
      </form>

      <div className="mt-4 text-center">
        <span className="text-gray-600 text-sm">
          By continuing, you agree to the <a href="#" className="text-blue-500 hover:underline">Terms of Use</a>. Read our <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
        </span>
        <p className="mt-4 text-black font-semibold text-lg">Already have an account?</p>
        <span className="text-blue-500 hover:underline cursor-pointer font-semibold text-lg">Login</span>
      </div>
    </main>
  );
}