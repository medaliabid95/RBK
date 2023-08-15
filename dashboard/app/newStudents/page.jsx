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
