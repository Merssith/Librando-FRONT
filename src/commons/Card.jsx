
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CardBook = ({ book }) => {
  return (
    <Card >
      <Card.Img variant="top" src={book.front} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.description.slice(0, 150).concat("...")}</Card.Text>
        <Link to={`/book/${book.id}`}>
          <Button variant="primary">Mira mis detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardBook;
