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
  const [instructorsNames, setInstructorsNames] = useState({});
  const [name, setName] = useState("")
  const [speciality, setSpeciality] = useState("")
  const [reserveSpeciality, setReserveSpeciality] = useState("developper")
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

        // Initialize instructorsNames state
        const names = {};
        instructorsData.forEach((instructor) => {
          names[instructor.id] = instructor.name;
        });
        setInstructorsNames(names);
      })
      .catch((error) => console.log(error))
  };

  const updateInstructor = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3001/instructor/getOne/${id}`);
      const instructorData = response.data;
      const newReserveSpeciality = instructorData.speciality;
      setReserveSpeciality(newReserveSpeciality);

      const updatedSpeciality = speciality.length === 0 ? newReserveSpeciality : speciality;

      await axios.put(`http://localhost:3001/instructor/updateOne/${id}`, {
        name: instructorsNames[id],
        speciality: updatedSpeciality
      });

      alert("Update successful");
      setEdit(!edit);
      setState(!state);
    } catch (error) {
      console.log(error);
    }
  };


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
      <div className='teacher-table'>
        <h1>List des <span style={{ color: "#FF007B" }}>instructeurs</span></h1>
        <div className='add-staff' onClick={() => router.push(`./${id}/addStaff`)} >
          <div tabindex="0" class="plusButton">
            <svg class="plusIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
              <g mask="url(#mask0_21_345)">
                <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
              </g>
            </svg>
          </div>
          <div className='add-staff-text'>Ajouter un instructeur</div>
        </div>
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
                <input
                  placeholder="nom"
                  type="text"
                  name="text"
                  class="input"
                  value={instructorsNames[instructor.id]}  
                  onChange={(e) => {
                    const updatedNames = {
                      ...instructorsNames,
                      [instructor.id]: e.target.value,
                    };
                    setInstructorsNames(updatedNames);
                  }}
                />
              )}
              {!instructorsEditStates[instructor.id] ? (
                <p className="job">{instructor.speciality}</p>
              ) : (
                <select value={speciality} onChange={handleSelectChange} class="form__field margin">
                  {speciality}
                  <option value="developper">Developper</option>
                  <option value="classe cordinator">Coordinateur de classe</option>
                </select>
              )}
              <button
                onClick={() => {
                  if (instructorsEditStates[instructor.id]) {
                    console.log(instructor.id);
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
        <h1>List des <span style={{ color: "#FF007B" }}>candidats</span></h1>
        <div className='add-staff' onClick={() => router.push(`./${id}/addStudent`)}>
          <div tabindex="0" class="plusButton">
            <svg class="plusIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
              <g mask="url(#mask0_21_345)">
                <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
              </g>
            </svg>
          </div>
          <div className='add-staff-text'>Ajouter un candidat</div>
        </div>
        <DataGrid
          className='data-grid'
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
