"use client"
import React, { useEffect } from 'react'
import "./form.css"
const form = () => {
    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show2")
                }
                else {
                    entry.target.classList.remove("show2")
                }
            })
        })
        const hiddenElements = document.querySelectorAll(".hidden2")
        hiddenElements.forEach((el) => observer.observe(el))
    })
    return (
        <form className='form-container hidden2'>
            <h3 id='title-form'>Réservez votre place en suivant ces quelques étapes simples.</h3>
            <p id='question'>Que voulez-vous étudier ? <span className='pinkies'>*</span> </p>
            <div className='radio-container'><input type="radio" id='dev-web-radio' />  <span id='dev-web'>Développement Web</span></div>
            <div className='info'>
                <p id='required' className='pinkies'>Champs Obligatoires *</p>
                <input id='inp1' type="text" placeholder='Prenom *' />
                <input id='inp2' type="text" placeholder='Nom de famille *' />
                <input id='inp3' type="email" placeholder='Votre e-mail *' />
            </div>
            <div className='tac-container'>
                <input type="checkbox" id='tac-checkbox' /> <span id='tac'>En soumettant ce formulaire, j'accepte la politique de confidentialité de RBK.</span>
            </div>
            <div className='btn-form-container'>
                <a href='#'><div className='border-btn-3'>
                    <div className='text-btn-3'>Poursuivre</div>
                </div></a></div>
        </form>
    )
}

export default form