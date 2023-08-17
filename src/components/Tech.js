import React from 'react';
import htmlIcon from "../assets/img/html-image.svg";
import cssIcon from "../assets/img/css-image.svg";
import jsIcon from "../assets/img/JS.svg";
import reactIcon from "../assets/img/react.svg";
import reduxIcon from "../assets/img/redux.svg";
import nodejsIcon from "../assets/img/node.svg";
import expressIcon from "../assets/img/express.svg";
import gitIcon from "../assets/img/git.svg";
import githubIcon from "../assets/img/github.svg";
import postgresqlIcon from "../assets/img/postgresql.svg";
import sequelizeIcon from "../assets/img/sequelize.png";
import pythonIcon from "../assets/img/python.svg";
import fastapiIcon from "../assets/img/fastApi.png";
import dockerIcon from "../assets/img/docker.svg";


export const Technologies = () => {
  return (
    <section className="technologies" id="technologies">
      <div className="container">
        <h2>Technologies</h2>
        <div className="technology-icons">
          <img src={htmlIcon} alt="HTML" />
          <img src={cssIcon} alt="CSS" />
          <img src={jsIcon} alt="JavaScript" />
          <img src={reactIcon} alt="React" />
          <img src={reduxIcon} alt="Redux" />
          <img src={nodejsIcon} alt="Node.js" />
          <img src={expressIcon} alt="Express" />
          <img src={gitIcon} alt="Git" />
          <img src={githubIcon} alt="GitHub" />
          <img src={postgresqlIcon} alt="PostgreSQL" />
          <img src={sequelizeIcon} alt="Sequelize" />
          <img src={pythonIcon} alt="Python" />
          <img src={fastapiIcon} alt="FastAPI" />
          <img src={dockerIcon} alt="Docker" />
        </div>
      </div>
    </section>
  );
};