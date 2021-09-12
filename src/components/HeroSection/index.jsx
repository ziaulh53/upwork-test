import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const HeroSection = () => {
  return (
    <section id="hero-section">
      <Container>
        <Row>
          <Col>
            <p className="upper-desc">
              LEGAL PRACTICE MANAGEMENT AND CLIENT INTAKE SOFTWARE
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;