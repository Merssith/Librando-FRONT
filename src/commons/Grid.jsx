import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardBook from "./Card";
import Pagination from "react-bootstrap/Pagination";

import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

const Grid = () => {
  const { type } = useParams();
  console.log(type)

  const [libros, setLibros] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/books/`)
      .then((res) => res.data)
      .then((books) => {
        console.log(books);
        setLibros(books);
      });
  }, []);

  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  } 

  return (
    <div>
      <div>
        <Pagination size="lg">{items}</Pagination>
        <br />
      </div>
      <Container>
        <Row>
          {libros.map((book, i) => (
            <Col lg={6} md={6} key={i}>
              <Link to= {`/book/${book.id}`} >
              <CardBook book={book} />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Grid;
