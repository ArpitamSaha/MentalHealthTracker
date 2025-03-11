import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./adminDashboard.css";

const API_BASE_URL = "https://localhost:7087/api";

const AdminDashboard = () => {
  const [programs, setPrograms] = useState([]);
  const [empId, setEmpId] = useState("");
  const [filteredPrograms, setFilteredPrograms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE_URL}/WellnessProgram`)
      .then((response) => response.json())
      .then((data) => setPrograms(data))
      .catch((error) => console.error("Error fetching programs:", error));
  }, []);

  const handleSearch = () => {
    if (!empId) return;
    fetch(`${API_BASE_URL}/WellnessProgram/employee/${empId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched employee programs:", data);
        setFilteredPrograms(data);
      })
      .catch((error) => console.error("Error fetching employee programs:", error));
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    sessionStorage.removeItem("token"); 
    navigate("/login"); 
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>HR Dashboard</h1>
      </div>
      
      <section className="all-programs-section">
        <h2>All Programs</h2>
        <div className="all-programs">
          <div className="card stress">
            <div className="card-header">
              <h3>Stress Levels</h3>
            </div>
            <div className="card-body">
              <h4>Evaluate your current stress level by identifying whether it’s Low, Medium, or High</h4>
              <p>By understanding your stress, you can take proactive steps to manage and reduce it through relaxation techniques or wellness programs.</p>
            </div>
          </div>
  
          <div className="card sleep">
            <div className="card-header">
              <h3>Sleep Quality</h3>
            </div>
            <div className="card-body">
              <h4>Keep track of your sleep patterns, including the number of hours slept, interruptions, and how restful your sleep is.</h4>
              <p>Understanding your sleep quality helps you make adjustments to improve overall health and energy.</p>
            </div>
          </div>
  
          <div className="card energy">
            <div className="card-header">
              <h3>Energy Levels</h3>
            </div>
            <div className="card-body">
              <h4>Monitor your energy levels throughout the day—whether you feel Tired, Moderate, or High</h4>
              <p>By tracking these fluctuations, you can optimize your daily routine and energy management strategies.</p>
            </div>
          </div>
  
          <div className="card mindfulness">
            <div className="card-header">
              <h3>Mindfulness & Meditation</h3>
            </div>
            <div className="card-body">
             <h4>Track your progress in mindfulness and meditation practices, including the number of sessions completed and breathing exercises performed</h4>
             <p>These practices help improve focus, reduce stress, and promote overall mental clarity.</p>
            </div>
          </div>
  
          <div className="card physical-activity">
            <div className="card-header">
              <h3>Physical Activity</h3>
            </div>
            <div className="card-body">
              <h4>Log your exercise routines by tracking the duration, frequency, and intensity of your physical activity</h4>
              <p>Regular monitoring helps you stay motivated and on track to reach your fitness goals.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="search-section">
        <h2>Search Programs by Employee ID</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter Employee ID"
            value={empId}
            onChange={(e) => setEmpId(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>Search</button>
        </div>
      </section>
      
      {filteredPrograms.length > 0 && (
        <section className="employee-programs-section">
          <h2>Wellness Programs for Employee ID: {empId}</h2>
          <ul className="program-list">
            {filteredPrograms.map((program) => (
              <li className="program-item" key={program.programId}>
                <p>Program ID : {program.programId}</p>
                <p>Mood Level: {program.moodLevel}</p>
                <p>Stress Level: {program.stressLevel}</p>
                <p>Sleep Quality: {program.sleepQuality}</p>
                <p>Energy Level: {program.energyLevel}</p>
                <p>Physical Activity: {program.physicalActivity}</p>
                <p>Self Care Activity: {program.selfCareActivity}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default AdminDashboard;