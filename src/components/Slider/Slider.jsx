import React from 'react';
import './Slider.css';

const Slider = ({ label, id, min, max, value, onChange }) => {
  return (
    <div className="container">
      <label htmlFor={id}>{label}: {value}</label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Slider;
