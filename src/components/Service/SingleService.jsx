import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Title } from "../shared";

const SingleService = ({ title, desc, idx }) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, [window.innerWidth]);
  
  console.log(width);
  const shouldSwap = width > 767 ? idx % 2 : 0;
  return (
    <Col md="12">
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
