'use client';

import { useState } from "react";

export default function ProfilePage () {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
        <h1>Profile</h1>

        <form>
          {/* <Image alt='Profile Image' /> */}
          <input
            defaultValue={username}
            type='text'
            id='username'
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            defaultValue={email}
            type='email'
            id='email'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)} 
          />
        </form>
        
        <div>
          <button> Update Account</button>
          <button>Delete Account</button>
        </div>
    </div>
  );
}