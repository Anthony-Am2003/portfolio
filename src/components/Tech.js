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
import Carousel from 'react-multi-carousel';


export const Technologies = () => {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  
    return (
      <section className="technologies" id="technologies">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="technology-bx wow zoomIn">
                <h2>Technologies</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard dummy text.</p>
                <div className="technology-icons">
  <div className="icon-wrapper">
    <img src={htmlIcon} alt="HTML" />
    <div className="icon-overlay">HTML</div>
  </div>
  <div className="icon-wrapper">
    <img src={cssIcon} alt="CSS" />
    <div className="icon-overlay">CSS</div>
  </div>
  <div className="icon-wrapper">
    <img src={jsIcon} alt="JavaScript" />
    <div className="icon-overlay">JavaScript</div>
  </div>
  <div className="icon-wrapper">
    <img src={reactIcon} alt="React" />
    <div className="icon-overlay">React</div>
  </div>
  <div className="icon-wrapper">
    <img src={reduxIcon} alt="Redux" />
    <div className="icon-overlay">Redux</div>
  </div>
  <div className="icon-wrapper">
    <img src={nodejsIcon} alt="Node.js" />
    <div className="icon-overlay">Node.js</div>
  </div>
  <div className="icon-wrapper">
    <img src={expressIcon} alt="Express" />
    <div className="icon-overlay">Express</div>
  </div>
  <div className="icon-wrapper">
    <img src={gitIcon} alt="Git" />
    <div className="icon-overlay">Git</div>
  </div>
  <div className="icon-wrapper">
    <img src={githubIcon} alt="GitHub" />
    <div className="icon-overlay">GitHub</div>
  </div>
  <div className="icon-wrapper">
    <img src={postgresqlIcon} alt="PostgreSQL" />
    <div className="icon-overlay">PostgreSQL</div>
  </div>
  <div className="icon-wrapper">
    <img src={sequelizeIcon} alt="Sequelize" />
    <div className="icon-overlay">Sequelize</div>
  </div>
  <div className="icon-wrapper">
    <img src={pythonIcon} alt="Python" />
    <div className="icon-overlay">Python</div>
  </div>
  <div className="icon-wrapper">
    <img src={fastapiIcon} alt="FastAPI" />
    <div className="icon-overlay">FastAPI</div>
  </div>
  <div className="icon-wrapper">
    <img src={dockerIcon} alt="Docker" />
    <div className="icon-overlay">Docker</div>
  </div>
</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };