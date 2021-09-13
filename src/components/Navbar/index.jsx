import React from "react";
import { Container, Navbar } from "react-bootstrap";
import SharedBtn from "../shared/Button";

const Header = () => (
  <section id="header">
    <Navbar>
      <Container>
        <Navbar.Brand href="/" className="nav-logo">
          <img src="./img/logo.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="header-collaps">
          <div className="mt-2 left-menu">
            <Navbar.Text>Pricing</Navbar.Text>
            <Navbar.Text>FAQs</Navbar.Text>
          </div>
          <div className="right-menu">
            <Navbar.Text>Try for free</Navbar.Text>
            <SharedBtn className="login-button" text="Log In"/>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </section>
);

export default Header;
