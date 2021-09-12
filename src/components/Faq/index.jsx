import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Title } from '../shared';

const Faq = ()=>(
    <section id="faq-section">
        <Container>
            <Row>
                <Col>
                 <div className="faq-title"><Title text="FAQ"/></div>
                 <div className="faq-list">
                     <h3>hello</h3>
                 </div>
                </Col>
            </Row>
        </Container>
    </section>
)

export default Faq;