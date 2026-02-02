import React from "react";

/* 🔹 ICONS IMPORT (VERY IMPORTANT) */
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGit
} from "react-icons/di";

/* 🔹 CSS IMPORT */
import "../styles/skills.css";

export default function Skills() {
  return (
 <section id="skills" className="section">
  <h2>Skills</h2>
  {/* yahin icons / cards hain */}



      <div className="skills-row">

        <div className="skill-card">
          <DiHtml5 className="skill-icon html" />
          <span className="skill-name">HTML</span>
        </div>

        <div className="skill-card">
          <DiCss3 className="skill-icon css" />
          <span className="skill-name">CSS</span>
        </div>

        <div className="skill-card">
          <DiJavascript1 className="skill-icon js" />
          <span className="skill-name">JavaScript</span>
        </div>

        <div className="skill-card">
          <DiReact className="skill-icon react" />
          <span className="skill-name">React</span>
        </div>

        <div className="skill-card">
          <DiNodejsSmall className="skill-icon node" />
          <span className="skill-name">Node.js</span>
        </div>

        <div className="skill-card">
          <DiMongodb className="skill-icon mongo" />
          <span className="skill-name">MongoDB</span>
        </div>

        <div className="skill-card">
          <DiGit className="skill-icon git" />
          <span className="skill-name">Git</span>
        </div>

      </div>
    </section>
  );
}

