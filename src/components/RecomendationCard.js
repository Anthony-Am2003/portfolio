import { Col } from "react-bootstrap";

export const RecommendationCard = ({ name, recommendation, position, linkedinUrl, companyLogo }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className="recommendation-card">
        <div className="recommendation-text">
          <h4>{name}</h4>
          <span>{position}</span>
          <p>{recommendation}</p>
        </div>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="linkedin-button">LinkedIn</a>
      </div>
    </Col>
  );
};