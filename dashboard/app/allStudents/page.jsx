'use client'
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import styles from './style.css';

const StudentPage = () => {
  const [studentData, setStudentData] = useState([]);
  const [originalStudentData, setOriginalStudentData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState(moment());
  const [selectedDateString, setSelectedDateString] = useState(moment().format('YYYY-MM-DD'));
  const [showCalendar, setShowCalendar] = useState(false);

  const fetchStudentData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3001/students/getAll');
      const data = await response.json();
      setStudentData(data);
      setOriginalStudentData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchStudentData();
  }, []);

  const handleSearch = () => {
    const filteredData = originalStudentData.filter(student => {
      const fullName = `${student.nom} ${student.prenom}`.toLowerCase();
      const searchValue = searchQuery.toLowerCase();
      return (
        searchValue === '' ||
        fullName.includes(searchValue) ||
        student.compus.toLowerCase().includes(searchValue) ||
        student.session.toLowerCase().includes(searchValue)
      );
    });
    setStudentData(filteredData);
  };

  const handleDateClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = date => {
    setSelectedDate(date);
    setSelectedDateString(date.format('YYYY-MM-DD'));
    setShowCalendar(false);
    filterStudentDataByDate(date);
  };

  const filterStudentDataByDate = date => {
    const formattedDate = date.format('YYYY-MM-DD');
    const filteredData = originalStudentData.filter(student => {
      const studentDate = moment(student.createdAt).format('YYYY-MM-DD');
      return studentDate === formattedDate;
    });
    setStudentData(filteredData);
  };

  return (
    <div>
      <div className='search-calender'>
        <div className='input-wrapper'>
          <img id='search-icon' src="./layer12.svg" alt="" />
          <input
            type="text"
            placeholder='chercher'
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            onKeyUp={handleSearch}
          />
        </div>
        <div className='card-calender'>
          <img
            id='calender-icon'
            src="./Group.svg"
            alt=""
            onClick={handleDateClick} 
          />
          <div className='calender' style={{ display: showCalendar ? 'block' : 'none' }}>
            <input
              type="date"
              value={selectedDateString}
              onChange={(event) => handleDateChange(moment(event.target.value))}
            />
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default StudentPage;
