'use client'
import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

import './style.css';

const Page = () => {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    phone: '', // Use 'phone' instead of 'telephone' and 'code'
    accept: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <div className='card-container'>
      <div className='card'>
        <img  className ='postuler-img'src="./Postuler.png" alt="" />
        <h1>Réservez votre place en suivant ces quelques étapes simples.</h1>
        <p>Lorsque vous déposez votre candidature, notre équipe Admission vous recontacte rapidement pour planifier un entretien de 30 minutes afin de discuter avec vous de votre projet professionnel.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="prenom">Prénom:</label>
          <input type="text" id="prenom" name="prenom" value={formData.prenom} onChange={(e) => setFormData((prevData) => ({ ...prevData, prenom: e.target.value }))} required />

          <label htmlFor="nom">Nom de famille:</label>
          <input type="text" id="nom" name="nom" value={formData.nom} onChange={(e) => setFormData((prevData) => ({ ...prevData, nom: e.target.value }))} required />

          <label htmlFor="email">Votre e-mail:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={(e) => setFormData((prevData) => ({ ...prevData, email: e.target.value }))} required />

          <label htmlFor="phone">Téléphone:</label>
          <PhoneInput
            id="phone"
            name="phone"
            placeholder="Téléphone"
            value={formData.phone}
            onChange={(value) => setFormData((prevData) => ({ ...prevData, phone: value }))}
            defaultCountry="TN" 
            required
          />
          <div className='checkbox'>
          <input type="checkbox" id="accept" name="accept" checked={formData.accept} onChange={(e) => setFormData((prevData) => ({ ...prevData, accept: e.target.checked }))} required />
          <label htmlFor="accept">En soumettant ce formulaire, j'accepte la politique de confidentialité de RBK.</label>
          </div>

          <input type="submit" value="Poursuivre ma condidature" />
        </form>
      </div>
       
       
      </div>



  );
};

export default Page;
