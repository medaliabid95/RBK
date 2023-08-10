'use client'
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import './style.css';

const Page = () => {

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show")
            }
            else {
                entry.target.classList.remove("show")
            }
        })
    })
    const hiddenElements = document.querySelectorAll(".hidden")
    hiddenElements.forEach((el) => observer.observe(el))
})
  




  const searchParams = useSearchParams();
  const queryParams = Object.fromEntries(searchParams);

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
    queryParams.formule = selectedFormat ;
    queryParams.session = selectedSession ; 
    queryParams.age = age ; 
    queryParams.city = city ;
    queryParams.compus =  selectedCampus ; 
    console.log(queryParams);
    bot()
  };
  
  

  const bot = () => {
    console.log('hi')
      window.botpressWebChat.sendEvent({type: 'show' });
      window.botpressWebChat.sendEvent({type: 'trigger' });
    }


 
  return (
    
  <div className='postuler2'>
     <div className="container">
        <img className="background-image" src="./fullStack.png" alt="Background" />
        <div className="text-container hidden" >Postuler maintenant et profiter d'une bourse de 40%</div>
       </div>
   <div className='card-image-postuler-grid'>
    <div className='card-postuler2'>
      <form onSubmit={handleSubmit} className='form'>
        <div className='card-body'>
          <label>Sélectionnez le format souhaité</label>
          <select value={selectedFormat} onChange={handleFormatChange}>
            <option value=''>Choisissez un format</option>
            <option value='tempsPlein'>Temps plein (19 semaines)</option>
            <option value='tempsPartiel'>Temps partiel (40 semaines)</option>
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
          
        <button type='button'  onClick={()=> {history.back()}}>Retour</button>
   
       
           <button   type='submit' >Poursuivre ma candidature</button>
     
        </div>
      </form>
    </div>

    <div>
       <img className='postuler-img' src="./Postuler2.png" alt="" />
       </div>
       </div>
    </div>
  );
};

export default Page;
