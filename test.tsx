"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./login.css";

export default function LoginPage() {
  const router = useRouter();

  // Form State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Error State
  const [error, setError] = useState("");

  // Hardcoded Credentials
  const staticUser = "admin";
  const staticPass = "12345";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === staticUser && password === staticPass) {
      router.push("/eligibility");
    } else {
      setError("Invalid Username or Password");
    }
  };

  return (
    <div className="loginWrapper">
      <div className="loginBox">
        <h2>Login</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleLogin}>
          {/* Username */}
          <input
            type="text"
            name="username"
            id="username"
            aria-label="Username"
            data-testid="username-input"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            id="password"
            aria-label="Password"
            data-testid="password-input"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            data-testid="login-button"
          >
            Login
          </button>
        </form>

        <p className="hint">
          Demo Login: <b>admin / 12345</b>
        </p>
      </div>
    </div>
  );
}
