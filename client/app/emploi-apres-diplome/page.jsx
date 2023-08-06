"use client"
import React, { useEffect } from "react"
import Lottie from "lottie-react"
import Aos from "aos"
import Computer from "@/components/computer/computer.js"
import community from "../../public/community.json"
import talent from "../../public/talent.json"
import meeting from "../../public/meeting.json"
import service from "../../public/service.json"
import career from "../../public/career.json"
import Slider from "@/components/infinite-slider/infinite-slider"
import Number from "@/components/numbers/from0"
import "./emploiCSS.css"
import "aos/dist/aos.css"
const Emploi = () => {
    useEffect(() => {
        Aos.init()
    }, [])
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

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add("showen");
    //             } else {
    //                 entry.target.classList.remove("showen");
    //             }
    //         });
    //     });
    //     const hiddenElements = document.querySelectorAll(".hiddenY");
    //     hiddenElements.forEach((el) => observer.observe(el));
    // }, []);

    return (
        <div className="main-container">
            <header className="main-header">
                <img className="emploi-apres-diplome-image" src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
                <h1 className="header-content hidden" >Emploi après diplôme</h1>
            </header>
            <div className="black-container">
                <h1 className="block-title">Obtenez votre job de rêve grâce<br /> à notre <span className="rose">services carrières.</span></h1>
                <h3 className="block-desc">Notre Service carrières vous accompagne de manière<br /> personnalisée pour vous préparer à décrocher un emploi<br /> grâce à notre réseau de partenaires employeurs.</h3>
                <div className="three-box-container">
                    <div className="box-stat" id="box-1">
                        <h1 className="statNumbers"><Number n={1000} /><span>+</span></h1>
                        <p className="stat-desc"> Diplômés de RBK<br /> depuis 2016</p>
                    </div>
                    <div className="box-stat" id="box-2">
                        <h1 className="statNumbers" ><Number n={93} /><span>%</span></h1>
                        <p className="stat-desc">Taux d'employabilité<br /> de nos étudiants</p>
                    </div>
                    <div className="box-stat" id="box-3">
                        <h1 className="statNumbers"><Number n={1251} /><span>TND</span></h1>
                        <p className="stat-desc"> Comme 1er salaire<br /> moyen (2022)</p>
                    </div>
                </div>
            </div>
            <div className="four-5-grid">
                <div id="box-grid-1">
                    {/* <div  className="four-5-grid-img" ref={container}></div> */}
                    <div className="four-5-grid-img" >
                        <Computer />
                    </div>
                </div>
                <div className="four-5-grid-content-free" id="box-grid-2">
                    <h1 className="four-5-grid-title" id="larger-title">Notre <span className="rose">service de carrières</span> sera là pour vous.</h1>
                    <p className="four-5-grid-paragraph" id="larger-paragraph">Une fois la formation terminée, vous bénéficiez de notre<br /> service Carrières personnalisé. Nous vous préparons aux<br /> entretiens techniques et RH et vous mettons en relation<br /> avec les recruteurs.​​</p>
                </div>
                <div className="four-5-grid-content" data-aos="fade-right" id="box-grid-3">
                    <h1 className="four-5-grid-title">Des sessions de formation sur la recherche d'emploi</h1>
                    <p className="four-5-grid-paragraph">Une semaine de plus de 40 heures de formation dédiée à la recherche d'emploi et plusieurs sessions de formation tout au long de votre parcours de formation.</p>
                </div>
                <div className="four-5-grid-content" data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" id="box-grid-4">
                    <div className="text-adjust-grid">
                        <h1 className="four-5-grid-title" >Faire carrière chez RBK</h1>
                        <p className="four-5-grid-paragraph" >Comme beaucoup de nos diplômés, rejoignez<br /> notre équipe à la fin de votre cursus et faites carrière en tant que IT trainer,<br /> nous vous formons et aidons à progresser parmi<br /> nos équipes. Optez pour cette option<br /> pour de larges perspectives<br /> d'avenir. Sky is the limit !</p>
                    </div>
                    {/* <img src="Faire carriere.png" className="four-5-grid-img-2" /> */}
                    <Lottie loop={true} className="four-5-grid-img-2" animationData={career} />
                </div>
                <div className="four-5-grid-content" data-aos="fade-left" id="box-grid-5">
                    <h1 className="four-5-grid-title">Coaching individuel <br />personnalisé</h1>
                    <p className="four-5-grid-paragraph">Rencontrez notre équipe du services carrières pour des sessions de coaching individuelle afin de vous aider à définir votre parcours professionnel et de revoir votre stratégie de candidature et <br />vos documents.</p>
                </div>
                <div className="four-5-grid-content" data-aos="fade-right" id="box-grid-6">
                    <h1 className="four-5-grid-title">Une mise en relation avec les entreprises</h1>
                    <p className="four-5-grid-paragraph">Nous recevons souvent des demandes de recrutement par les entreprises avec lesquelles nous vous mettons en relation et/ou envoyons votre CV.</p>
                </div>
                <div className="four-5-grid-content" data-aos="fade-right" id="box-grid-7">
                    <h1 className="four-5-grid-title">Soyez recruté par nos partenaires de recrutement</h1>
                    <p className="four-5-grid-paragraph">Vous rencontrerez lors de nos career days en face à face des entreprises qui recrutent activement des profils tech juniors et pourrez également poser toutes vos questions de recrutement à des experts.</p>
                </div>
                <div className="four-5-grid-content" data-aos="fade-left" id="box-grid-8">
                    <h1 className="four-5-grid-title">Des évènement de recrutement <br /> périodiques tout au long de l'année</h1>
                    <p className="four-5-grid-paragraph">Nous invitons les entreprises à venir rencontrer nos diplômés tout au long de l'année.</p>
                </div>
                <div className="four-5-grid-content" data-aos="fade-right" id="box-grid-9">
                    <h1 className="four-5-grid-title">Accès à notre communauté internationale</h1>
                    <p className="four-5-grid-paragraph">Coming soon: A la fin de vos études vous aurez accès à notre notre communauté ou vous pourrez bénéficier d'un mentoring par nos anciens étudiants et recevoir des alertes pour des centaines d'offres d'emploi par an.</p>
                </div>
                <div className="four-5-grid-content" data-aos="fade-left" id="box-grid-10">
                    <h1 className="four-5-grid-title">Copy Amélioration de votre Digital footprint et votre CV</h1>
                    <p className="four-5-grid-paragraph">Devenez très recrutable en mettant en valeur votre CV, votre lettre de motivation et votre profil LinkedIn. Vous obtiendrez également des conseils pour tirer le meilleur parti de votre profil Github.</p>
                </div>
            </div>
            <div className="text-box">
                <h1 className="text-box-title">Un <span className="rose">réseau mondial</span> d'anciens étudiants et de recruteurs</h1>
                <p className="text-box-paragraph">Nos anciens étudiants travaillent et entreprennent dans le monde entier, repoussant les limites à tous les niveaux de l'ingénierie logicielle. Depuis 2014, notre diplôme est un gage de sérieux et de qualité auprès de centaines d'employeurs du monde entier.</p>
                <div className="div-for-image">
                    <img className="text-box-img" src="Scroll Up.png" alt="" />
                </div>
            </div>
            <div>
                <Slider />
            </div>
            <div className="second-grid hidden">
                <div className="second-grid-box hidden" id="second-grid-box-1">
                    {/* <img className="photo-number" src="Rejoignez.png" alt="" /> */}
                    <Lottie loop={true} className="photo-number" animationData={community} />
                    <div className="grid-box-grid">
                        <h1 className="second-grid-box-title">Rejoignez un réseau solide</h1>
                        <p className="second-grid-box-paragraph">Accédez à une communauté de 1000+ talents technologiques au sein d'un réseau de recrutement solide regroupant les meilleures entreprises technologiques</p>
                    </div>
                </div>
                <div className="second-grid-box hidden" id="second-grid-box-2">
                    {/* <img className="photo-number" src="talent.png" alt="" /> */}
                    <Lottie loop={true} className="photo-number" animationData={talent} />
                    <div className="grid-box-grid">
                        <h1 className="second-grid-box-title">Rencontrez des talents tech uniques</h1>
                        <p className="second-grid-box-paragraph">Nos diplômés combinent souvent leurs compétences technologiques avec leurs expériences ou études antérieures et ils sont impatients de continuer à apprendre.</p>
                    </div>
                </div>
                <div className="second-grid-box-free">
                    <h1 className="second-grid-box-free-title">Vous êtes <span className="rose">une entreprise ?</span></h1>
                    <p className="second-grid-box-free-paragraph">RBK rend plus facile que jamais la recherche de candidats développeurs qualifiés ayant les compétences et les capacités de programmation dont vous avez besoin. Des développeurs front-end et back-end aux développeurs full stack et aux praticiens certifiés AWS Cloud, votre prochain développeur est ici.</p>
                </div>
                <div className="second-grid-box hidden" id="second-grid-box-3">
                    {/* <img className="photo-number" src="Gratuite.png" alt="" /> */}
                    <Lottie loop={true} className="photo-number" animationData={meeting} />
                    <div className="grid-box-grid">
                        <h1 className="second-grid-box-title">Gratuité des services</h1>
                        <p className="second-grid-box-paragraph">Nos services d'accompagnement à l'embauche de nos diplômés sont gratuits pour les entreprises</p>
                    </div>
                </div>
                <div className="second-grid-box hidden" id="second-grid-box-4">
                    {/* <img className="photo-number" src="Assistez.png" /> */}
                    <Lottie loop={true} className="photo-number" animationData={service} />
                    <div className="grid-box-grid">
                        <h1 className="second-grid-box-title">Assistez à nos job fairs</h1>
                        <p className="second-grid-box-paragraph">Nous organisons des salons de l'emploi pour que nos diplômés et nos partenaires de recrutement puissent se rencontrer et évaluer s'il y a un ajustement mutuel.</p>
                    </div>
                </div>
                <div className="three-photos-grid">
                    <img className="three-photos-grid-class" src="image 16.png" id="three-photos-grid-1" />
                    <img className="three-photos-grid-class" src="image 15.png" id="three-photos-grid-2" />
                    <img className="three-photos-grid-class" src="image 17.png" id="three-photos-grid-3" />
                </div>
            </div>
            <div className="before-automatic-slider" data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <h1 className="before-automatic-slider-title">Ils <span className="rose">recrutent</span> parmi nos diplômés</h1>
                <p className="before-automatic-slider-paragraph">More than 100 hiring partners and lots of cool recruiting events.</p>
            </div>
            <div className="automatic-slider">
                <div className="slider">
                    <div className="slide-track">
                        <div className="slide">
                            <img src="access.webp" alt="" />
                        </div>
                        <div className="slide">
                            <img src="orange.webp" alt="" />
                        </div>
                        <div className="slide">
                            <img src="talan.webp" alt="" />
                        </div>
                        <div className="slide">
                            <img src="pwc.webp" alt="" />
                        </div>
                        <div className="slide">
                            <img src="office.webp" alt="" />
                        </div>
                        <div className="slide">
                            <img src="intigo.webp" alt="" />
                        </div>
                        <div className="slide">
                            <img src="vega.webp" alt="" />
                        </div>
                        <div className="slide">
                            <img src="next-step.webp" alt="" />
                        </div>
                        <div className="slide">
                            <img src="think-it.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Emploi;