"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./style.css";

import { GrAddCircle } from "react-icons/gr";
import AddCohortForm from "@/components/addCohort/AddCohort.jsx";
import axios from "axios"
import Cohort from "../../components/cohort/Cohort.jsx"

const CohortManagementPage = () => {
  const [cohorts, setCohorts] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [refresh,setRefresh]=useState(false)

  
  const location = sessionStorage.getItem("location");
  useEffect(()=>{
    axios.get("http://localhost:3001/cohorts/getAll")
    .then(res=>setCohorts(res.data))
    .catch(err=>console.error(err))

    
  },[refresh])

  const [newCohort, setNewCohort] = useState({
    name: "",
    session: "",
    actuelPhase: "bootstrap",
   
    campus:location
     // Set the default value here
  });

  const handleAddCohort = () => {
  axios.post("http://localhost:3001/cohorts/add",newCohort)
  .then(res=>{
    setRefresh(!refresh)
    setShowForm(false)
  })
  .catch(err=>console.log(err))
  };
  const handleDelete=(id)=>{
    axios.delete(`http://localhost:3001/cohorts/delete/${id}`)
    .then(res=>setRefresh(!refresh))
    .catch(err=>console.error(err))
  }
  const handleUpdateCohort=(id,content)=>{
    axios.put(`http://localhost:3001/cohorts/updateOne/${id}`,content)
    .then(res=>setRefresh(!refresh))
    .catch(err=>console.log(err))
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCohort((prevCohort) => ({ ...prevCohort, [name]: value }));
  };




  return (
    <div className="container" >
      <div className="title">
        RebootKamp <span className="location">{location}</span> Cohorts
      </div>
      <div className="add-cohort">
      <div className="add-cohort-btn" onClick={() => setShowForm(!showForm)}>
        <GrAddCircle />
        Ajouter une Nouvelle Cohorte 
      </div>
      {showForm ? (
        <AddCohortForm
        
          newCohort={newCohort}
          handleInputChange={handleInputChange}
          handleAddCohort={handleAddCohort}
        />
      ):null}

      </div>
      <div className="cohort-container">
        {cohorts.map(cohort=><Cohort handleUpdateCohort={handleUpdateCohort}  handleDelete={handleDelete} cohort={cohort}/>)}
      </div>
    </div>
  );
};

export default CohortManagementPage;

