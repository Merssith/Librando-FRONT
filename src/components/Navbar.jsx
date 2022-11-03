import React from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Form,
  Row,
} from "react-bootstrap";

const NavBar = () => {
  const user = useSelector((state) => state.user);

  return (
    <Container fluid>
      <Row>
        <Nav className="justify-content-center bg-light">
          <Navbar.Brand href="/home">
            <img
              src=""
              alt=""
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            Librando
          </Navbar.Brand>
        </Nav>
      </Row>
      <Row>
        <Navbar bg="light" expand="sm">
          <Container fluid>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <NavDropdown
                  title="Libros"
                  id="basic-nav-dropdown"
                  className="me-2"
                >
                  <NavDropdown.Item href="/books/accion">
                    Accion
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/books/terror">
                    Terror
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/books/romance">
                    Romance
                  </NavDropdown.Item>
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
              </Nav>
            </Navbar.Collapse>
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
              {user.id ? (
                <>
                  <Nav.Link href="/user">
                    <Button size="sm">{user.name}</Button> {/* cambiar boton */}
                  </Nav.Link>
                  <Nav.Link href="/logout">
                    <Button variant="secondary" size="sm">
                      Log out
                    </Button>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="/login">
                    <Button size="sm">Acceso</Button>
                  </Nav.Link>
                  <Nav.Link href="/signup">
                    <Button variant="secondary" size="sm">
                      Registro
                    </Button>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Container>
        </Navbar>
      </Row>
    </Container>
  );
};

export default NavBar;
