export function cleanSignUpData(signUpData) {
  const { firstName, lastName, email, password, confirmPassword } = signUpData;
  const authResults = { errors: { passwordErrors: [], nameErrors: [] }, authStatus: "" };

  // Remove trailing white spaces
  const cleanData = [firstName, lastName, email, password, confirmPassword].map(data => data.trim());
  const [cleanFirstName, cleanLastName, cleanEmail, cleanPassword, cleanConfirmPassword] = cleanData;

  function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const regexErrors = [
      "Password must contain at least one letter (uppercase or lowercase).",
      "Password must contain at least one digit.",
      "Password must have at least one special character e.g @$!%*#?",
      "Password must be at least 8 characters long.",
    ];

    if (passwordRegex.test(password) && password === cleanConfirmPassword) {
      return true;
    } else if (password !== cleanConfirmPassword) {
      authResults.errors.passwordErrors.push("Passwords do not match.");
      return false;
    } else {
      if (!/(?=.*[A-Za-z])/.test(password)) {
        authResults.errors.passwordErrors.push(regexErrors[0]);
      }

      if (!/(?=.*\d)/.test(password)) {
        authResults.errors.passwordErrors.push(regexErrors[1]);
      }

      if (!/(?=.*[@$!%*#?&])/.test(password)) {
        authResults.errors.passwordErrors.push(regexErrors[2]);
      }

      if (!/.{8,}/.test(password)) {
        authResults.errors.passwordErrors.push(regexErrors[3]);
      }

      return false;
    }
  }

  function validateName(name) {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  }

  const isFirstNameValid = validateName(cleanFirstName);
  const isLastNameValid = validateName(cleanLastName);
  const isPasswordValid = validatePassword(cleanPassword);

  if (!isFirstNameValid) {
    authResults.errors.nameErrors.push("First name must be alphabetical (a-z).");
  }

  if (!isLastNameValid) {
    authResults.errors.nameErrors.push("Last name must be alphabetical (a-z).");
  }

  authResults.authStatus = (authResults.errors.nameErrors.length === 0 && authResults.errors.passwordErrors.length === 0) ? "Successful" : "Unsuccessful";
  authResults.firstName = cleanFirstName;
  authResults.lastName = cleanLastName;
  authResults.email = cleanEmail;
  authResults.password = cleanConfirmPassword;

  return authResults;
}

