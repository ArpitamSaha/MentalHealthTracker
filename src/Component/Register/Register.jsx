import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";

const API_BASE_URL = "https://localhost:7087/api";

const Register = () => {
  const [formData, setFormData] = useState({
    empId: "",
    username: "",
    email: "",
    password: "",
    roles: "Employee",
  });

  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    try {
      const response = await axios.post(`${API_BASE_URL}/Employee`, formData);
      console.log("Registration Successful:", response.data);
      setMessage("Registration successful! Redirecting to login...");
      setMessageType("success");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      console.error("Registration Error:", error.response?.data || error.message);
      setMessage(error.response?.data?.message || "Registration failed, please try again.");
      setMessageType("error");
    }
  };

  return (
    <div className="register-container">
      {message && <div className={`popup-message ${messageType}`}>{message}</div>}
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input type="text" name="empId" placeholder="Employee ID" onChange={handleChange} required />
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required minLength="8"
  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}"
  title="Password must be at least 8 characters long, and include at least one uppercase letter, one lowercase letter, one number, and one special character."
/>
        <select name="roles" onChange={handleChange} required>
          <option value="Employee">User</option>
          <option value="HR">HR</option>
        </select>
        <button type="submit">Register</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
};

export default Register;