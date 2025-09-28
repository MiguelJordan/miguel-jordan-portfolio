import React from "react";


const education = [
    {
    school: "Université de Rennes",
    degree: "Master Ingénierie Logicielle",
    period: "2025 - 2027",
    description: "Conception OO, projets agile, architecture fullStack (SpringBoot/Angular/React/Vue), cloud, Kubernetes."
  },
  {
    school: "Université de Caen Normandie",
    degree: "Licence en Informatique",
    period: "2023 - 2025",
    description: "Génie logiciel, algorithmique, programmation Web, Base de données ,systèmes, réseaux."
  }
  
];

const experiences = [
  {
    company: "Freelance",
    role: "Développeur FullStack",
    period: "2021 - 2022",
    description: "Conceptionet développement d’une application web complète. \n Architecture frontend/backend avec API REST.\n Gestion de projet avec contraintes client."
  },
  {
    company: "ATALIAN GLOBAL SERVICE",
    role: "Agent de service",
    period: "2024 - 2025",
    description: " Respect rigoureux des procédures et des standards de qualité."
  }
];

export default function EducationExperience() {
  return (
    <div className="edu-exp-page">
      <h1>Éducation & Expériences professionnelles</h1>

      <section className="edu-section">
        <h2>Éducation</h2>
        {education.map((edu, index) => (
          <div className="card" key={index}>
            <h3>{edu.degree} - {edu.school}</h3>
            <span className="period">{edu.period}</span>
            <p>{edu.description}</p>
          </div>
        ))}
      </section>

      <section className="exp-section">
        <h2>Expériences professionnelles</h2>
        {experiences.map((exp, index) => (
          <div className="card" key={index}>
            <h3>{exp.role} - {exp.company}</h3>
            <span className="period">{exp.period}</span>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
