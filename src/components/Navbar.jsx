import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Nav>
          <Navbar.Collapse id="basic-navbar-nav">
            <NavDropdown
              title="Libros"
              id="basic-nav-dropdown"
              className="me-2"
            >
              <NavDropdown.Item href="/books/accion">Accion</NavDropdown.Item>
              <NavDropdown.Item href="/books/terror">Terror</NavDropdown.Item>
              <NavDropdown.Item href="/books/romance">Romance</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/books/all">Todos</NavDropdown.Item>
            </NavDropdown>
            <Form className="d-flex">
              <Form.Control
                size="sm"
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" size="sm">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Nav>

        <Nav>
          <Navbar.Brand href="#home">LIBRANDO</Navbar.Brand>
        </Nav>

        <Nav>
          <Nav.Link href="/checkout">
            <img
              src="https://w7.pngwing.com/pngs/225/984/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping.png"
              width="auto"
              height="30"
              className="d-inline-block align-top"
              alt="Checkout"
            />
          </Nav.Link>
          <Nav.Link href="/login">
            <Button size="sm">Acceso</Button>
          </Nav.Link>
          <Nav.Link href="/signup">
            <Button variant="secondary" size="sm">
              Registro
            </Button>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
