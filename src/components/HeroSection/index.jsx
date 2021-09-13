import React from "react";
import { Col, Container, Row, Input } from "react-bootstrap";
import { SharedBtn, Title } from "../shared";
import Features from "./Features";
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
              className="text-center hero-title"
            />
            <p className="bottom-desc">
              Work from home, run your firm. Let us show you how.
            </p>
            <div className="email-input">
              <input type="text" placeholder="Your work email" />
              <SharedBtn text="Start free trial" className="hero-btn" />
            </div>
            <Features />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
