import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "../shared";
const HeroSection = () => {
  return (
    <section id="hero-section">
      <Container>
        <Row>
          <Col className="text-center">
            <p className="upper-desc">
              LEGAL PRACTICE MANAGEMENT AND CLIENT INTAKE SOFTWARE
            </p>
            <Title
              text="Your clients rely on you. Lawyers rely on Dossier direct."
              textTransform="uppercase"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
