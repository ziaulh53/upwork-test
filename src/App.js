import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SharedBtn, Title } from "./components/shared";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <SharedBtn
              text="Start free trial"
              style={{ padding: "0.875rem 1.813rem" }}
            />
            <Title text="sdfl sadf" center fontSize={3} fontWeight={500} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
