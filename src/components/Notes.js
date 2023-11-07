import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container, Col, Row } from "react-bootstrap";

const Notes = (props) => {
  const OnDelete = () => {
    props.delete(props.id);
  };
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "13rem", height: "9rem" }}>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                {props.title}
              </Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                {props.desc}
              </Card.Text>
              <Button
                style={{ width: "50px", alignSelf: "" }}
                variant="danger"
                onClick={OnDelete}
              >
                ✖️
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Notes;
