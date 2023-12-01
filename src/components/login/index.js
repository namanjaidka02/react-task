import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [isValid, setIsValid] = useState(true);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) setUsers(JSON.parse(storedUsers));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = users.length < 1 ? 0 : users[users.length - 1].id + 1;
    const newUser = {
      id: userId,
      email: email,
      password: password,
    };
    const newUsers = [...users, newUser];

    const hasUppercase = /[A-Z]/.test(password);
    localStorage.setItem("users", JSON.stringify(newUsers));
    setIsValid(hasUppercase);
    setUsers(newUsers);

    if (password || email) {
      setButtonClicked(true);
    } else {
      setButtonClicked(false);
    }

    setPassword("");
    setEmail("");
  };

  const isDisabled = password.trim() === "" || email.trim() === "";

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
        <input
          type="password"
          placeholder="password"
          value={password}
          className="email-input"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {!isValid && (
          <p style={{ color: "red" }}>
            Password must have at least one uppercase letter
          </p>
        )}

        <button className="submit-btn" disabled={isDisabled}>
          Submit
        </button>
        {buttonClicked && (
          <Link to="/products" className="link">
            Go to Products
          </Link>
        )}
      </form>
    </div>
  );
};

export default Login;
