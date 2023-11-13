import { Container, Row, Col } from "react-bootstrap";
import { RecommendationCard } from "./RecomendationCard";
import { useTranslation } from "react-i18next";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Recommendations = () => {


  const [t, i18n] = useTranslation("global");

  const recommendations = [
    {
      name: "Valentina Vidal",
      position: "Huntek Co-Founder",
      recommendation: t("recomendations.valentina"),
      linkedinUrl:'https://www.linkedin.com/in/valentina-vidal-naranjo-1aa341113/',
      companyLogo: 'https://ams3.digitaloceanspaces.com/graffica/2023/02/cocacola-logo-1024x696.jpeg'

    },
    {
      name: "Gustavo Martinez",
      position: "HH's Coordinator",
      recommendation: t("recomendations.gustavo"),
      linkedinUrl: 'https://www.linkedin.com/in/martinez-trejo-gustavo/'
    },
    {
      name: "Gibson Gil",
      position: "Full Stack Developer",
      recommendation: t("recomendations.gibson"),
      linkedinUrl: 'https://www.linkedin.com/in/gibsongil/'
    }
  ];

  return (
    <section className="recommendations" id="recommendations">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="technology-bx wow zoomIn">
              <h2>{t("recomendations.title")}</h2>
              <p>{t("recomendations.introduction")}</p>
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

