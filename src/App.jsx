import React, { useEffect } from "react";
import { Routes, Route } from "react-router";
import Grid from "./commons/Grid";
import Home from "./components/Home";
import Content from "./components/Content.jsx";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";
import AdminPanel from "./components/AdminPanel";
import Cart from "./components/Cart";

import { Container, Row, Col } from "react-bootstrap";
import { getUserCookie } from "./state/user";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserCookie())
      .then((res) => res.payload)
      .catch((error) => console.error());
  });

  /*   const user = {
    id: 1,
    isAdmin: true,
  }; */

  // user.isAdmin = false;

  return (
    <div>
      <Navbar />
      <Row className="justify-content-md-center">
        {user.isAdmin ? (
          <Col md={3} className="text-bg-secondary p-3">
            <AdminPanel />
          </Col>
        ) : (
          ""
        )}
        <Col md={9}>
          <Container fluid="md my-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/book/:id" element={<Content />} />
              <Route path="/books/:type" element={<Grid />} />
              <Route path="/search/:type" element={<Grid />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/checkout" element={<Cart />} />
            </Routes>
          </Container>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default App;
