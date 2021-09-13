import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { SharedBtn, Title } from "../shared";

const Faq = () => (
  <section id="faq-section">
    <Container>
      <Row className="d-flex justify-content-around">
        <Col lg={8} md={8}>
          <div className="faq-title">
            <Title text="FAQ" className="title-text" />
          </div>
          <div className="faq-list">
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <Title
                    className="faq-question"
                    text="Who can benefit from the DossierDirect platform?"
                  />
                </Accordion.Header>
                <Accordion.Body>
                  <p className="answer">
                    Lany professional that communicates through email with their
                    clients
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <Title
                    className="faq-question"
                    text="What are the benefits of the DossierDirect platform?"
                  />
                </Accordion.Header>
                <Accordion.Body>
                  <p className="answer">
                    Automates clerical tasks, saving the lawyer significant time
                    in building their court files from inception Facilitates
                    communication of documents between lawyer and client Assists
                    professional to effortlessly maintain and organize their
                    client files
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <Title
                    className="faq-question"
                    text="Where can I access my DossierDirect portal?"
                  />
                </Accordion.Header>
                <Accordion.Body>
                  <p className="answer">
                    On all devices including Mobile; Desktop and Tablet
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <Title
                    className="faq-question"
                    text="Can I cancel my membership at any time?"
                  />
                </Accordion.Header>
                <Accordion.Body>
                  <p className="answer">
                    This membership can be cancelled at anytime All user files
                    will be easily available to export and save on preferred
                    device
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <Title
                    className="faq-question"
                    text="If I have a problem, who can I call?"
                  />
                </Accordion.Header>
                <Accordion.Body>
                  <p className="answer">
                    Our customer support line is available 24/7
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <Title
                    className="faq-question"
                    text="Can I integrate existing files onto the DossierDirect platform?"
                  />
                </Accordion.Header>
                <Accordion.Body>
                  <p className="answer">
                    DossierDirect provides for smooth import/export of Word and
                    PDF files
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-around">
        <Col lg={8}>
          <div className="get-start">
            <div className="start-title">
              <Title text="Get started today" />
            </div>
            <div className="get-start-content">
              <p>
                See how Dossier Dirrect can help your law firm get organized and
                practice more effeciently.
              </p>
            </div>
            <div className="get-buttons">
              <SharedBtn text="Get Started"/>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Faq;
