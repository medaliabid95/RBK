import React from "react";
import "./style.css";

const Page = () => {
  return (
    <div>
      <div className="container">
        <div className="background-overlay"></div>
        <div className="text-container">
          <p className="p">Full-stack JavaScript Professional</p>
        </div>
      </div>

      {/* announcement */}
      <div className="announcement">
        <div className="text-ads">
          <p>
            Profitez d'une bourse exceptionnelle de -40% 
          </p>
          <p>
            Profitez d'une bourse exceptionnelle de -40% 
          </p>
          <p>
            Profitez d'une bourse exceptionnelle de -40% 
          </p>
          <p>
            Profitez d'une bourse exceptionnelle de -40% 
          </p>
        </div>
      </div>

       {/* cards */}
      <div className="cards">
        <div className="card">
          <p className="numOfCard">1</p>
          <p className="title" >Front End</p>
          <p className="description">Booster l'interface du site avec JavaScript et créer une interface responsive avec CSS3.</p>
          <img className = "icons" src="./Js.svg" alt="" />
          <img className = "icons" src="./css.svg" alt="" />  
        </div>
        <div className="card">
          <p className="numOfCard">2</p>
          <p className="title">Back End</p>
          <p className="description">Résoudre des problèmes grâce à Node.js, Express.js, MongoDB, MySQL.</p>
          <img className = "icons" src="./Node.svg" alt="" />
          <img className = "icons" src="./ExpressJs.svg" alt="" />  
          <img className = "icons" src="./mongoDB.svg" alt="" />
          <img className = "icons" src="./MySQL.svg" alt="" />  
        </div>
        <div className="card">
          <p className="numOfCard">3</p>
          <p className="title" >Competence</p>
          <p className="description">Maitriser la planification des tâches “backlog SCRUM” et effectuer leur suivi. Travailler en équipe et collaborer avec Git & GithHub..</p>
          <img className = "icons" src="./github.svg" alt="" />  
        </div>
        <div className="card">
          <p className="numOfCard">4</p>
          <p className="title" >Devenir Pro</p>
          <p className="description" >Savoir vulgariser du code auprès d'une personne non technique.</p>
          <img className = "icons" src="./Soft Skills.svg" alt="" /> 
        </div>
      </div>


      {/* pré requis  */}
<div className="pre-requis">
      <img className="top-left" src="./Portal.svg" alt="background" />
      <img className="bottom-right" src="./Portal.svg" alt="background" />
      <div className="parent-card">
     <div className="card-pre-requis">
      <h1 className="h1">Pré-requis</h1>
      <h2 className="h2">Pour accéder à ce bootcamp, les candidats doivent répondre aux pré-requis suivants :</h2>
      <p className="Pargraphe"> <p className="bold">Age :</p> Avoir au moins 18 ans<br />
        Aucun pré-requis académique n'est obligatoire<br />
        <p className="bold">Langue :</p> A2 à B1 en langue anglaise minimum (niveau débutant avancée à intermédiaire).<br />
        Passer les tests de positionnement et l'interview d'admission (gratuit)<br />
        <p className="bold" >Matériel :</p> Un ordinateur (PC ou Mac), muni d’un casque son, d’une webcam.<br />
        Aussi, il faut être administrateur de votre ordinateur afin de pouvoir installer des programmes complémentaires.</p>
    </div>
    <button> Postuler </button>
  </div>
</div>

  {/* Programme  */}
    <div className="Programme">
    <img src="./image 6.png" alt="" />
    </div>



    </div>
  );
};

export default Page;
