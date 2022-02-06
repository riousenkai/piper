import React, { useEffect, useState } from "react";

const Login = () => {
  const [loginCred, setLoginCred] = useState('')
  const [pass, setPass] = useState('')

  return (
    <div>
      <div>Log in to use Piper</div>
      <input type="text" value={loginCred} onChange={(e) => setLoginCred(e.target.value)} />
      <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
    </div>
  );
};

export default Login;
