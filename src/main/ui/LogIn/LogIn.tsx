import React, {useState} from "react";

export const LogIn = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
      <div>
        <div>
            Sign in
        </div>
        <div>
            Email
        </div>
        <div>
            <input value={email} onChange={ (e) => setEmail(e.target.value)}/>
        </div>
        <div>
            Password
        </div>
        <div>
            <input value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div>
            <button>Login</button>
        </div>
          {email}
      </div>
  );
};
