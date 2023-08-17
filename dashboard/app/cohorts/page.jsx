"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import "./style.css";
import { FiMoreVertical } from "react-icons/fi";
import { GrAddCircle } from "react-icons/gr";
import AddCohortForm from "@/components/addCohort/AddCohort.jsx";

const CohortManagementPage = () => {
  const [cohorts, setCohorts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const dropdownRef = useRef(null);
  const location = sessionStorage.getItem("location");
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };
  const handleDocumentClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  document.addEventListener("mousedown", handleDocumentClick);
  const [newCohort, setNewCohort] = useState({
    name: "",
    numberOfStudents: 0,
    numberOfInstructors: 0,
    session: "",
    actuelPhase: "Bootstrap", // Set the default value here
  });

  const handleAddCohort = () => {
    fetch("http://127.0.0.1:3001/cohort/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCohort),
    })
      .then((response) => response.json())
      .then((data) => {
        setCohorts((prevCohorts) => [...prevCohorts, data]);
      })
      .catch((error) => {
        console.error("Error adding cohort:", error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCohort((prevCohort) => ({ ...prevCohort, [name]: value }));
  };

  return (
    <div className="container">
      <div className="title">
        {" "}
        RebootKamp <span className="location">{location}</span> Cohorts
      </div>
      <div className="add-cohort-btn" onClick={() => setShowForm(true)}>
        <GrAddCircle />
        Add New Blog
      </div>
      {showForm && (
        <AddCohortForm
          newCohort={newCohort}
          handleInputChange={handleInputChange}
          handleAddCohort={handleAddCohort}
        />
      )}
      <div className="cohort">
        <div className="cohort-header">
          <div className="edit-icon" onClick={() => toggleDropdown()}>
            <FiMoreVertical />
            {showDropdown && (
              <div ref={dropdownRef} className="dropdown">
                <p>Edit</p>
                <p>Delete</p>
              </div>
            )}
          </div>
          <Image src="/RBK.png" width={150} height={60} />
          <p>Cohort-7-2022</p>
          <span>
            Legend are not borned <br></br>They are created
          </span>
        </div>
        <div className="cohort-body">
          <p>RBKTN-C2-2023</p>
        </div>
      </div>
    </div>
  );
};

export default CohortManagementPage;

{
  /* <div className="card">
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
      </div> */
}
