'use client'
import React, { useState } from 'react';
import './style.css';

const CohortManagementPage = () => {
  const [cohorts, setCohorts] = useState([]);
  const [newCohort, setNewCohort] = useState({
    name: '',
    numberOfStudents: 0,
    numberOfInstructors: 0,
    session: '',
    actuelPhase: 'Bootstrap', // Set the default value here
  });

  const handleAddCohort = () => {
    fetch('http://127.0.0.1:3001/cohort/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCohort),
    })
      .then(response => response.json())
      .then(data => {
        setCohorts(prevCohorts => [...prevCohorts, data]);
      })
      .catch(error => {
        console.error('Error adding cohort:', error);
      });
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewCohort(prevCohort => ({ ...prevCohort, [name]: value }));
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Add Cohort</h2>
        <input
          type="text"
          name="name"
          placeholder="Cohort Name"
          value={newCohort.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="numberOfStudents"
          placeholder="Number of Students"
          value={newCohort.numberOfStudents}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="numberOfInstructors"
          placeholder="Number of Instructors"
          value={newCohort.numberOfInstructors}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="session"
          placeholder="Session"
          value={newCohort.session}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="actuelPhase"
          placeholder="Phase"
          value={newCohort.actuelPhase}
          onChange={handleInputChange}
        />
        <button onClick={handleAddCohort}>Add Cohort</button>
      </div>
    </div>
  );
};

export default CohortManagementPage;
