import React, { useState, useEffect } from "react";

// import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

import "./employeeDashboard.css";

const API_BASE_URL = "https://localhost:7087/api";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AF19FF",
  "#FF4563",
  "#FFBF00",
];

const EmployeeDashboard = () => {
  const [formData, setFormData] = useState({
    empId: "",

    moodLevel: "",

    stressLevel: "",

    sleepQuality: "",

    energyLevel: "",

    physicalActivity: "",

    selfCareActivity: "",
  });

  const [empId, setEmpId] = useState("");

  const [employeePrograms, setEmployeePrograms] = useState([]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${API_BASE_URL}/WellnessProgram`,
        formData
      );

      console.log("Program submitted successfully:", response.data);

      setFormData({
        empId: "",

        moodLevel: "",

        stressLevel: "",

        sleepQuality: "",

        energyLevel: "",

        physicalActivity: "",

        selfCareActivity: "",
      });
    } catch (error) {
      console.error("Error submitting program:", error);
    }
  };

  const handleSearch = () => {
    if (!empId) return;

    fetch(`${API_BASE_URL}/WellnessProgram/employee/${empId}`)
      .then((response) => response.json())

      .then((data) => setEmployeePrograms(data))

      .catch((error) =>
        console.error("Error fetching employee programs:", error)
      );
  };

  const handleLogout = () => {
    localStorage.removeItem("token");

    sessionStorage.removeItem("token");

    navigate("/login");
  };

  const convertData = (data, key) => {
    const keyCounts = data.reduce((acc, program) => {
      const value = program[key];

      if (acc[value]) {
        acc[value] += 1;
      } else {
        acc[value] = 1;
      }

      return acc;
    }, {});

    return Object.keys(keyCounts).map((k) => ({
      name: k,
      value: keyCounts[k],
    }));
  };

  const renderPieChart = (data, dataKey, title) => {
    const convertedData = convertData(data, dataKey);

    return (
      <div className="pie-chart-container">
        <h3>{title}</h3>
        <PieChart width={400} height={400}>
          <Pie
            data={convertedData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label
          >
            {convertedData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    );
  };

  return (
    <div className="employee-dashboard">
      <div className="dashboard-header">
        <h1>Employee Dashboard</h1>
      </div>
      <h2>Available Wellness Programs</h2>
      <ul className="wellness-programs-list">
        <li>
          <h3>Mood Tracking</h3>
          <p>Monitor your daily mood changes and emotional well-being.</p>
        </li>
        <li>
          <h3>Stress Management</h3>
          <p>
            Evaluate your stress levels and track changes over time (Low,
            Medium, High).
          </p>
        </li>
        <li>
          <h3>Sleep Quality</h3>
          <p>
            Keep track of your sleep patterns, including total hours slept and
            interruptions.
          </p>
        </li>
        <li>
          <h3>Energy Levels</h3>
          <p>Log your daily energy levels: Tired, Moderate, or High.</p>
        </li>
        <li>
          <h3>Physical Activity</h3>
          <p>
            Track your exercise routines by logging duration, frequency, and
            intensity.
          </p>
        </li>
        <li>
          <h3>Self-Care Activities</h3>
          <p>
            Record your personal self-care habits like journaling, hobbies, and
            relaxation methods.
          </p>
        </li>
        <li>
          <h3>Mindfulness & Meditation</h3>
          <p>Track your meditation sessions and mindfulness exercises.</p>
        </li>
      </ul>

      <div className="form-container">
        <h2>Submit Your Wellness Program Details</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="empId"
            placeholder="Employee ID"
            value={formData.empId}
            onChange={handleChange}
            required
          />{" "}
          <br />
          <label>Mood Level</label>
          <select
            name="moodLevel"
            value={formData.moodLevel}
            onChange={handleChange}
            required
          >
            <option value="">Select Mood Level</option>
            <option value="Happy">Happy</option>
            <option value="Sad">Sad</option>
            <option value="Anxious">Anxious</option>
            <option value="Stressed">Stressed</option>
            <option value="Neutral">Neutral</option>
          </select>
          <label>Stress Level</label>
          <select
            name="stressLevel"
            value={formData.stressLevel}
            onChange={handleChange}
            required
          >
            <option value="">Select Stress Level</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <label>Sleep Quality</label>
          <select
            name="sleepQuality"
            value={formData.sleepQuality}
            onChange={handleChange}
            required
          >
            <option value="">Select Sleep Quality</option>
            <option value="Poor">Poor</option>
            <option value="Average">Average</option>
            <option value="Proper">Proper</option>
          </select>
          <label>Energy Level</label>
          <select
            name="energyLevel"
            value={formData.energyLevel}
            onChange={handleChange}
            required
          >
            <option value="">Select Energy Level</option>
            <option value="Tired">Tired</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </select>
          <label>Physical Activity</label>
          <select
            name="physicalActivity"
            value={formData.physicalActivity}
            onChange={handleChange}
            required
          >
            <option value="">Select Physical Activity</option>
            <option value="Home Workout">Home Workout</option>
            <option value="Yoga">Yoga</option>
            <option value="Gyming">Gyming</option>
          </select>
          <label>Self Care Activity</label>
          <select
            name="selfCareActivity"
            value={formData.selfCareActivity}
            onChange={handleChange}
            required
          >
            <option value="">Select Self Care Activity</option>
            <option value="Journaling">Journaling</option>
            <option value="Hobbies">Hobbies</option>
            <option value="Relaxation">Relaxation</option>
          </select>
          <button type="submit" id="submit">Submit</button>
        </form>
      </div>
      <div className="search-container">
        <h2>View Your Wellness Programs</h2>
        <input
          type="text"
          placeholder="Enter Employee ID"
          value={empId}
          onChange={(e) => setEmpId(e.target.value)}
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      {employeePrograms.length > 0 && (
        <div className="employee-programs">
          <h2>Wellness Programs for Employee ID: {empId}</h2>
          <table border="1">
            <thead>
              <tr>
                <th>Program ID</th>
                <th>Employee ID</th>
                <th>Mood Level</th>
                <th>Stress Level</th>
                <th>Sleep Quality</th>
                <th>Energy Level</th>
                <th>Physical Activity</th>
                <th>Self Care Activity</th>
              </tr>
            </thead>
            <tbody>
              {employeePrograms.map((program) => (
                <tr key={program.programId}>
                  <td>{program.programId}</td>
                  <td>{program.empId}</td>
                  <td>{program.moodLevel}</td>
                  <td>{program.stressLevel}</td>
                  <td>{program.sleepQuality}</td>
                  <td>{program.energyLevel}</td>
                  <td>{program.physicalActivity}</td>
                  <td>{program.selfCareActivity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="charts">
            {renderPieChart(
              employeePrograms,
              "moodLevel",
              "Mood Level Distribution"
            )}

            {renderPieChart(
              employeePrograms,
              "stressLevel",
              "Stress Level Distribution"
            )}

            {renderPieChart(
              employeePrograms,
              "sleepQuality",
              "Sleep Quality Distribution"
            )}

            {renderPieChart(
              employeePrograms,
              "energyLevel",
              "Energy Level Distribution"
            )}

            {renderPieChart(
              employeePrograms,
              "physicalActivity",
              "Physical Activity Distribution"
            )}

            {renderPieChart(
              employeePrograms,
              "selfCareActivity",
              "Self Care Activity Distribution"
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeDashboard;
