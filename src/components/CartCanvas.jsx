import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const CartCanvas = () => {
  const list = JSON.parse(localStorage.getItem("cart"));
  console.log(list);

  const { cart } = useSelector((state) => state.cart);

  return (
    <Container fluid>
      <Row>
        {cart.map((product) => (
          <>
            <Col md={4}>
              <img src={product.front} alt="Portada"/>
            </Col>
            <Col md={8} className="mb-4">
              <p>
                <strong>Título:</strong> {product.title}
              </p>
              <p>
                <strong>Cantidad:</strong> {product.bookQuantity}
              </p>
              <p>
                <strong>Subtotal:</strong> $
                {product.price * product.bookQuantity}
              </p>
              <Button size="sm" variant="color5">
                Eliminar
              </Button>
            </Col>
          </>
        ))}
      </Row>
    </Container>
  );
};

export default CartCanvas;
