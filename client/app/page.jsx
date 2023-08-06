import React from 'react'
import "./landing.css"
import BlackContainerNumbers from '@/components/black-container-numbers/black-container-numbers'
import VideoPlayer from '@/components/Player/VideoPlayer'
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
            <section className='black-container'>
                <div id='awd-title'>5 mois pour devenir Developpeur Full-Stack</div>
                <div id='awd-resume'>L'objectif de cette formation est de permettre à toute personne, quel que soit son niveau initial (débutant, curieux ou avancé) ou son profil(reconversion professionnelle, montée en compétences…), d'acquérir les notions techniques et humaines nécessaires pour débuter avec succès une carrière dans la tech</div>
                <div className='sticker' id='sticker-1'><span className='star'><img src="icons8-star-100.png" alt="" /></span><span className='sticker-text'>Format flexible de 5 à 12 mois</span></div>
                <div className='sticker' id='sticker-2'><span className='star'><img src="icons8-star-100.png" alt="" /></span><span className='sticker-text'>1 professeur pour 7 étudiants</span></div>
                <div className='sticker' id='sticker-3'><span className='star'><img src="icons8-star-100.png" alt="" /></span><span className='sticker-text'>Sur le campus ou en ligne</span></div>
                <div id='hr-line2'> </div>
                <BlackContainerNumbers number={1000} label={"+"} idstat={"stat1"} textStat={"Diplômés de RBK depuis 2016"} />
                <BlackContainerNumbers number={93} label={"%"} idstat={"stat2"} textStat={"Taux d'employabilité de nos étudiants"} />
                <BlackContainerNumbers number={1000} idstat={"stat3"} textStat={"De cours en seulement 5 mois"} spanid={"time-spent"} indc={"h"} />
                <BlackContainerNumbers number={1251} idstat={"stat4"} textStat={"Comme 1er salaire moyen (2022)"} spanid={"money-spent"} indc={"TND"} />
            </section>

            <section className='videos-and-about'>
                <VideoPlayer videoSrc={"videos/rbkVid.mp4"} thumbnailSrc={"safa-Thumbnail.png"} />
            </section>
        </div >
    )
}

export default page

