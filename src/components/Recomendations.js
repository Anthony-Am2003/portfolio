import { Container, Row, Col } from "react-bootstrap";
import { RecommendationCard } from "./RecomendationCard";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Recommendations = () => {

  const recommendations = [
    {
      name: "Valentina Vidal",
      position: "Huntek Co-Founder",
      recommendation: "Anthony es un gran profesional, pro activo, con muchísimas ganas siempre de sumar y sin dudar de dar su mejor cara para los retos que puede tener. Siempre tratando de aprender un poco mas para poder sumar a Huntek. Le espera un camino enorme sin duda alguna",
      linkedinUrl:'https://www.linkedin.com/in/valentina-vidal-naranjo-1aa341113/',
      companyLogo: 'https://ams3.digitaloceanspaces.com/graffica/2023/02/cocacola-logo-1024x696.jpeg'

    },
    {
      name: "Gustavo Martinez",
      position: "HH's Coordinator",
      recommendation: "Felicitaciones Anthony por tu excelente desempeño en el programa de Henry Heroes! Tu habilidad para presentar ejercicios en vivo y resolver dudas ha sido impresionante. Tu pasión y dedicación son evidentes y te distinguen como un verdadero Henry Heroe. Sigue así! ",
      linkedinUrl: 'https://www.linkedin.com/in/martinez-trejo-gustavo/'
    },
    {
      name: "Gibson Gil",
      position: "Full Stack Developer",
      recommendation: "Compartir espacios con Anthony fue una agradable experiencia, siempre buscando la forma de ayudar y aprender, le espera una gran carrera y un enorme futuro, sin duda un gran colega de profesion.",
      linkedinUrl: 'https://www.linkedin.com/in/gibsongil/'
    }
  ];

  return (
    <section className="recommendations" id="recommendations">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="technology-bx wow zoomIn">
              <h2>Recomendations</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard dummy text.</p>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <Row>
                      {
                        recommendations.map((recommendation, index) => {
                          return (
                            <Col key={index} sm={6} md={4}>
                              <RecommendationCard {...recommendation} />
                            </Col>
                          );
                        })
                      }
                    </Row>
                  </div>}
              </TrackVisibility>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

