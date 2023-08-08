'use client'
import React, { useState } from 'react';
import './style.css';

const Page = () => {
  const [selectedFormat, setSelectedFormat] = useState('');
  const [selectedSession, setSelectedSession] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [selectedCampus, setSelectedCampus] = useState('');

  const handleFormatChange = (event) => {
    setSelectedFormat(event.target.value);
  };

  const handleSessionChange = (event) => {
    setSelectedSession(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleCampusChange = (event) => {
    setSelectedCampus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedFormat);
  };

  return (
    
  <div className='postuler2'>

     <div className="container">
        <img className="background-image" src="./fullStack.png" alt="Background" />
        <div className="text-container hidden" >Postuler maintenant et profiter d'une bourse de 40%</div>
       </div>
   <div className='card-image-postuler-grid-2'>
    <div className='card'>
      <form onSubmit={handleSubmit} className='form'>
        <div className='card-body'>
          <label>Sélectionnez le format souhaité</label>
          <select value={selectedFormat} onChange={handleFormatChange}>
            <option value=''>Choisissez un format</option>
            <option value='tempsPlein'>Temps plein (19 semaines)</option>
            <option value='tempsPartiel'>Temps partiel (40 semaines, distanciel)</option>
          </select>

          <label>Sélectionnez la session à laquelle vous souhaitez participer:</label>
          <select value={selectedSession} onChange={handleSessionChange}>
            <option value=''>Choisissez une session</option>
            <option value='session1'>Session 1</option>
            <option value='session2'>Session 2</option>
          </select>

          <label>Âge</label>
          <input type='number' value={age} onChange={handleAgeChange} />

          <label>Votre ville</label>
          <input type='text' value={city} onChange={handleCityChange} />

          <label>Votre campus</label>
          <select value={selectedCampus} onChange={handleCampusChange}>
            <option value=''>Choisissez un campus</option>
            <option value='tunis'>Tunis</option>
            <option value='elKef'>El Kef</option>
            <option value='sousse'>Sousse</option>
          </select>
        </div>
        <div className='card-footer'>
          <button type='button'>Retour</button>
          <button type='submit'>Poursuivre ma candidature</button>
        </div>
      </form>
    </div>

    <div>
       <img className='postuler-img' src="./Postuler.png" alt="" />
       </div>
       </div>
       


    </div>
  );
};

export default Page;
