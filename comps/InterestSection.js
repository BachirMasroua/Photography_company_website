'use client'

import React, { useState } from 'react';

const InterestSection = ({ onSelectionChange }) => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedInterests((prevSelected) => [...prevSelected, value]);
    } else {
      setSelectedInterests((prevSelected) =>
        prevSelected.filter((interest) => interest !== value)
      );
    }
  };

  React.useEffect(() => {
    onSelectionChange(selectedInterests);
  }, [selectedInterests]);

  return (
    <div>
      <h2>Choose Your Interest</h2>
      <label>
        <input
          type="checkbox"
          value="Interest 1"
          onChange={handleCheckboxChange}
        />
        Interest 1
      </label>
      <label>
        <input
          type="checkbox"
          value="Interest 2"
          onChange={handleCheckboxChange}
        />
        Interest 2
      </label>
      <label>
        <input
          type="checkbox"
          value="Interest 3"
          onChange={handleCheckboxChange}
        />
        Interest 3
      </label>
    </div>
  );
};

export default InterestSection;
