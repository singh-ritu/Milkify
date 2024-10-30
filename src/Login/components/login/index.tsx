import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { Coffee, Milk, Mail, Lock, AlertCircle } from "lucide-react";
import { login } from "../../../store/userSlice";
import { useDispatch } from "react-redux";

import "./login.styles.css";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      console.log("Enter Details");
      setError("Details are Mandatory");
      return;
    }
    try {
      const user = await fetch("http://localhost:6005/Login", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (!user.ok) {
        setError("User Not found");
        return;
      }
      const response = await user.json();
      console.log(response);
      const token = response.message;

      localStorage.setItem("token", token);

      const username = response.user.name;
      console.log(username);

      dispatch(login({ username }));
      navigate("/menu");
    } catch (err: any) {
      console.log(err);
      setError(err.error);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-title">Welcome Back</h2>
        {error && (
          <div className="login-alert">
            <AlertCircle size={20} />
            <span>{error}</span>
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <div className="input-wrapper">
            <Mail className="input-icon" />
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input-wrapper">
            <Lock className="input-icon" />
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <Button type="submit" variant="default">
          Log In
        </Button>
        <p className="auth-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
        <div className="auth-decoration">
          <Coffee className="icon coffee" />
          <Milk className="icon milk" />
        </div>
      </form>
    </div>
  );
};

export default Login;
