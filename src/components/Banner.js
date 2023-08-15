import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/perfil.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Backend Developer", "FullStack Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Anthony`} <span className="txt-rotate" dataPeriod="850" data-rotate='[ "Web Developer", "Backend Developer", "FullStack Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Highly motivated Full Stack Developer with a focus on Backend and Advanced Technical
                    Drawing skills with experience in architectural and civil projects. Possess strong skills in
                    teamwork, strategic thinking, and leadership. Specialized in Front-end and Back-end
                    development, with knowledge in project management, GIT, data structures, algorithms, agile
                    methodologies, frameworks, and CSS</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
  <TrackVisibility>
    {({ isVisible }) =>
      <div
        className={`${isVisible ? "animate__zoomIn" : ""}`}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={headerImg}
          alt="Header Img"
          style={{
            borderRadius: "50%",
            width: "350px",
            height: "350px", // Agrega esto para asegurarte de que el tamaño no cambie
            maxWidth: "100%",
          }}
        />
      </div>}
  </TrackVisibility>
</Col>
        </Row>
      </Container>
    </section>
  )
}
