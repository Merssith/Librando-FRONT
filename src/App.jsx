import React from "react";
import { Routes, Route } from "react-router";
import Grid from "./commons/Grid";
import Home from "./components/Home";
import Content from "./components/Content.jsx";
//import { useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";

import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  //const user = useSelector((state) => state.user);

  return (
    <div>
      <Navbar />
      <Container fluid="md">
        <Row className="justify-content-md-center my-4">
          {/*<Col md={4}> Para mostrar Sidebar si usuario es administrador </Col>*/}
          <Col md={9}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />  
              <Route path="/book/:id" element={<Content />} />
              <Route path="/books/:type" element={<Grid />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
