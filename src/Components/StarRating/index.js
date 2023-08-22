import React from "react";
import { Row, Col } from "react-bootstrap";
import Star from "../Star";

function StarRating() {
  return (
    <Row>
      {[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((value) => (
        <Col key={value}>
          <Star value={value} />
        </Col>
      ))}
    </Row>
  );
}

export default StarRating;