"use client"
import React from 'react'
import "./eventDetailed.css"
import Phoyo from "../../public/0.jpg"
import { MainHeader } from '../main-header/Header'
export const EventDetailed = ({ img, title, desc, owner, date }) => {
  return (
    <div className='event-detailed-container'>
      <h1 className='event-detailed-title'>From Packing Packages to Programmer | How Judah M Accelerated His Career Path Into Tech</h1>
      <button className='event-button'>Les inscriptions sont closes<a>Voir d'autres événements</a></button>
      <img src="../0.jpg" alt="" />
      <h5 className='event-detaield-info'>heure et lieu </h5>
      <div className='heure'>
        <p >13 juil., 18:00 – 20:00</p>
        <p>En Nekhilet, B23, Technopark Elghazela ariana, 2088, Tunisie</p>
      </div>
      <h1 className='event-detaield-info'> À propos de l'événement</h1>
      <div className='event-detailed-desc'>À propos de l'événement
        Vous êtes curieux de découvrir le monde du développement web? Vous voulez en savoir plus sur notre programme de formation? Vous vous demandez comment RBK Tunisia peut vous aider à lancer votre carrière dans la tech? Alors, notre Journée Portes Ouvertes est l'événement parfait pour vous!

        <br />📅 Quand? Le Jeudi 13 juillet, de 18h à 20h.

        <br /> 📍 Où? Dans notre campus de Tunis au B24 technopark El-Gazala

        Voici ce que vous pouvez attendre de notre Journée Portes Ouvertes :

       <br /> 👩‍💻 Démonstrations en direct : Nos formateurs et étudiants actuels vous montreront ce que c'est que de coder en temps réel. Vous aurez un aperçu de la façon dont nous enseignons et de ce que vous pouvez apprendre.

       <br /> 🗣️ Sessions de questions-réponses : Vous aurez l'occasion de poser toutes vos questions à notre équipe pédagogique et à nos anciens élèves. Qu'il s'agisse de la vie d'étudiant, du contenu du cours, des perspectives de carrière ou du financement, nous sommes là pour vous aider.

       <br /> 🤝 Rencontres avec l'équipe : Vous pourrez rencontrer notre équipe dédiée qui vous accompagnera tout au long de votre parcours d'apprentissage.

        Ne manquez pas cette occasion unique de découvrir RBK de l'intérieur. Que vous soyez déjà décidé à apprendre à coder ou que vous soyez simplement curieux, nous serions ravis de vous accueillir.

        Inscrivez-vous dès maintenant pour réserver votre place ! Nous avons hâte de vous rencontrer et de vous aider à démarrer votre voyage dans le monde de la tech.</div>
    </div>
  )
}
