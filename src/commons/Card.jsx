//Probando ver rama en github

import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardBook = ({ book }) => {
  return (
    //cuando Diego tenga listo su componente, envolvemos la cardBook en un Link y mostramos sus detalles
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={book.url} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.description}</Card.Text>
        <Button variant="primary">Mira mis detalles</Button>
      </Card.Body>
    </Card>
  );
};

export default CardBook;
