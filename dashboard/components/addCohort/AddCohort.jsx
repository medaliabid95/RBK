"use client"
import React from "react";
import './addCohort.css'

const AddCohortForm = ({
  newCohort,
  handleInputChange,
  handleAddCohort
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
          
          <select  value={newCohort.session} name="session" onChange={handleInputChange} >
            <option value=''>Choisissez une session</option>
            <option value='Session 1'>Session 1</option>
            <option value='Session 2'>Session 2</option>
          </select>
      
        <button onClick={handleAddCohort}>Add Cohort</button>
      </div>
    </div>
  );
};

export default AddCohortForm;
