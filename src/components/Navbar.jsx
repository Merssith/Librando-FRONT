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

import useInput from "../hooks/useInput";
import { novelGenres } from "../utils";
import logo from "../assets/logo_marron.png";

const NavBar = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const query = useInput();
  const [show, setShow] = useState(false);


  // para abrir y cerrar el panel lateral del carrito
  const handleCanvasClose = () => setShow(false);
  const handleCanvasShow = () => setShow(true);

  // funcionalidad botono "ir a pagar": cierra panel lateral y redirige
  const handleCanvasSubmit = () => {
    handleCanvasClose();
    navigate("/checkout");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${query.value}`);
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
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
            
              size="sm"
              type="search"
              placeholder="Search"
              className="me-2 mt-2"
              aria-label="Search"
              {...query}
            />
            <Button
              variant="outline-success"
              type="submit"
              size="sm"
              className="mt-2"
            >
              Search
            </Button>
          </Form>
          <Nav>
            <Button
              variant="success"
              size="sm"
              onClick={handleCanvasShow}
              className="me-2 mt-2"
            >
              <i className="bi bi-cart3"></i>
            </Button>
            <Offcanvas show={show} onHide={handleCanvasClose} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Carrito</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="justify-content-center">
                <CartCanvas />
                <Button onClick={handleCanvasSubmit} size="sm">
                  Ir a pagar
                </Button>
              </Offcanvas.Body>
            </Offcanvas>
            {user.id ? (
              <>
                <Button
                  size="sm"
                  variant="light"
                  className="me-2 mt-2"
                  onClick={() => navigate("/user")}
                >
                  <i className="bi bi-person-circle"> </i>
                  {user.name}
                </Button>
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
