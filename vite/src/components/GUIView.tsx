import React, { useState } from 'react';

export default function GUIView(props: React.PropsWithChildren){
  const [state, setState] = useState('');
  const [geostratum, setGeostratum] = useState('');
  const [density, setDensity] = useState('');
  const [year, setYear] = useState([2000, 2024]);
  const [searchText, setSearchText] = useState('');

  const handleSliderChange = (event: any) => {
    const value = event.target.value.split(',');
    setYear([Number(value[0]), Number(value[1])]);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Handle the data fetching and filtering here
  };

  return (
    <div className="p-4 h-full overflow-y-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            State
          </label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Geographic Stratum Code
          </label>
          <input
            type="text"
            value={geostratum}
            onChange={(e) => setGeostratum(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Household Density Stratum Code
          </label>
          <input
            type="text"
            value={density}
            onChange={(e) => setDensity(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Year Range
          </label>
          <input
            type="range"
            value={year.join(',')}
            min="2000"
            max="2024"
            step="1"
            onChange={handleSliderChange}
            className="w-full"
          />
          <div className="flex justify-between text-gray-600 text-sm">
            <span>{year[0]}</span>
            <span>{year[1]}</span>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Search Text
          </label>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Filter Data
          </button>
        </div>
      </form>
    </div>
  );
};

