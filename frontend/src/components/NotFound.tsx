import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function NotFound({ Message }: { Message: string }) {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <p>{Message ? Message : "Not Found"}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NotFound;
