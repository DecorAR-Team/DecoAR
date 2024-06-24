'use client';

import LoginHeaders from "@/components/loginHeaders";
const { useState } = require("react");

export default function Register() {
  const loginText = 'DecoAR';
  const messageText = 'Start visualizing your dream room';

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword ] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  
  return (
    <main>

  <LoginHeaders Login={loginText} Message={messageText}/>

  <form >
    <input 
    type="text" 
    placeholder="Username"
    id="username"
    value={username}
    onChange={(e) => setUsername(e.target.value)} 
    />
    <input type="text" 
    placeholder="Email"
    id="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)} />
    <input type="password" 
    placeholder="Password"
    id="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)} />
    <input type="password" 
    placeholder="Confirm Password"
    id="confirmPassword"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)} />
    <button type="submit">Create Account</button>
</form>

  <div>
    <span>By continuing, you agree to the Terms of Use. Read our Privacy Policy.</span>
    <p>{`Already have an account?`}</p>
      <span>Login</span>
  </div>
</main>
  );
}