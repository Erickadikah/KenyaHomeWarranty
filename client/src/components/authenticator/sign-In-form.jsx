import React, { useState } from "react";
import "../../assets/styles/authApp/sign-in.scss";
import postData from "../../controllers/postData";
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { checkAuthUrl } from "../../controllers/urlChecker";

export default function SignInForm() {
  const [signInFormData, setSignInFormData] = useState({ email: "", password: "" });
  const [apiResponseMessage, setApiResponseMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const queryParams = new URLSearchParams(window.location.search);
  const signUpRoute = checkAuthUrl() ? `/authuser/signup/?${queryParams}` : "/authuser/signup";
  //console.log(signUpRoute);
  function handleRedirect(user) {
    window.location = checkAuthUrl() ? `/checkout/?${queryParams}&user=${user}` : '/userdashboard/?user=' + user;
    return;
  }

  function handleLogIn(event) {
    event.preventDefault();
    const { email, password } = signInFormData;
    // Make API call here
    postData("https://backend-phki.onrender.com/login", { email: email, password: password }).then(function (res) {
      console.log("Server response: ", res);
      if (res && res.message) {
        setApiResponseMessage(res.message);
        res.message === "Login successful" ? handleRedirect(res.user) : null;
      }
    });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setSignInFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function toggleShowPassword() {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }

  return (
    <div>
      {apiResponseMessage && (
        <div className="bg-primary text-white" style={{ maxWidth: "400px", margin: "5px auto", padding: "10px" }}>
          {apiResponseMessage}
        </div>
      )}
      <div className="container sign-in-form  bg-white shadow-sm">
        <h3 className="text-center">
          <span className="text-primary">KHW</span> Welcomes You Back!
        </h3>
        <form role="role" name="sign-up-form" onSubmit={handleLogIn}>
          <label htmlFor="email">Email: </label>
          <input
            name="email"
            id="email"
            className="form-control"
            placeholder="email"
            autoComplete="user-email"
            onChange={handleInputChange}
            type="email"
            required
          />
          <label htmlFor="password">Password: </label>
          <div className="password-input-wrapper">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              id="user-password"
              className="form-control"
              placeholder="password"
              autoComplete="current-password"
              onChange={handleInputChange}
              required
            />
            <span className="password-toggle" onClick={toggleShowPassword}>
              {showPassword ? (
                <MdVisibilityOff size={20} />
              ) : (
                <MdVisibility size={20} />
              )}
            </span>
          </div>
          <button className="btn btn-primary" type="submit">
            Sign In
          </button>
          <p className="text-center form-text">Don't have an account yet?</p>
          <p className="text-center form-text">
            <a href={signUpRoute} rel="noopener">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
