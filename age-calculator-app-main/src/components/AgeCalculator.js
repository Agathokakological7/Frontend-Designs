import React, { useState, useEffect } from 'react';
import './AgeCalculator.css';
import AgeDisplay from './AgeDisplay';
import ButtonIcon from './ButtonIcon';

const AgeCalculator = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [age, setAge] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'day') {
      setDay(value);
    } else if (name === 'month') {
      setMonth(value);
    } else if (name === 'year') {
      setYear(value);
    }
  };

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(`${year}-${month}-${day}`);
    const ageInMillis = today.getTime() - birthDate.getTime();
    const ageInDays = Math.floor(ageInMillis / (1000 * 60 * 60 * 24));
    setAge(ageInDays);
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      calculateAge();
    }
  };
  useEffect(() => {
    if (day !== '' && month !== '' && year !== '') {
      calculateAge();
    } else {
      setAge('_ _'); // If any input is empty, set age to empty string
    }
  }, [day, month, year]);
  // useEffect(() => {
  //   calculateAge();
  // }, [day, month, year]);

  return (
    <div className="centered-box">
      <div className="container">
        <h2>Age Calculator</h2>
        <div className="input-row">
        <div className="form-group">
            <label htmlFor="day">Day:</label>
            <br />
            <input
              type="number"
              id="day"
              name="day"
              value={day}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="DD"
            />
          </div>
          <div className="form-group">
            <label htmlFor="month">Month:</label>
            <br />
            <input
              type="number"
              id="month"
              name="month"
              value={month}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="MM"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="year">Year:</label>
            <input
              type="number"
              id="year"
              name="year"
              value={year}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="YYYY"
            />
          </div>
        </div>
        <button onClick={calculateAge}> <ButtonIcon /></button>
        {age !== '' && (
          <div>
            <h3>Age:</h3>
            <AgeDisplay age={age} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AgeCalculator;
