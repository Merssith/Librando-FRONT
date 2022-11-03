import { Container, Col, Row, Stack, Button } from "react-bootstrap";

function Book() {
  return (
    <div style={{ padding: "5%" }}>
      <Container>
        <Row blue>
          <h1 className="border" style={{ textAlign: "center" }}>
            TITULO
          </h1>
        </Row>

        <Row>
          <Col>
            <img
              src="https://m.media-amazon.com/images/I/61USGoQGftL._SL500_.jpg"
              alt="img"
            ></img>
          </Col>
          <Col>
            <Stack gap={2}>
              <p className="border">
                <strong>Autor:</strong> Pablo Neruda
              </p>
              <p className="border">
                <strong>Genero:</strong> Romance
              </p>
              <p className="border">
                <strong>Descripcion:</strong> Robert Louis Stevenson es un autor
                bestseller, ha escrito libros famosos como: El náufrago, El
                extraño caso del Dr. Jekyll y Mr Hyde, y La isla del tesoro. Sus
                libros han sido vendidos a nivel mundial, y son considerados
                como clásicos de literatura.
              </p>
              <p className="border">
                <strong>Editorial:</strong> Susaeta
              </p>
              <p className="border">
                <strong>Rate:</strong> ⭐⭐⭐⭐
              </p>
              <p className="border">
                <strong>Stock:</strong> 50 u
              </p>
              <p className="border">
                <strong>Precio:</strong> $250
              </p>
              <div>
                {" "}
                <Button variant="primary">Agregar al carrito 🛒</Button>{" "}
                <Button variant="secondary">Like ♥️</Button>
              </div>
            </Stack>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Book;
