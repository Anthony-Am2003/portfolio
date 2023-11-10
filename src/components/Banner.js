import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/perfil.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { useTranslation } from "react-i18next";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Backend Developer", "FullStack Developer" ];
  const period = 2000;

  const [t, i18n] = useTranslation("global");

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
            <span className="tagline">{t("header.messaje")}</span>
            <h1>{t("header.welcome")}</h1>
            <p>{t("header.description")}</p>
            <button onClick={() => console.log('connect')}>{t("header.button")}<ArrowRightCircle size={25} /></button>
          </Col>
          <Col xs={18} md={6} xl={5}>
            <img
              src={headerImg}
              alt="Header Img"
              style={{
                width: "500px",
                height: "500px",
                maxWidth: "110%",
                borderRadius: "50%",  // Hace que la imagen sea ovalada
                backgroundColor: "#282727",  // Fondo gris
                border: "3px solid white",  // Borde gris
                boxShadow: "0 0 30px orange"
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}