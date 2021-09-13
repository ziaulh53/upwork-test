import React from "react";
import { Col } from "react-bootstrap";
import { Title } from "../shared";

const SingleCriteria = () => (
  <Col md="4">
    <div className="sngle-criteria">
      <img src="/img/ellipse.png" alt="ellipse" />
      <Title text="Lorem Ipsum" className="single-criteria-title" />
      <p className="work-criteria-desc">
        See how Dossier Dirrect can help your law firm get organized and
        practice more effeciently.
      </p>
    </div>
  </Col>
);

export default SingleCriteria;
