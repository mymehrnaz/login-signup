import React, { useState } from "react";
import "../App.css"; // ✅ استایل رو درست ایمپورت کن

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    // یک ولیدیشن ساده
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Signup Data:", { username, email, password });
    alert("🎉 Signup successful!");

    // پاک کردن فرم بعد از سابمیت
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="container">
      <h1>Sign Up Form</h1>
      <form onSubmit={handleSignup}>
        <div>
          <label className="label" htmlFor="username">
            Username:
          </label><br/>
          <input
            id="username"
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label className="label" htmlFor="email">
            Email:
          </label><br/> 
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="label" htmlFor="password">
            Password:
          </label><br/>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label className="label" htmlFor="confirmPassword">
            Confirm Password:
          </label><br/>
          <input
            id="confirmPassword"
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
