// AgeDisplay.js
import React from 'react';
import './AgeDisplay.css';

const AgeDisplay = ({ age }) => {
  const years = Math.floor(age / 365);
  const remainingDays = age % 365;
  const months = Math.floor(remainingDays / 30);
  const days = remainingDays % 30;

  const formatAge = (value) => (value !== undefined && !isNaN(value) ? value : '__');

  return (
    <div className="age-display">
      <div>
        <p>{formatAge(years)} Years</p>
       
      
        <p>{formatAge(months)} Months</p>
        
     
        <p>{formatAge(days)} Days</p>
      
      </div>
    </div>
  );
};

export default AgeDisplay;
