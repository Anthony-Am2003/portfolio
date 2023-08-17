import { Col } from "react-bootstrap";

export const RecommendationCard = ({ name, recommendation, position }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="recommendation-card">
        <div className="recommendation-text">
          <h4>{name}</h4>
          <span>{position}</span>
          <p>{recommendation}</p>
        </div>
      </div>
    </Col>
  );
};