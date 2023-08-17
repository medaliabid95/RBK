'use client'
import React, { useState, useEffect } from 'react';
import styles from './style.css';


const StudentPage = () => {
  const [studentData, setStudentData] = useState([]);
  const [visitCount, setVisitCount] = useState(0);


  const location = sessionStorage.getItem('location');
  const image = sessionStorage.getItem('image');
  const name = sessionStorage.getItem('name');

  useEffect(() => {
    fetchStudentData();
    fetchVisitCount();
  }, []);

  const fetchStudentData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:3001/students/getOne/${location}`);
      const data = await response.json();
      setStudentData(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchVisitCount = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:3001/visitors/total-count`);
      const data = await response.json();
      console.log(data);
      setVisitCount(data.total)
    } catch (error) {
      console.error('Error fetching visit count:', error);
    }
  };

  const handleStatusChange = async (event, studentId) => {
    const newStatus = event.target.value;
    console.log(newStatus);
    console.log(studentId);

    try {
      await fetch(`http://127.0.0.1:3001/students/updateOne/${studentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Status: newStatus }),
      });

      const updatedStudentData = studentData.map((student) => {
        if (student.id === studentId) {
          return { ...student, Status: newStatus };
        }
        return student;
      });

      setStudentData(updatedStudentData);
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };




  const getStatusColor = (status) => {
    switch (status) {
      case 'En Cours':
        return 'white';
      case 'Accepté':
        return 'white';
      case 'Refusé':
        return 'white';
      default:
        return 'black';
    }
  };
  
  const getStatusBackgroundColor = (status) => {
    switch (status) {
      case 'En Cours':
        return 'orange';
      case 'Accepté':
        return 'green';
      case 'Refusé':
        return 'red';
      default:
        return 'white';
    }
  };

  
  const acceptedStudents = (students) => {
    return students.filter((student) => student.Status === 'Accepté')
  }



  if (!location && !image && !name) {
    return <div className='not-found'>404 not found</div>;
  }

  
    return (
      <div>
        <div className='title'> RebootKamp <span className='location'>{location}</span> Dashboard
        </div>
        <div className='statics-before-table'>
          <CardIcon icon="./vision.svg" label="Nombre de visiteurs" count={visitCount} />
          <CardIcon icon="./Inscription.svg" label="Nombre d'inscriptions" count={studentData.length} />
          <CardIcon icon="./people.svg" label="Nombre de condidats" count={acceptedStudents(studentData).length} />
        </div>
        <div className={styles.card}>
          <h1>Inscriptions récentes</h1>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Session</th>
                <th>Formule</th>
                <th>Age</th>
                <th>Ville</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {studentData.map((student, index) => (
                <tr key={index}>
                  <td>{`${student.nom} ${student.prenom}`}</td>
                  <td>{student.phone}</td>
                  <td>{student.email}</td>
                  <td>{student.session}</td>
                  <td>{student.formule}</td>
                  <td>{student.age}</td>
                  <td>{student.city}</td>
                  <td className="statusCell" style={{ color: getStatusColor(student.Status), backgroundColor: getStatusBackgroundColor(student.Status) }}>
                    <select
                      value={student.Status}
                      onChange={(e) => handleStatusChange(e, student.id)}>
                      <option>En Cours</option>
                      <option>Accepté</option>
                      <option>Refusé</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

const CardIcon = ({ icon, label, count }) => (
  <div className='card-icon'>
    <img src={icon} alt="" />
    <span>{label}</span>
    <span id="visits">{count}</span>
  </div>
);

export default StudentPage;
