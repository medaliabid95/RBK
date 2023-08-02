'use client'
import React, { useState } from "react";
import "./style.css";

const Page = () => {
  const [selectedWeekIndex, setSelectedWeekIndex] = useState(0);

  const handleWeekClick = (index) => {
    setSelectedWeekIndex(index);
  };

  const weeksData = [
    // first
    (
      <div className="contenu">
        <div className="left-side">
          <img className="image-contenu" src="./image 6.png" alt="Image" />
          <div className="after-image">
            By completing the pre-course work, you will have a strong foundation
            and be able to begin the RBK IMMERSIVE experience.
          </div>
        </div>
        <div className="right-side">
          <div className="contenu-description">
            <p className="bold">1. Javascript</p>
            <p>Foundation of programming</p>
            <p>Basics of JS (Function, Variables, data type...)</p>
            <p>Recursive Functions</p>
            <p>Higher Order Functions</p>
            <p>OOP</p>
            <p className="bold">2. HTML, CSS and JQuery</p>
            <p>The foundations of web development</p>
            <p>Build an interactive website</p>
            <p className="bold">3. A Systematic Problem Solving Process</p>
            <p>Daily warm ups and technical interviews problem solving</p>
            <p>A polished debugging skillset</p>
            <p className="bold">4. The Modern web dev work environment</p>
            <p>GitHub and the command line</p>
          </div>
        </div>
      </div>
    ),
    // second
    (
      <div className="contenu">
        <div className="left-side">
          <img className="image-contenu" src="./travail.webp.png" alt="Image" />
          <div className="after-image"></div>
        </div>
        <div className="right-side">
          <div className="contenu-description">
            <p className="bold">Computer science Fundamentals</p>

            <p>During the 12-week immersive, </p>
            <p>
              you’ll be primarily working in pairs and groups over 2-day
              sprints,
            </p>
            <p>putting in 11-hour days at a minimum, 6 days a week.</p>
            <p>
              Our instructional content gives you just enough scaffolding so{" "}
            </p>
            <p>
              you can get to the real work of solving coding problems in the
              context
            </p>
            <p> of actual applications.</p>
            <ul>
              <li>
                You'll be immersed in learning the fundamental concepts and
                strategies considered best practices in the software engineering
                industry, including:
              </li>
              <li>Basic and advanced data structures</li>
              <li>Getting into the right mindset (thinking like an engineer)</li>
              <li>Using JavaScript instantiation patterns</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  ];

  return (
    <div className="web-dev">
      {/* background */}
      <div className="container">
        <img className="background-image" src="./fullStack.png" alt="Background" />
        <div className="text-container">Full-stack JavaScript Professional</div>
      </div>

      {/* announcement */}
      <div className="announcement">
        <div className="text-ads">
          <p>Profitez d'une bourse exceptionnelle de -40%</p>
          <p>Profitez d'une bourse exceptionnelle de -40%</p>
          <p>Profitez d'une bourse exceptionnelle de -40%</p>
          <p>Profitez d'une bourse exceptionnelle de -40%</p>
        </div>
      </div>

      {/* cards */}
      <div className="cards">
        <div className="card">
          <p className="numOfCard">1</p>
          <p className="title">Front End</p>
          <p className="description">
            Booster l'interface du site avec JavaScript et créer une interface
            responsive avec CSS3.
          </p>
          <div className="icons">
            <img className="icon" src="./Js.svg" alt="" />
            <img className="icon" src="./css.svg" alt="" />
          </div>
        </div>
        <div className="card">
          <p className="numOfCard">2</p>
          <p className="title">Back End</p>
          <p className="description">
            Résoudre des problèmes grâce à Node.js, Express.js, MongoDB, MySQL.
          </p>
          <div className="icons">
            <img className="icon" src="./Node.svg" alt="" />
            <img className="icon" src="./ExpressJs.svg" alt="" />
            <img className="icon" src="./mongoDB.svg" alt="" />
            <img className="icon" src="./MySQL.svg" alt="" />
          </div>
        </div>
        <div className="card">
          <p className="numOfCard">3</p>
          <p className="title">Competence</p>
          <p className="description">
            Maitriser la planification des tâches “backlog SCRUM” et effectuer
            leur suivi. Travailler en équipe et collaborer avec Git & GithHub..
          </p>
          <div className="icons">
            <img className="icon1" src="./git.svg" alt="" />
          </div>
        </div>
        <div className="card">
          <p className="numOfCard">4</p>
          <p className="title">Devenir Pro</p>
          <p className="description">
            Savoir vulgariser du code auprès d'une personne non technique.
          </p>
          <div className="icons">
            <img className="icon1" src="./plus.svg" alt="" />
          </div>
        </div>
      </div>

      {/* pré requis */}
      <div className="pre-requis">
        <div className="parent-card">
          <div className="card-pre-requis">
            <h1 className="h1">Pré-requis</h1>
            <h2 className="h2">
              Pour accéder à ce bootcamp, les candidats doivent répondre aux
              pré-requis suivants :
            </h2>
            <p className="Pargraphe">
              <p className="bold">Age :</p> Avoir au moins 18 ans
              <br />
              Aucun pré-requis académique n'est obligatoire
              <br />
              <p className="bold">Langue :</p> A2 à B1 en langue anglaise
              minimum (niveau débutant avancée à intermédiaire).
              <br />
              Passer les tests de positionnement et l'interview d'admission
              (gratuit)
              <br />
              <p className="bold">Matériel :</p> Un ordinateur (PC ou Mac),
              muni d’un casque son, d’une webcam.
              <br />
              Aussi, il faut être administrateur de votre ordinateur afin de
              pouvoir installer des programmes complémentaires.
            </p>
            <img className="top-left" src="./Portal.svg" alt="background" />
            <img className="bottom-right" src="./Portal.svg" alt="background" />
            <button className="button">Postuler</button>
          </div>
        </div>
      </div>

      {/* Programme */}
      <div className="Programme">
        <h1 className="prog-title1">Découvrez le programme en détail</h1>
        <div className="prog-title2">
          Consultez le programme de notre formation, semaine par semaine.
        </div>
        <ul className="selectBar">
          <li
            className="week"
            onClick={() => handleWeekClick(0)}
            onMouseOver={() => handleWeekClick(0)}
          >
            WEEK 1-6
          </li>
          <li
            className="week"
            onClick={() => handleWeekClick(1)}
            onMouseOver={() => handleWeekClick(1)}
          >
            WEEK 7
          </li>
          <li className="week">WEEK 8-12</li>
          <li className="week">WEEK 13</li>
          <li className="week">WEEK 14-19</li>
          <li className="week">CAREER SERVICE</li>
        </ul>

        {weeksData[selectedWeekIndex]}
      </div>

      {/* bourse */}
      <div className="bourse">
        <div className="card-bourse1">
          <div className="text-bourse1">Profitez d'une bourse exceptionnelle de</div>
        </div>
        <div className="card-bourse2">
          <div className="text-bourse2">-40%</div>
        </div>
      </div>

      {/* last */}
      <div className="last">
        <div className="last-title">
          Frais de scolarité et options de <span className="span1">financement</span>
        </div>
        <div className="last-cards">
          <div className="last-card1">
            <img className="last-image" src="./image 7.svg" alt="Card 1" />
            <div className="last-description">
              Paiement comptant <span className="span2">6786 TND</span> au lieu de 11310 TND
            </div>
          </div>
          <div className="last-card2">
            <img className="last-image" src="./image 8.svg" alt="Card 2" />
            <div className="last-description">
              Paiement sur 3 fois <span className="span2">2262 TND X 3</span> au lieu de 3770 TND x 3
            </div>
          </div>
        </div>
        <button>Postuler</button>
      </div>
    </div>
  );
};

export default Page;
