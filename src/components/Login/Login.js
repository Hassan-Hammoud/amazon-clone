import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
// import { useAuth } from "../../context/GlobalState";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://i.ibb.co/PDPjBrM/Amazon-Logo-preview.png"
          alt="logo-img"
          className="login-logo"
        />
      </Link>
      <div className="login-container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-signInBtn" type="submit" onClick={signIn}>
            Sign In
          </button>
          <p>
            By continuing, you agree ti Amazon's Fake Clone conditions of use
            and privacy notice.
          </p>
          <button className="login-registerBtn" onClick={register}>
            Create Your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
