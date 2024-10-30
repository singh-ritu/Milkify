import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { Lock, Mail, User, Coffee, Milk, AlertCircle } from "lucide-react";
import "./signUp.styles.css";
import { BACKEND_URL } from "../../../constants";

interface SignupProps {}

const SignUp: React.FC<SignupProps> = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password || !name) {
      console.log("Enter Details");
      setError("Details are Mandatory");
      return;
    }

    try {
      const user = await fetch(`${BACKEND_URL}/signUp`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const result = await user.json();
      console.log(result);
      const token = result.message;
      localStorage.setItem("token", token);
      if (result) {
        navigate("/menu");
      }
    } catch (err) {
      console.log("signUp:", err);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-title">Create an Account</h2>
        {error && (
          <div className="login-alert">
            <AlertCircle size={20} />
            <span>{error}</span>
          </div>
        )}
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <div className="input-wrapper">
            <User className="input-icon" />
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <div className="input-wrapper">
            <Mail className="input-icon" />
            <input
              type="email"
              id="email"
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
          Sign Up
        </Button>
        <p className="auth-link">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
        <div className="auth-decoration">
          <Coffee className="icon coffee" />
          <Milk className="icon milk" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
