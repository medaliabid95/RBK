"use client"
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useParams } from 'next/navigation'
import axios from 'axios'
import './cohort.css';

const CohortTable = () => {
  const param = useParams()
  const id = param.cohortId || 1
  const compus = sessionStorage.getItem("location")
  const [selectedRows, setSelectedRows] = useState([]);
  const [students, setStudents] = useState([])
  const [instructors, setInstructors] = useState([])
  console.log("students", students);
  console.log("id", id)

  const handleSelectionChange = (selectionModel) => {
    setSelectedRows(selectionModel);
  };

  const fetchStudent = (id) => {
    axios.post(`http://localhost:3001/students/getSpecific/${id}`, {
      compus: compus
    })
      .then((response) => setStudents(response.data))
      .catch((error) => console.log(error))
  }
  const fetchInstructors = (id) => {
    axios.get(`http://localhost:3001/instructor/getByCohort/${id}`)
      .then((response) => setInstructors(response.data))
      .catch((error) => console.log(error))
  }

  const StudentColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nom', headerName: 'nom', width: 150 },
    { field: 'prenom', headerName: 'prenom', width: 150 },
    { field: 'email', headerName: 'E-mail', width: 190 },
    { field: 'age', headerName: 'Age', width: 150 },
    { field: 'city', headerName: 'ville', width: 150 },
  ];

  // const InstructorsColumns = [
  //   { field: 'id', headerName: 'ID', width: 70 },
  //   { field: 'name', headerName: 'nom', width: 150 },
  //   { field: 'speciality', headerName: 'specialité', width: 150 },
  //   { field: 'disponibility', headerName: 'disponibilité', width: 150 },
  // ];

  useEffect(() => {
    fetchStudent(1)
    fetchInstructors(id)
  }, [])
console.log(students);
  return (
    <div className='main-cohorts-container'>
      <div className='teacher-table'>
        <h1>tableau du <span style={{ color: "#FF007B" }}>staff</span></h1>
        <div className='cards-container'>
          {instructors.map((instructor) => (
            <div class="card">
              <div class="card-border-top">
              </div>
                  <img src={instructor.image} className='img' alt="" />
              <span>{instructor.name}</span>
              <p class="job">{instructor.speciality}</p>
              <button>Edit
              </button>
            </div>
          ))
          }
        </div>
      </div>
      <div className='students-table'>
        <h1>tableau des <span style={{ color: "#FF007B" }}>etudients</span></h1>
        <DataGrid
          rows={students}
          columns={StudentColumns}
          pageSize={5}
          checkboxSelection
          onSelectionModelChange={handleSelectionChange}
          selectionModel={selectedRows}
        />
      </div>
    </div>
  );
};

export default CohortTable;
