import "./aws.css";
// import Clouds from "../../public/Clouds.svg"

const page = () => {
  return (
    <div className="aws-container">
      <section className="image-aws-container">
        <img src="./aws.png" alt="aws" />
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
            <iframe src="https://video.wixstatic.com/video/dd4762_08fb877dbb7c4c77b72b62ada7b52a9e/480p/mp4/file.mp4"></iframe>
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
    </div>
  );
};

export default page;
