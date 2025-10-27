import React from "react";
import { getFilteredPorts } from "../services/api";

const Controls = ({ setParty, setPorts }) => {
  const handleFilter = async (party) => {
    setParty(party);
    const data = await getFilteredPorts(party);
    setPorts(data);
  };

  return (
    <div className="p-4 bg-gray-100 flex gap-3">
      <select onChange={(e) => handleFilter(e.target.value)}>
        <option value="Democrat">Democrat</option>
        <option value="Republican">Republican</option>
      </select>
      <button
        className="px-3 py-1 bg-blue-600 text-white rounded"
        onClick={() => handleFilter("Democrat")}
      >
        Filter
      </button>
    </div>
  );
};

export default Controls;