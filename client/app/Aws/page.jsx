import "./aws.css";
// import Clouds from "../../public/Clouds.svg"

const page = () => {
  return (
    <div className="aws-container">
      <section className="image-aws-container">
        <img src="./aws2.png" alt="aws" />
        <div className="title">AWS Certified Cloud practitioner</div>
      </section>
      <section className="aws-description-container">
        <div className="aws-rbk-title">
          <img src="./RBK.png" alt="Rbk" />
          <img src="./awsRestart.png" alt="aws" />
          <p>
            Apprenez le cloud computing et lancez votre carrière dans le cloud
            avec <span>AWS re/Start</span>
          </p>
        </div>
        <div className="description-container">
          <div className="steps-container">
            <div className="step ">
              <embed src="aws1.svg" />
              <p>
                Entrez en contact avec des employeurs et démarrez votre carrière
              </p>
            </div>
            <div className="step animate__slideInRight">
              <embed src="aws2.svg" />
              <p>
                Accédez à une formation gratuite, immersive et axée sur les
                compétences
              </p>
            </div>
          </div>
          <div className="video-container">
            {/* <img src="whatiscomputing.png" alt="aws" /> */}
            <video controls="controls">
              <source src="https://video.wixstatic.com/video/dd4762_08fb877dbb7c4c77b72b62ada7b52a9e/480p/mp4/file.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="steps-container">
            <div className="step">
              <embed src="aws1.svg" />
              <p>
                Entrez en contact avec des employeurs et démarrez votre carrière
              </p>
            </div>
            <div className="step">
              <embed src="aws2.svg" />
              <p>
                Accédez à une formation gratuite, immersive et axée sur les
                compétences
              </p>
            </div>
          </div>

          <button className="aws-btn">S'inscrire</button>
          <div className="about">
            <h2>
              A propos du programme <span>AWS re/Start</span>
            </h2>
            <div className="content">
              AWS re/Start est un programme de développement des compétences sur
              les fondamentaux des techniques du Cloud computing. Ce programme
              de formation intensif AWS re/Start est délivré par RBK Tunisie.
              L'apprenant sera formé à l'administration et la maintenance des
              systèmes et réseaux avec une spécialisation aux techniques du
              Cloud : installation et maintenance de logiciels et de matériels,
              sécurisation des infrastructures, monitoring, déploiement
              d'applicatifs, techniques DevOps dans l'administration, Cloud AWS.
            </div>
          </div>
        </div>
        <div className="planning">
          <div className="planning-description">
            <h3 className="planning-title">
              Un planning hebdomadai reconçu pour vous préparer à votre
              <span> future carrière</span>
            </h3>
            <p className="planning-content">
              Grâce à des exercices, des ateliers et des cours basés sur
              desscénarios tirés du monde réel, les apprenants développent
              leurscompétences en Linux, en Python, en réseau, en sécurité et
              enbases de données relationnelles. Il aura l'opportunité de
              passerles certifications propres aux outils, systèmes et logiciels
              de Cloud AWS (Amazon Web Services)
            </p>
            <button className="planining-btn">S'inscrire</button>
          </div>
          <div className="Video">
            <img src="./Video.png" alt="video" />
          </div>
        </div>
      </section>
      <section className="programme">
        <h2>À propos du programme</h2>
        <p>
          Le programme AWS re/Start enseigne les principes de base du cloud AWS
          pour aider les apprenants à réussir dans des postes de niveau débutant
          dans le cloud. Grâce à des exercices basés sur des scénarios, des
          ateliers pratiques et des cours, les apprenants acquièrent des
          compétences en Linux, Python, en réseau, en sécurité et en bases de
          données relationnelles.
        </p>
        <div className="cards-container">
          <div className="card-item">
            <p>1</p>
            <p>Cloud Foundation</p>
          </div>
          <div className="card-item">
            <p>2</p>
            <p>Linux Fundamentals</p>
          </div>
          <div className="card-item">
            <p>3</p>
            <p>Networking Fundamentals</p>
          </div>
          <div className="card-item">
            <p>4</p>
            <p>Security Fundamentals</p>
          </div>
          <div className="card-item">
            <p>5</p>
            <p>Python Programming</p>
          </div>
          <div className="card-item">
            <p>6</p>
            <p>Databases Fundamentals</p>
          </div>
          <div className="card-item">
            <p>7</p>
            <p>AWS Core Services</p>
          </div>
          <div className="card-item">
            <p>8</p>
            <p>Employability Skills</p>
          </div>
          <div className="card-item">
            <p>9</p>
            <p>Cloud Practitioner Certification Practice</p>
          </div>
        </div>
      </section>
      <section className="critères">
        <div className="criteres-title">
          <h2>Critères d'éligibilité</h2>
          <p>Formation Gratuite et aucun prérequis technique ! Mais…</p>
        </div>
        <div className="about">
          
          
              <ul>
                <li>Être âgé(e) de plus de 18 ans.</li>
                <li>Aptitude à lire, écrire et communiquer en français et en anglais</li>
                <li>Posséder le minimum de culture numérique (aucune connaissance en programmation n’est requise)</li>
                <li>tre à la recherche d’un emploi ou d’une nouvelle expérience professionnelle.​Être disponible</li>
                <li>Être disponible, pendant toute la durée du programme (du lundi au vendredi, de 9h à 17h)</li>
                <li>Aucun engagement professionnel ni académique</li>
                <li>Intéressé(e) par le domaine des TICs et prêt(e) à intégrer le marché de l’emploi immédiatement suite à la formation</li>
              </ul>
          
        </div>
        <div className="criteres-btn-container">
        <button className="planining-btn">S'inscrire</button>
        </div>
      
      </section>

        
    </div>
  );
};

export default page;
