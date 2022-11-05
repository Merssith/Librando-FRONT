import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CartCanvas from "./CartCanvas";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Form,
  Offcanvas,
} from "react-bootstrap";

import { novelGenres } from "../utils";
import logo from "../assets/logo_texto_horizontal.png";

const NavBar = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  // para abrir y cerrar el panel lateral del carrito
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // funcionalidad botono "ir a pagar": cierra panel lateral y redirige
  const handleClick = () => {
    handleClose();
    navigate("/checkout");
  };

  return (
    <Navbar bg="light" expand="md">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt=""
            width="150"
            height="auto"
            className="d-inline-block align-text-top"
          />
        </Navbar.Brand>
        <NavDropdown title="Novelas" id="basic-nav-dropdown" className="me-4">
          {novelGenres.map((genre, i) => (
            <NavDropdown.Item key={i} as={Link} to={`/books/${genre}`}>
              {genre}
            </NavDropdown.Item>
          ))}
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to={"/books/all"}>
            Todos
          </NavDropdown.Item>
        </NavDropdown>

        <Navbar.Toggle aria-controls="search-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          <Form className="d-flex">
            <Form.Control
              size="sm"
              type="search"
              placeholder="Search"
              className="me-2 mt-2"
              aria-label="Search"
            />
            <Link to="/search">
              <Button variant="outline-success" size="sm" className="mt-2">
                Search
              </Button>
            </Link>
          </Form>
          <Nav>
            <Button
              variant="success"
              size="sm"
              onClick={handleShow}
              className="me-2 mt-2"
            >
              Carrito
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Carrito</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="justify-content-center">
                <CartCanvas />
                <Button onClick={handleClick} size="sm">
                  Ir a pagar
                </Button>
              </Offcanvas.Body>
            </Offcanvas>
            {user.id ? (
              <>
                <Button
                  size="sm"
                  variant="link"
                  className="me-2 mt-2"
                  onClick={() => navigate("/user")}
                >
                  {user.name}
                </Button>
                {/* cambiar boton */}
                <Button
                  variant="secondary"
                  size="sm"
                  className="me-2 mt-2"
                  onClick={() => navigate("/logout")}
                >
                  Log out
                </Button>
              </>
            ) : (
              <>
                <Button
                  size="sm"
                  className="me-2 mt-2"
                  onClick={() => navigate("/login")}
                >
                  Acceso
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="me-2 mt-2"
                  onClick={() => navigate("/signup")}
                >
                  Registro
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
