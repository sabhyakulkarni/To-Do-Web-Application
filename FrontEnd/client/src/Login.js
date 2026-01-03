import axios from "axios";
import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await axios.post("http://localhost:3000/api/auth/login", {
      email,
      password,
    });
    localStorage.setItem("token", res.data.token);
    window.location = "/tasks";
  };

  return (
    <div className="login-container">
      <h2>Welcome Back</h2>

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

      <button onClick={login}>Login</button>
      <p
        onClick={() => (window.location = "/signup")}
        style={{ cursor: "pointer", marginTop: "10px" }}
      >
        New user? Create account
      </p>
    </div>
  );
}
