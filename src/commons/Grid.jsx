import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardBook from "./Card";
import Pagination from "./Pagination";

import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const Grid = () => {
  const { type } = useParams();
  console.log(type);

  const [libros, setLibros] = useState([]);
  const [page, setPage] = useState(1);
  const [forPage, setForPage] = useState(12);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/books/`)
      .then((res) => res.data)
      .then((books) => {
        console.log(books);
        setLibros(books);
      });
  }, []);

  const max = libros.length/forPage

  return (
    <div>
      <div className="paginacion">
     <Pagination page={page} setPage={setPage} max={max} />
     </div>
      <br/>
      <Container>
        <Row>
          {libros
          .slice((page - 1) * forPage, (page - 1) * forPage + forPage)
          .map((book, i) => (
            <Col lg={3} md={4} sm={6} key={i}>
              <CardBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
      <br/>
    </div>
  );
};

export default Grid;
