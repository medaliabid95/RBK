'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./projectDetails.css"
import TitleText5 from '@/components/Recent-Projects-components/titleText/titleText5'
import HoverVideoPlayer from 'react-hover-video-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
const page = ({ params }) => {
    const [data, setData] = useState(null)
    const [liked, setLiked] = useState(false)
    const id = params.projectDetails
    useEffect(() => {
        axios.get(`http://localhost:3001/projects/getOne/${id}`)
            .then((res) => { setData(res.data); console.log(res) })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div> <section className='image-recentP-details-container' >
            <img src="/images/20567151.png" alt="projects" />
            <div className='projects-details-text-container'><TitleText5 /></div>
        </section>
            <div className='project-details-container'>
                <p className='project-details-title'>{data?.title}</p>
                <p className='project-details-description'>cinq kilo pizon 3andi 7ouma mizon shtaswa flousi ya houma eee eee eee shtaswa flouci ya houma</p><div className='project-video-container'>  <HoverVideoPlayer
                    videoSrc={data?.demo}
                /></div>
                <p className='team-project'>Team : <span className='data-team'>{data?.team}</span></p>
                <p className='about-project'>À propos du projet :</p>
                <p className="project-details-text">ReBootKamp annonce l’ouverture de son nouveau hackerspace au Kef.
                    Il s’agit d’un espace de formation dédié à la créativité et à l’apprentissage par projets.

                    Avec cette initiative, l’école du numérique ReBootkamp a pour objectif d’offrir un environnement de travail stimulant pour les étudiants et les professionnels passionnés par l’informatique et les technologies.

                    L’ouverture aura lieu le mercredi 15 février 2023 à partir de 14 heures.

                    Pour rappel, ReBootKamp (RBK), premier organisme de codage intensif à voir le jour dans la région MENA, est un réseau d’écoles permettant d’apprendre toutes les compétences d’un développeur web pour progresser dans les métiers IT ou changer de carrière.
                    RBK, qui a ouvert ses portes en 2019, a pour mission d’offrir une formation aux standards internationaux, qui répond aux demandes du marché et donnant accès à un emploi dans les secteurs les plus innovants. Ouvertes à toutes et à tous sans condition de diplôme et accessible dès 18 ans, la formation est basée sur le peer learning participatif, qui permet aux étudiants de libérer toute leur créativité grâce à l’apprentissage par projets.</p>
                <hr className='prject-hr-line' />
                <div className='project-links-container'>
                    <a href="https://github.com/Thesis-Project01/RBK"><img src="/images/bxl-github.svg" alt="" className='github-icon' /></a><span className='github-link'><a href="https://github.com/Thesis-Project01/RBK">https://github.com/Thesis-Project01/RBK</a></span>

                </div>
                <hr className='prject-hr-line' />
                {/* {liked ? (<div className='like-button' onClick={() => setLiked(!liked)} ><FontAwesomeIcon className="heart" beat icon={faHeart} style={{ color: "red", }} /></div>) : (<div className='like-button' onClick={() => setLiked(!liked)} ><FontAwesomeIcon className="heart" icon={faHeart} /></div>)} */}
            </div>
        </div>
    )
}

export default page