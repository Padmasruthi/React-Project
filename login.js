import React, { useState } from "react";
import image from "./assets/Cryptonext.png";
import logoImage from "./assets/cryptonext logo.png";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { FaGoogle, FaApple, FaWallet } from "react-icons/fa";
import axios from "axios";

export const LoginSignupForm = () => {
  const [activeForm, setActiveForm] = useState("login");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const navigate = useNavigate();

  const showLoginForm = () => setActiveForm("login");
  const showSignupForm = () => setActiveForm("signup");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:6001/user/signin", {
        email: loginEmail,
        password: loginPassword,
      });

      if (response.data.status) {
        alert("Login successful!");
        navigate("/layout"); // Navigate to the layout page
      } else {
        alert(response.data.error || "Invalid login credentials");
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error);
      alert("Error during login. Please try again.");
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    if (signupName && signupEmail && signupPassword) {
      try {
        const response = await axios.post("http://localhost:6001/user/signup", {
          name: signupName,
          email: signupEmail,
          password: signupPassword,
        });
        console.log(response.data);

        if (response.data.msg) {
          alert("Signup successful! You can now login.");
          setActiveForm("login"); // Switch to login form
        } else {
          alert(response.data.error || "Signup failed. Please try again.");
        }
      } catch (error) {
        console.error("Signup error:", error.response?.data || error);
        alert("Error during signup. Please try again.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="container-fluid   signup">
      <div className="row">
        <div className="col-md-6  ">
          <div className="d-flex  gap-3 p-3  logo">
            <img
              src={logoImage}
              alt="logo-image"
              className="form-image  img-fluid"
            />
            <h2>Cryptonext</h2>
          </div>

          <div className="button-group  mb-2">
            <button
              className={`btn ${activeForm === "login" ? "active" : ""} fs-3 `}
              onClick={showLoginForm}
            >
              Login
            </button>

            <button
              className={`btn ${activeForm === "signup" ? "active" : ""}  fs-3`}
              onClick={showSignupForm}
            >
              SignUp
            </button>
          </div>

          {activeForm === "login" && (
            <div className="login-form">
              <form onSubmit={handleLoginSubmit}>
                <div className="form-group">
                  <label className="form-label mt-4 fs-4">Email Address</label>
                  <input
                    type="email"
                    className="form-control fs-5"
                    placeholder="Enter your email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    autoComplete="email"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label mt-4 fs-4">Password</label>
                  <input
                    type="password"
                    className="form-control fs-5"
                    placeholder="Enter your password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary  w-100  mt-5 fs-4"
                >
                  Login
                </button>

                <div>
                  <button className="w-100 mt-5 fs-4 btn btn-outline-secondary text-dark icons ">
                    <FaGoogle />
                    Continue with Google
                  </button>
                  <button className="w-100 mt-5 fs-4 btn btn-outline-secondary text-dark  icons">
                    <FaApple />
                    Continue with Apple
                  </button>
                  <button className="w-100 mt-5 fs-4 btn btn-outline-secondary text-dark icons ">
                    <FaWallet />
                    Continue with Wallet
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeForm === "signup" && (
            <div className="signup-form">
              <form onSubmit={handleSignupSubmit}>
                <div className="form-group">
                  <label className="form-label mt-4 fs-4">Name</label>
                  <input
                    type="text"
                    className="form-control fs-5"
                    placeholder="Enter your name"
                    value={signupName}
                    onChange={(e) => setSignupName(e.target.value)}
                    autoComplete="name"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label mt-4 fs-4">Email Address</label>
                  <input
                    type="email"
                    className="form-control fs-5"
                    placeholder="Enter your email"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    autoComplete="email"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label mt-4 fs-4">Password</label>
                  <input
                    type="password"
                    className="form-control fs-5"
                    placeholder="Enter your password"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    autoComplete="new-password"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary  w-100  mt-5 fs-4"
                >
                  Create an Account
                </button>

                <div>
                  <button className="w-100 mt-5 fs-4 btn btn-outline-secondary text-dark  icons ">
                    <FaGoogle />
                    Continue with Google
                  </button>
                  <button className="w-100 mt-5 fs-4 btn btn-outline-secondary text-dark  icons">
                    <FaApple />
                    Continue with Apple
                  </button>
                  <button className="w-100 mt-5 fs-4 btn btn-outline-secondary text-dark  icons">
                    <FaWallet />
                    Continue with Wallet
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        <div className="col-md-6">
          <img
            src={image}
            alt="cryptonext-image"
            className="form-image  img-fluid  h-100"
          />
        </div>
      </div>
    </div>
  );
};
