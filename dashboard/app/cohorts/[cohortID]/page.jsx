"use client"
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useParams, useRouter } from 'next/navigation'
import axios from 'axios'
import './cohort.css';
const CohortTable = () => {
  const router = useRouter();
  const param = useParams()
  const id = param.cohortID
  const compus = sessionStorage.getItem("location")
  const [selectedRows, setSelectedRows] = useState([]);
  const [students, setStudents] = useState([])
  const [instructors, setInstructors] = useState([])
  const [edit, setEdit] = useState(false);
  const [instructorsEditStates, setInstructorsEditStates] = useState({});
  const [name, setName] = useState("")
  const [speciality, setSpeciality] = useState("")
  const [state, setState] = useState(false)

  const handleSelectChange = (e) => {
    setSpeciality(e.target.value);
};

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
          acc[instructor.id] = false;
          return acc;
        }, {});
        setInstructors(instructorsData);
        setInstructorsEditStates(editStates);
      })
      .catch((error) => console.log(error))
  };

  const updateInstructor = (id) => {
    axios.get(`http://localhost:3001/instructor/getOne/${id}`)
      .then((res => {
        setSpeciality(res.data.speciality)
        axios.put(`http://localhost:3001/instructor/updateOne/${id}`, {
          name: name,
          speciality: speciality
        })
          .then((res) => { alert("update successfully"); setEdit(!edit); setState(!state) })
          .catch((error) => console.log(error))
      }))
      .catch((err) => console.log(err))
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
    setSpeciality("developpeur")
  }, [state])

  return (
    <div className='main-cohorts-container'>
      <div class="eight">
        <h1>cohort description and management</h1>
      </div>
      <div className='insert-space'>
        <div className='add-box' onClick={() => router.push(`./${id}/addStaff`)}>add Staff</div>
        <div className='add-box' onClick={() => router.push(`./${id}/addStudent`)}>add student</div></div>
      <div className='teacher-table'>
        <h1>list du <span style={{ color: "#FF007B" }}>staff</span></h1>
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
                <select value={speciality}  onChange={handleSelectChange} class="form__field">
                  {speciality}
                  <option value="developper">Developper</option>
                  <option value="classe cordinator">coordinateur de classe</option>
                </select>
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
                  else {
                    const updatedEditStates = {
                      ...instructorsEditStates,
                      [instructor.id]: !instructorsEditStates[instructor.id],
                    };
                    setInstructorsEditStates(updatedEditStates);
                  }
                }}
              >
                {!instructorsEditStates[instructor.id] ? "Edit" : "Save"}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className='students-table'>
        <h1>tableau des <span style={{ color: "#FF007B" }}>candidats</span></h1>
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
