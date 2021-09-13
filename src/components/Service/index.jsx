import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "../shared";
import SingleService from "./SingleService";

const Service = () => (
  <section id="service">
    <Container>
      <Row>
        <Col md="12">
          <Title
            text="Dossier Direct provides a simple and easy to use tool for lawyers that:"
            className="section-title"
          />
        </Col>
        {services.map((service, idx) => (
          <SingleService {...service} idx={idx} />
        ))}
        <Title
          text="Can be used across all industries"
          className="section-footer-title"
        />
      </Row>
    </Container>
  </section>
);

export default Service;

const services = [
  {
    title: "Automation",
    desc: "Automates clerical tasks, saving the lawyer significant time in building their court files from inception",
  },
  {
    title: "Ease of communication",
    desc: "Facilitates communication of documents between lawyer and client",
  },
  {
    title: "Organization",
    desc: "Assists lawyers in effortlessly maintaining and organizing their court files",
  },
  {
    title: "Keep track of progress",
    desc: "Keeps track of documents and Exhibits provided by the client",
  },
  {
    title: "Reduction of e-mail clutter",
    desc: "Enables clients to provide documents to the lawyer directly through the platform, thereby reducing e-mail clutter for the lawyer",
  },
  {
    title: "Move toward paperless",
    desc: "Promotes moving towards a paperless practice",
  },
  {
    title: "Saves time and reduces cost",
    desc: "Saves time and reduces costs all around",
  },
];
