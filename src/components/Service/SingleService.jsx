import React, { useEffect, useLayoutEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Title } from "../shared";

const SingleService = ({ title, desc, idx }) => {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  console.log(width, document);
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
                <div className="res-padding">
                  <Title text={title} className="service-title" />
                  <p className="service-desc">{desc}</p>
                </div>
              </Col>
            </>
          ) : (
            <>
              <Col md="6" className="d-flex align-items-center">
                <div className="res-padding">
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
