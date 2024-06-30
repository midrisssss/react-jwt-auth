import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:5000/register", {
        username,
        password,
      });
      setUsername("");
      setPassword("");
      alert("User Registered");
    } catch (error) {
      console.log("Error Registerung:", error);
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="on"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
