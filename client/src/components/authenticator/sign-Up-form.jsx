import React, { useState } from "react";
import "../../assets/styles/authApp/sign-up.scss";
import AuthError from "./authenticationr-error";
import { cleanSignUpData } from "../../controllers/signUpAuthenticator";
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import postData from "../../controllers/postData";
import { checkAuthUrl } from "../../controllers/urlChecker";

export default function SignUpForm() {
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [signUpErrors, setSignUpErrors] = useState({ nameErrors: [], passwordErrors: [] });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [postSignUpMessage, updateMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  //set redirect path
  const queryParams = new URLSearchParams(window.location.search);
  const signInRoute = checkAuthUrl() ? `/authuser/signin/?${queryParams}` : "/authuser/signin";

  function handleInputChange(event) {
    const { name, value } = event.target;
    if (formSubmitted) {
      setSignUpErrors({ nameErrors: [], passwordErrors: [] });
    }
    setSignUpData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleRedirect(user) {
    window.location = checkAuthUrl() ? `/checkout/?${queryParams}&user=${user}` : '/chooseplan/?user=' + user;
    return;
  }

  function handleSignUp(event) {
    event.preventDefault();
    setFormSubmitted(true);
    const cleaningResults = cleanSignUpData(signUpData);
    if (cleaningResults.authStatus === "Successful") {
      const data = {
        firstname: cleaningResults.firstName,
        lastname: cleaningResults.lastName,
        email: cleaningResults.email,
        password: cleaningResults.password,
      };
      postData("https://backend-phki.onrender.com/register", data).then(function (res) {
        const errorRegex = /MongoServerError: E11000 duplicate key error(.*)/;
        errorRegex.test(res.message)
          ? updateMessage("Account Already Exists!")
          : updateMessage("Sign Up Successful");
        setShowSuccessMessage(true);
        !errorRegex.test(res.message)
          ? handleRedirect(res.user)
          : null;
        setTimeout(() => { setShowSuccessMessage(false); }, 2000);
      });
      return;
    } else {
      handleSignUpErrors(cleaningResults.errors);
      return;
    }
  }

  function handleSignUpErrors(errorObject) {
    const { nameErrors, passwordErrors } = errorObject;
    setSignUpErrors({ nameErrors, passwordErrors });
  }

  function toggleShowPassword() {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }

  function toggleShowConfirmPassword() {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
  }

  return (
    <div>
      <div className="container sign-up-form bg-white shadow-sm">
        <h3 className="text-center">
          Welcome to <span className="text-primary">KHW</span>
        </h3>
        {showSuccessMessage && (
          <div
            className="bg-primary text-light d-flex justify-content-center align-items-center"
            style={{ paddingTop: "10px", marginBottom: "10px" }}
          >
            <p>{postSignUpMessage}</p>
          </div>
        )}
        {signUpErrors.nameErrors.length > 0 || signUpErrors.passwordErrors.length > 0 ? (
          <AuthError signUpErrors={signUpErrors} />
        ) : null}
        <form role="role" name="sign-in-form" onSubmit={handleSignUp}>
          <label htmlFor="firstName">First name: </label>
          <input
            name="firstName"
            id="firstName"
            type="text"
            className="form-control"
            placeholder="First Name"
            value={signUpData.firstName}
            onChange={handleInputChange}
            autoComplete="new-username"
            required
          />
          <label htmlFor="lastName">Last name: </label>
          <input
            name="lastName"
            id="lastName"
            type="text"
            className="form-control"
            placeholder="Last Name"
            value={signUpData.lastName}
            onChange={handleInputChange}
            autoComplete="new-username"
            required
          />
          <label htmlFor="email">Email: </label>
          <input
            name="email"
            id="email"
            type="email"
            className="form-control"
            placeholder="Email"
            value={signUpData.email}
            onChange={handleInputChange}
            autoComplete="new-user-email"
            required
          />
          <label htmlFor="password">Password: </label>
          <div className="password-input-wrapper">
            <input
              name="password"
              id="password"
              className="form-control"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              value={signUpData.password}
              onChange={handleInputChange}
              autoComplete="new-password"
              required
            />
            <span className="password-toggle" onClick={toggleShowPassword}>
              {showPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
            </span>
          </div>
          <label htmlFor="confirmPassword">Confirm Password: </label>
          <div className="password-input-wrapper">
            <input
              name="confirmPassword"
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              className="form-control"
              placeholder="Confirm Password"
              value={signUpData.confirmPassword}
              onChange={handleInputChange}
              autoComplete="new-password"
              required
            />
            <span className="password-toggle" onClick={toggleShowConfirmPassword}>
              {showConfirmPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
            </span>
          </div>
          <button className="btn btn-primary" type="submit">
            Sign Up
          </button>
          <p className="form-text text-center">Already have an account?</p>
          <p className="form-text text-center">
            <a href={signInRoute} rel="noopener">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
