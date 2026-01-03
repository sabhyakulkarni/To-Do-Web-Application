import axios from "axios";
import { useState } from "react";
import "./Login.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    await axios.post("http://localhost:3000/api/auth/register", {
      name,
      email,
      password,
    });
    window.location = "/";
  };

  return (
    <div className="login-container">
      <h2>Create Account</h2>

      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={signup}>Sign Up</button>
    </div>
  );
}
