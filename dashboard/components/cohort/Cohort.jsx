import React, { useRef, useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import Image from "next/image";
import moment from "moment";
import { BsFillPeopleFill } from "react-icons/bs";
import AddCohortForm from "../addCohort/AddCohort.jsx";
import UpdateCohort from "../updateCohorts/UpdateCohort.jsx";
import { useRouter } from "next/navigation.js";
const cohort = ({ handleDelete, cohort, handleUpdateCohort }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const [updateCohort, setUpdateCohort] = useState({});
  const router=useRouter()
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdateCohort((prevCohort) => ({ ...prevCohort, [name]: value }));
  };
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

  const closeUpdateForm = () => {
    setShowForm(false);
  };
  return (
    <div className="cohort" >
      <div
        className="cohort-header"
        style={
          cohort.actuelPhase === "Bootstrap"
            ? { backgroundColor: "rgb(255 146 183)" }
            : cohort.actuelPhase === "Junior"
            ? { backgroundColor: "rgb(97 188 96)" }
            : cohort.actuelPhase === "Senior"
            ? { backgroundColor: "#6bc8c0d9" }
            : {}
        }
      >
        <div className="Phase-container">
          {cohort.actuelPhase}
        </div>
        <div className="edit-icon" onClick={() => toggleDropdown()}>
          <FiMoreVertical />
          {showDropdown && (
            <div ref={dropdownRef} className="dropdown">
              <p
                onClick={() => {
                  setUpdateCohort({
                    name: cohort.name,
                    session: cohort.session,
                    actuelPhase: cohort.actuelPhase,
                    campus: cohort.campus,
                    start: cohort.startDate,
                  });
                  setShowForm(true);
                }}
              >
                Modifier
              </p>
              <p onClick={() => handleDelete(cohort.id)}>Supprimer</p>
            </div>
          )}
        </div>
        {showForm ? (
          <UpdateCohort
          ref={dropdownRef}
            closeUpdateForm={closeUpdateForm}
            id={cohort.id}
            handleUpdateCohort={handleUpdateCohort}
            cohort={updateCohort}
            handleInputChange={handleInputChange}
          />
        ) : null}
        <Image src="/RBK.png" width={150} height={60} />
        <p>{cohort.name}</p>
        <span>
          Legend are not borned <br></br>They are created
        </span>
      </div>
      <div className="cohort-body">
        <div className="cohort-name-container">
          <h1 className="cohort-name" onClick={()=>router.push(`/cohorts/${cohort.id}`)}>{cohort.name} </h1>
          <div className="students-counter">
            <BsFillPeopleFill />
            {cohort.numberOfStudents}
          </div>
        </div>
        <p>Créé le : {moment(cohort.createdAt).format("YYYY-MM-DD")}</p>
        <p>
        Date de début :{"  "}
          {(cohort.start && moment(cohort.start).format("YYYY-MM-DD")) ||
            ". . ."}
        </p>
      </div>
    </div>
  );
};

export default cohort;
