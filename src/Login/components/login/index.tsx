import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import "./login.styles.css";

interface LoginProps {} // Empty interface for now (can be extended if needed)

const Login: React.FC<LoginProps> = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !password) {
      console.log("Enter Details");
    }
    const user = await fetch("http://localhost:6005/Login", {
      method: "post",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
      }),
    });
    const response = await user.json();
    console.log(response);
    if (response) {
      navigate("/menu");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Welcome Back</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            placeholder="your name "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" variant="default" onClick={() => handleSubmit}>
          Log In
        </Button>
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
