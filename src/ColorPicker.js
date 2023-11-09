import React, { useState } from 'react';
import './ColorPicker.css';

const ColorPicker = ({ colors }) => {
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const handleButtonClick = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  return (
    <div className="color-picker">
      <button onClick={handleButtonClick}>Pick a color</button>
      {showColorList && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-square"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor && (
        <p className="selected-color">Selected Color: {selectedColor}</p>
      )}
    </div>
  );
};

export default ColorPicker;