import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "../shared";
import SingleCriteria from "./SingleCriteria";

const WorkCriteria = () => (
  <section id="work-criteria">
    <Container>
      <Row>
        <Col md="12">
          <Title text="How it works" className="wrok-criteria-title" />
        </Col>
        {arr.map((item) => (
          <SingleCriteria key={item} />
        ))}
      </Row>
    </Container>
  </section>
);

export default WorkCriteria;

const arr = [1, 2, 3];
