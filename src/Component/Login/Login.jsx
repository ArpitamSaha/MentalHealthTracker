import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
import { Link } from "react-router-dom";

const API_BASE_URL = "https://localhost:7087/api";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [popupMessage, setPopupMessage] = useState({ message: "", type: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setPopupMessage({ message: "", type: "" });

    try {
      const response = await axios.post(`${API_BASE_URL}/Auth/login`, loginData);
      console.log("Login Successful:", response.data);

      localStorage.setItem("user", JSON.stringify(response.data));
      setUser(response.data);

      setPopupMessage({ message: "Login Successful!", type: "success" });

      setTimeout(() => {
        if (response.data.roles === "HR") {
          navigate("/admin-dashboard");
        } else {
          navigate("/user-dashboard");
        }
      }, 2000); // Redirect after 2 seconds
    } catch (error) {
      setPopupMessage({ message: "Invalid credentials, please try again.", type: "error" });
    }
  };

  return (
    <div className="login-container">
      {popupMessage.message && (
        <div className={`popup-message ${popupMessage.type}`}>
          {popupMessage.message}
        </div>
      )}

      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />

        <button type="submit">Login</button>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </form>
    </div>
  );
};

export default Login;
