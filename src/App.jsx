import React from "react";
import { Routes, Route } from "react-router";
import Grid from "./commons/Grid";
import Home from "./components/Home";
import Content from "./components/Content.jsx"



import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";





const App = () => {
  return (
    <div>

      <Navbar />
      <Container fluid="md">
        <Row className="justify-content-md-center">
          {/*<Col md={4}> Para mostrar Sidebar si usuario es administrador </Col>*/}
          <Col md={8}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/book/:type" element={<Grid />} />
              <Route path="/book/:id" element={<Content />} />
            </Routes>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
