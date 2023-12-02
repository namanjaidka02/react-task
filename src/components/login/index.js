import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isSubmissionSuccessful, setisSubmissionSuccessful] = useState(false);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) setUsers(JSON.parse(storedUsers));
  }, []);

  const validateEmail = (value) => {
    const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
    return emailRegex.test(value);
  };

  const validatePassword = (value) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/;
    return passwordRegex.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    setIsValidEmail(isEmailValid);
    setIsValidPassword(isPasswordValid);

    if (isEmailValid && isPasswordValid) {
      const userId = users.length < 1 ? 0 : users[users.length - 1].id + 1;
      const newUser = {
        id: userId,
        email: email,
        password: password,
      };
      const newUsers = [...users, newUser];

      localStorage.setItem("users", JSON.stringify(newUsers));

      setUsers(newUsers);
      setisSubmissionSuccessful(true);

      if (!isEmailValid || !isPasswordValid) return;
      setPassword("");
      setEmail("");
    } else {
      alert("Please enter a valid Email and Password");
      setisSubmissionSuccessful(false);
    }
  };

  const isDisabled = password.trim() === "" || email.trim() === "";
  // !isValidPassword ||
  // !isValidEmail;

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="email"
          value={email}
          className="name-input"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {!isValidEmail && (
          <p style={{ color: "red" }}>Please enter a valid email address</p>
        )}
        <input
          type="password"
          placeholder="password"
          value={password}
          className="email-input"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {!isValidPassword && (
          <p style={{ color: "red" }}>
            Password must have at least one uppercase letter, one digit, and one
            special character
          </p>
        )}

        <button className="submit-btn" disabled={isDisabled}>
          Submit
        </button>

        {isSubmissionSuccessful && (
          <Link to="/products" className="link">
            Go to Products
          </Link>
        )}
      </form>
    </div>
  );
};

export default Login;
