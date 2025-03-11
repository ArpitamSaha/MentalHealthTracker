import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './AllPrograms.css';
import { useNavigate } from 'react-router-dom';

 
const AllPrograms = () => {
    const navigate = useNavigate();
  return (
    <section className="health-programs-section">
    <button onClick={() =>navigate('/') }><ArrowBackIosIcon/>Go back</button> 
    <br/>
    <br/>
      <h3>At our Health & Wellness Portal, we offer programs to support your well-being. Whether you're aiming to improve fitness, manage stress, or boost mental clarity, our curated programs are designed to help you reach your goals. From mindfulness to fitness challenges, we provide the tools to stay healthy and motivated. Explore our health programs and start your wellness journey today!</h3>
    <div className="programs-container">
       
        
        <div className="card mood">
          <div className="card-header">
            <h3>Mood Levels</h3>
          </div>
          <div className="card-body">
          <h4>Track and monitor your emotional state throughout the day</h4>
          <p>Assess how you feel—Happy, Sad, Anxious, Stressed, or Neutral—to better understand your mental well-being and take action to improve it.</p>
          </div>
        </div>
 
        
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
  );
}
 
export default AllPrograms;