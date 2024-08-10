import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const data = {
  numericalAttributes: [
    { name: 'Age', min: 0, max: 100 },
    { name: 'Income', min: 0, max: 200000 },
    { name: 'NumDaysPoorHealth', min: 0, max: 30 },
  ],
  categoricalAttributes: [
    { name: 'State', options: ['Ohio', 'California', 'New York'] },
    { name: 'Education', options: ['High School', 'Bachelor', 'Master', 'PhD'] },
    { name: 'Gender', options: ['Male', 'Female'] },
  ],
  textAttributes: ['Occupation']
};

const GUIView = () => {
  const [filters, setFilters] = useState({
    Age: [0, 100],
    Income: [0, 200000],
    State: '',
    Education: '',
    Occupation: '',
    NumDaysPoorHealth: '',
    Gender: ''
  });

  const handleSliderChange = (name, values) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: values }));
  };

  const handleDropdownChange = (name, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleTextChange = (name, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">GUI View</h1>
      <div className="space-y-4">
        {data.numericalAttributes.map((attr) => (
          <div key={attr.name} className="flex items-center space-x-4">
            <label className="w-32">{attr.name}</label>
            <input
              type="range"
              min={attr.min}
              max={attr.max}
              value={filters[attr.name][0]}
              onChange={(e) =>
                handleSliderChange(attr.name, [
                  Number(e.target.value),
                  filters[attr.name][1]
                ])
              }
              className="w-1/3"
            />
            <input
              type="range"
              min={attr.min}
              max={attr.max}
              value={filters[attr.name][1]}
              onChange={(e) =>
                handleSliderChange(attr.name, [
                  filters[attr.name][0],
                  Number(e.target.value)
                ])
              }
              className="w-1/3"
            />
            <span>
              {filters[attr.name][0]} - {filters[attr.name][1]}
            </span>
          </div>
        ))}
        {data.categoricalAttributes.map((attr) => (
          <div key={attr.name} className="flex items-center space-x-4">
            <label className="w-32">{attr.name}</label>
            <select
              value={filters[attr.name]}
              onChange={(e) => handleDropdownChange(attr.name, e.target.value)}
              className="w-1/3"
            >
              <option value="">Select</option>
              {attr.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
        {data.textAttributes.map((attr) => (
          <div key={attr} className="flex items-center space-x-4">
            <label className="w-32">{attr}</label>
            <input
              type="text"
              value={filters[attr]}
              onChange={(e) => handleTextChange(attr, e.target.value)}
              className="w-1/3"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GUIView;