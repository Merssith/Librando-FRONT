import { Container, Col, Row, Stack, Button } from "react-bootstrap";

function Book({book}) {
  return (
    <div style={{ padding: "5%" }}>
      <Container>
        <Row blue>
          <h1 className="border" style={{ textAlign: "center" }}>
            {book.title}
          </h1>
        </Row>

        <Row>
          <Col>
            <img
              src={book.front}
              alt="img"
            ></img>
          </Col>
          <Col>
            <Stack gap={2}>
              <p className="border">
                <strong>Autor:</strong> {book.author}
              </p>
              <p className="border">
                <strong>Genero:</strong> {book.genre}
              </p>
              <p className="border">
                <strong>Descripcion:</strong> {book.description}
              </p>
              <p className="border">
                <strong>Editorial:</strong> {book.editorial}
              </p>
              <p className="border">
                <strong>Rate:</strong> ⭐⭐⭐⭐
              </p>
              <p className="border">
                <strong>Stock:</strong> {book.stock}
              </p>
              <p className="border">
                <strong>Precio:</strong> {book.price}
              </p>
              <div>
                {" "}
                <Button variant="primary">Agregar al carrito 🛒</Button>{" "}
              </div>
            </Stack>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Book;
