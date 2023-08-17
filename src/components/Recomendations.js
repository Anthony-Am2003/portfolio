import { Container, Row, Col } from "react-bootstrap";
import { RecommendationCard } from "./RecomendationCard";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Recommendations = () => {

  const recommendations = [
    {
      name: "John Doe",
      position: "CEO",
      recommendation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus a eros at consequat.",
    },
    {
      name: "Gustavo Martinez",
      position: "HH's Coordinator",
      recommendation: "Felicitaciones Anthony por tu excelente desempeño en el programa de Henry Heroes! Tu habilidad para presentar ejercicios en vivo y resolver dudas ha sido impresionante. Tu pasión y dedicación son evidentes y te distinguen como un verdadero Henry Heroe. Sigue así! ",
    },
    {
      name: "Michael Johnson",
      position: "Developer",
      recommendation: "Nullam bibendum varius nisi, at iaculis diam volutpat ac. In ut mi at magna euismod dictum.",
    }
  ];

  return (
    <section className="recommendations" id="recommendations">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
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
          </Col>
        </Row>
      </Container>
    </section>
  );
};