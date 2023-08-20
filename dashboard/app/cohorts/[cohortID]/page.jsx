"use client"
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useParams } from 'next/navigation'
import axios from 'axios'
import './cohort.css';
const CohortTable = () => {
  const param = useParams()
  const id = 1
  const compus = sessionStorage.getItem("location")
  const [selectedRows, setSelectedRows] = useState([]);
  const [students, setStudents] = useState([])
  const [instructors, setInstructors] = useState([])
  const [edit, setEdit] = useState(false);
  const [instructorsEditStates, setInstructorsEditStates] = useState({});
  const [name, setName] = useState("")
  const [speciality, setSpeciality] = useState("")
  const [state, setState] = useState(false)

  const handleSelectionChange = (selectionModel) => {
    setSelectedRows(selectionModel);
  };

  const fetchStudent = (id) => {
    axios.post(`http://localhost:3001/students/getByCohort/${id}`, {
      compus: compus
    })
      .then((response) => setStudents(response.data))
      .catch((error) => console.log(error))
  }
  const fetchInstructors = (id) => {
    axios.get(`http://localhost:3001/instructor/getByCohort/${id}`)
      .then((response) => {
        const instructorsData = response.data;
        const editStates = instructorsData.reduce((acc, instructor) => {
          acc[instructor.id] = false; // Initialize edit state for each instructor
          return acc;
        }, {});
        setInstructors(instructorsData);
        setInstructorsEditStates(editStates);
      })
      .catch((error) => console.log(error))
  };

  const updateInstructor = (id) => {
    axios.get(`http://localhost:3001/instructor/getOne/${id}`)
    .then((res=>setSpeciality(res.data.speciality)))
    .catch((err)=>console.log(err))
    axios.put(`http://localhost:3001/instructor/updateOne/${id}`, {
      name: name,
      speciality: speciality
    })
      .then((res) => { alert("update successfully"); setEdit(!edit); setState(!state) })
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

  useEffect(() => {
    fetchStudent(id)
    fetchInstructors(id)
  }, [state])

  return (
    <div className='main-cohorts-container'>
      <div className='insert-space'>
        <button>add instructor</button>
        <button>add student</button>
      </div>
      <div className='teacher-table'>
        <h1>tableau du <span style={{ color: "#FF007B" }}>staff</span></h1>
        <div className='cards-container'>
          {instructors.map((instructor) => (
            <div className="card" key={instructor.id}>
              <div className="card-border-top"></div>
              <div className="img">
                <img className="back" src={instructor.image} alt="" />
              </div>
              {!instructorsEditStates[instructor.id] ? (
                <span>{instructor.name}</span>
              ) : (
                <input placeholder="nom" type="text" name="text" class="input" onChange={(e) => setName(e.target.value)} />
              )}
              {!instructorsEditStates[instructor.id] ? (
                <p className="job">{instructor.speciality}</p>
              ) : (
                <input placeholder="specialité" type="text" name="text" class="input" onChange={(e) => setSpeciality(e.target.value)} />
              )}
              <button
                onClick={() => {
                  if (instructorsEditStates[instructor.id]) {
                    updateInstructor(instructor.id)
                    const updatedEditStates = {
                      ...instructorsEditStates,
                      [instructor.id]: !instructorsEditStates[instructor.id],
                    };
                    setInstructorsEditStates(updatedEditStates);
                  }
                  else{
                  const updatedEditStates = {
                    ...instructorsEditStates,
                    [instructor.id]: !instructorsEditStates[instructor.id],
                  };
                  setInstructorsEditStates(updatedEditStates);
                }}}
              >
                {!instructorsEditStates[instructor.id] ? "Edit" : "Save"}
              </button>
            </div>
          ))}
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
