import { useEffect } from "react";
import { useState } from "react";
import { Container, Col, Row, Stack, Button } from "react-bootstrap";

function Book({ book }) {
  const [quantity, setQuantity] = useState(0);
  const [items, setItems] = useState([]);

  const handlePlus = () => {
    if (quantity < book.stock) setQuantity(quantity + 1);
  };

  const handleMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleItems = () => {
    let bookOrder = {quantity, bookId:book.id}
    console.log(bookOrder)
    setItems(items.push(bookOrder));
    console.log(items)
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div>
      <Container>
        <Row>
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
            {book.title}
          </h1>
        </Row>

        <Row>
          <Col>
            <img src={book.front} alt="img"></img>
          </Col>
          <Col>
            <Stack gap={1}>
              <p>
                <strong>Autor:</strong> {book.author}
              </p>
              <p>
                <strong>Genero:</strong> {book.genre}
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
                <strong>Precio:</strong> ${book.price}
              </p>
            </Stack>
          </Col>
        </Row>

        <Row>
          <div style={{ textAlign: "center", margin: "20px" }}>
            <p>
              <strong>Cantidad:</strong>
            </p>
            <p>
              <Button variant="color5" onClick={handleMinus}>
                -
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{quantity}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button variant="color5" onClick={handlePlus}>
                +
              </Button>
            </p>
            <Button variant="color5" onClick={handleItems}>
              Agregar al carrito
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Book;
