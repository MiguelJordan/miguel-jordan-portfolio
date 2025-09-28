

import photo from "../assets/moi.jpeg";

import "../components/Layout/index.css";



export default function Home() {

  const url = import.meta.env.VITE_PUBLIC_URL;

  return (
   <>
   <div className="profile-container">
        <img
          src={photo}
          alt="Photo de profil"
          className="profile-photo"
        />
      </div>
      <div className="identity">
        <h1>KAMGANG KENMOE Miguel Jordan</h1>
        <h2>Ingénieur Logicielle</h2>
      </div>
      <div className="presentation">
        <p className='intro'>
         Actuellement étudiant en Master Ingénierie Logicielle à l'Université de Rennes, je développe mes compétences en informatique tout en approfondissant mes connaissances en programmation orientée objet et en architecture applicative. Je suis passionné par l'apprentissage et l'innovation, et je m'engage
        à évoluer dans des environnements académiques et professionnels stimulants. 
        </p>
        <a className="cta-btn" href={ `${url}/public/CV/CV_Stage.pdf`} download={"MiguelJordan_CV.pdf"} target="_blank" rel="noopener noreferrer">
          Télécharger mon CV
        </a>
      </div>
   </>
  )
}
