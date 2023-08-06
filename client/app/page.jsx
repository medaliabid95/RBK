import React from 'react'
import "./landing.css"
import Imagee from '../components/contactImage/ContactImage.jsx'
const page = () => {
    return (
        <div className='landing-container'>
            <section className='image-landing-container' >
                <img src="landing-pic.png" alt="landing" />
                <div className='btn-img-container'>
                    <a href='#'><div className='border-btn-4'>
                        <div className='text-btn-4'>Postuler</div>
                    </div></a></div>
                <div className="form-text-container">
                    <div className="title"><p id="title1">TRANSFORME TON <span className='pinkies'>AVENIR,</span> APPRENDS A <span className='pinkies'>CODER.</span></p><p id="title2">REJOINGEZ NOTRE BOOTCAMP A <span className='pinkies'>TUNIS.</span></p></div>
                    <form className='form-container'>
                        <h3 id='title-form'>Réservez votre place en suivant ces quelques étapes simples.</h3>
                        <p id='question'>Que voulez-vous étudier ? <span className='pinkies'>*</span> </p>
                        <div className='radio-container'><input type="radio" id='dev-web-radio' />  <span id='dev-web'>Développement Web</span></div>
                        <div className='info'>
                            <p id='required' className='pinkies'>Champs Obligatoires</p>
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
                </div>
            </section>
            <section className='promo-landing-container'>
                <div className="announcement">
                    <div className="text-ads">
                        <p>Profitez d'une bourse exceptionnelle de -40%</p>
                        <p>Profitez d'une bourse exceptionnelle de -40%</p>
                        <p>Profitez d'une bourse exceptionnelle de -40%</p>
                        <p>Profitez d'une bourse exceptionnelle de -40%</p>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default page

