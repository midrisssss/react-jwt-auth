import React, { useState } from "react";

const Login = ({ token, onLogin, onLogout }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    onLogin(username, password);
  };

  return (
    <>
      <div>
        {token ? (
          (
            <div>
                <h2>Log Out</h2>
                <p>Youre loged in with : {token}</p>
                <button onClick={onLogout}>Log Out</button>
            </div>
          )
        ) : (
          <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  id="username"
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  autoComplete="on"
                />
              </div>
              <button type="submit">Login</button>
            </form>
            {token && <p>Token : {token}</p>}
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
