'use client'
import React, { useState, useEffect } from 'react';
import styles from './style.css';

const StudentPage = () => {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    fetchStudentData();
  }, []);

  const fetchStudentData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3001/students/getAll');
      const data = await response.json();
      setStudentData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className={styles.card}>
      <h1>inscriptions récentes</h1>
      <table className={styles.table}>
        <thead>
          <tr>
             <th>Name</th>
             <th>Phone</th>
             <th>Email</th>
             <th>Campus</th>   
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
              <td>{student.compus}</td>
              <td>{student.session}</td>
              <td>{student.formule}</td>
              <td>{student.age}</td>
              <td>{student.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentPage;
