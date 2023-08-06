import "./contact.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import Imagee from "../../components/contactImage/ContactImage.jsx"
import Méthodologie from '../../components/contactText/Méthodologie.jsx'


const page = () => {
  const iconStyle = {
    color: "#FF007B",
    fontSize: "min(5vw,3.2rem)",
    marginRight: "20px",
  };
  return (
    <div className="contact-container">
      <section className="image-contact-container">
        <img className="contact-img" src="./contact.png" alt="contact" />
        <div className="title">Contact Us</div>
      </section>
      <h1>Qui sommes nous ?</h1>
      <section className="qui-nous-somme">
      <Imagee imgSrc="/images/rbk-contact.png" arr1={   [1, 0.5, 0.1, 0]} arr2={[0, 0, -1000, 0]}/>
        <img className="rbk-imagess" src="/images/rbk-contact.png" alt="" />
        <p className="rotate"></p>

        <div className="qui-nous-somme-item">
         <div>
          <h3>*Notre formation</h3>
          <p>
            Une formation flexible et adaptable à vos besoins. RBK, un réseau
            d'écoles de code opérant en Tunisie et en Jordanie depuis 2016. Nous
            avons eu la chance d'apprendre et grandir aux côtés de HACK REACTOR,
            l'école de code classée N#1 au monde de 2012 à 2020 avec qui nous
            avons partagé les cursus et l'expertise jusqu'à leur fin 2021.Nous
            avons aussi collaboré avec OpenClassrooms en étant leur distributeur
            exclusif en Tunisie. Enfin nous sommes partenaires d'implémentation
            de AWS pour la formation en cloud re/start
          </p>
          </div>
        </div>
       
      </section>
      <section className="qui-nous-somme outcomes">
        <div className="qui-nous-somme-item ">
          <h3>* It's all about… Outcomes</h3>
          <ul>
            <li>
              1 000+ Diplômés depuis notre création (700 en Tunisie et 300 en
              Jordanie)
            </li>
            <li>100+ Entreprises partenaires</li>
            <li>
              Nos étudiants sont employés à 93% en moins de 6 mois de la
              réception de leur diplôme et à plus de 98% après une année.
            </li>
            <li>
              3X le SMIG est le salaire moyen de nos étudiants pour leurs
              premier emploi
            </li>
          </ul>
        </div>
        <p className="rotate"></p>
        <Imagee  imgSrc="/images/méthodologie.jpg" arr1={  [0, 0.1, 0.5, 1]} arr2={[1000, 1000, 0, 0]}/>
        {/* <img src="méthodologie.jpg" alt="" /> */}
      </section>
      <section className="qui-nous-somme méthodologie">
      <img className="rbk-imagess" src="/images/workplace.jpg" alt="" />
        {/* <img src="workplace.jpg" alt="" /> */}
        <Imagee imgSrc="/images/workplace.jpg" arr1={[1, 0.5, 0.1, 0]} arr2={[0, 0, -1000, 0]}/>
        
        <p className="rotate"></p>
 <Méthodologie arr1={  [0, 0.1, 0.5, 1]} arr2={[1000, 1000, 0, 0]}/>
      </section>
      <section className="contact-form">
        <h1>CONTACT</h1>
        
        <div className="form-container">
          <div className="rbk-infos">
            <div className="info-item">
              <FaMapMarkerAlt style={iconStyle} /> B24, Technopark Elghazela
              ariana, 2088, Tunisie
            </div>
            <div className="info-item">
              <FiPhone style={iconStyle} /> +216 71 85 85 85
            </div>
            <div className="info-item">
              <MdOutlineMailOutline style={iconStyle} />
              hello@rbk.tn
            </div>
            <div className="info-item">
              <AiFillFacebook style={iconStyle} />
              <AiFillTwitterSquare style={iconStyle} />
              <BsLinkedin style={iconStyle} />
              <AiFillInstagram style={iconStyle} />
              <BsYoutube style={iconStyle} />
            </div>
          </div>
          <div className="form">
            <div className="nom">
              <input type="text" placeholder="Prenom" />
              <input type="text" placeholder="Nom de Famille" />
            </div>
            <input className="email-input" type="text" placeholder="Email *" />
            <input
              className="message-input"
              type="text"
              placeholder="Message"
            />
            <button>Envoyer</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
