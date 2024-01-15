import React from "react";
import "./login.css";
// import Logo from "https://i.ibb.co/PDPjBrM/Amazon-Logo-preview.png";
import { Link } from "react-router-dom";

const Login = () => {
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
          <h5 for="email">Email</h5>

          <input id="email" type="email" value="" />

          <h5>Password</h5>
          <input type="password" value="" />

          <button className="login-signInBtn" type="submit">
            Sign In
          </button>
          <p>
            By continuing, you agree ti Amazon's Fake Clone conditions of use
            and privacy notice.
          </p>
          <button className="login-registerBtn">
            Create Your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
