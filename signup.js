import React from "react";
// import { Link } from "react-router-dom";
import image from './assets/Cryptonext.png';


export const Signup = () => {
  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-center">SignUp</h2>

          <form>
            <div className="form-group">
              <label for="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label for="password" className="form-label  mt-4">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
              />
            </div>

            <input type="checkbox" id="updated" />
            <label for="updated" className="form-label">
              Please keep me updated by email with latest crypto news, research
              findings, reward programs,event updates and more information from
              cryptonext
            </label>

            <button
              type="submit"
              className="bg-primary rounded border-0 w-100 mt-5 text-white p-2 "
            >
              Create Account
            </button>
          </form>
        </div>

        <div className="col-md-6">
          <img src={image} className="form-image  img-fluid" />
        </div>
      </div>
    </div>
  );
};
