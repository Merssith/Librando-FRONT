import { useState } from "react";
import { Container, Col, Row, Stack, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../state/actions/cartActions";

function Book({ book, history }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(book));
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md={1}>
            <Button variant="color5" size="sm" onClick={handleGoBack}>
              Volver
            </Button>
          </Col>
          <Col>
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
              {book.title}
            </h1>
          </Col>
        </Row>

        <Row>
          <Col md={5} className="mb-4">
            <img src={book.front} alt="img" style={{width:"500px"}}></img>
          </Col>
          <Col md={7}>
            <Stack gap={1}>
              <p>
                <strong>Autor:</strong> {book.author}
              </p>
              <p>
                <strong> Genero:</strong> {book.genre ? book.genre.name : ""}
              </p>
              <p>
                <strong>Descripción:</strong> {book.description}
              </p>
              <p>
                <strong>Editorial:</strong> {book.editorial}
              </p>
              <p>
                <strong>Rate:</strong> ⭐⭐⭐⭐
              </p>
              <p>
                <strong>Stock:</strong> {book.stock}
              </p>
              <p>
                <strong>Precio:</strong> ${book.price ? book.price.toFixed(2) : ""}
              </p>
              <div style={{ marginTop: "10px" }}>
                <Button variant="color5" onClick={handleAddToCart}>
                  Agregar al carrito
                </Button>
              </div>
            </Stack>
          </Col>
        </Row>

        <Row id="quantity"></Row>
      </Container>
    </div>
  );
}

export default Book;
