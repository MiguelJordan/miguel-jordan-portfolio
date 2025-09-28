import React from "react";


// Liste de compétences avec logo et nom
const languages = [
  { name: "Java", logo: "/logos/java.png" },
  { name: "Spring Boot", logo: "/logos/springboot.png" },
  { name: "JavaScript", logo: "/logos/javaScript.png" },
  { name: "React", logo: "/logos/react.png" },
  { name: "Angulr", logo: "/logos/angular.png" },
  { name: "Node.js", logo: "/logos/nodejs.jpeg" },
  { name: "SQL", logo: "/logos/sql.jpeg" },
  { name: "MongoDB", logo: "/logos/mongodb.png" },
  { name: "HTML5", logo: "/logos/html.png" },
  { name: "CSS3", logo: "/logos/css.png" },
  { name: "TypeScript", logo: "/logos/typescript.png" },
  { name: "Python", logo: "/logos/python.jpeg" },
  { name: "C", logo: "/logos/c.png" },
];

export default function Skills(){
   const url = import.meta.env.VITE_PUBLIC_URL;

  return (
    <div className="skills-page">
      <h1>Mes Compétences Techniques </h1>
      <div className="skills-grid">
        {languages.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={` /${url}${skill.logo}`} alt={skill.name} className="skill-logo" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


