import React from 'react';

const Button = ({ color, bgColor, text, borderRadius, size }) => (
  <button
    type="button"
    style={{
      backgroundColor: bgColor,
      color,
      borderRadius,
    }}
    className={`text-${size} p-3 hover:drop-shadow-xl`}
  >
    {text}
  </button>
);

export default Button;
