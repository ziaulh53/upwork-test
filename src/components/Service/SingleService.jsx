import React from "react";
import { Col, Row } from "react-bootstrap";
import { Title } from "../shared";

const SingleService = ({ title, desc, idx }) => {
  const shouldSwap = idx % 2;
  console.log(shouldSwap);
  return (
    <Col md="12" key={idx}>
      <div className="single-service">
        <Row>
          {shouldSwap === 0 ? (
            <>
              <Col md="6">
                <img src="/img/rectangle.png" alt="rectangle" />
              </Col>
              <Col md="6" className="d-flex align-items-center">
                <div>
                  <Title text={title} className="service-title" />
                  <p className="service-desc">{desc}</p>
                </div>
              </Col>
            </>
          ) : (
            <>
              <Col md="6" className="d-flex align-items-center">
                <div>
                  <Title text={title} className="service-title" />
                  <p className="service-desc">{desc}</p>
                </div>
              </Col>
              <Col md="6">
                <img src="/img/rectangle.png" alt="rectangle" />
              </Col>
            </>
          )}
        </Row>
      </div>
    </Col>
  );
};

export default SingleService;
