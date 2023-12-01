// AuthError.js
import React from "react";

export default function AuthError(props) {
  return (
    <div className="container bg-light bd-gradient text-danger" id="authError">
      <p className="text-center text-dark">Please fix these issues:</p>
      <div>
        <ul>
          {props.signUpErrors.nameErrors.map((error, key) => (
            <li key={key}>{error}</li>
          ))}
          {props.signUpErrors.passwordErrors.map((error, key) => (
            <li key={key}>{error}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
