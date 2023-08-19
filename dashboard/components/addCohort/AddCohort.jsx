"use client"
import React from "react";
import './addCohort.css'
const AddCohortForm = ({
  newCohort,
  handleInputChange,
  handleAddCohort,
}) => {
  return (
    <div className="popup">
      <div className="card">
        <h2>Add Cohort</h2>
        <input
          type="text"
          name="name"
          placeholder="Cohort Name"
          value={newCohort.name}
          onChange={handleInputChange}
        />
        {/* Other input fields */}
        <button onClick={handleAddCohort}>Add Cohort</button>
      </div>
    </div>
  );
};

export default AddCohortForm;
