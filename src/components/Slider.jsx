import React from 'react';

const Slider = ({ label, id, min, max, value, onChange }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
      <p>{value}</p>
    </div>
  );
};

export default Slider;
