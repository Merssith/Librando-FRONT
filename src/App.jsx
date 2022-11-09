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
import User from "./components/User";
import Cart from "./components/Cart";
import Order from "./components/Order";
import AdminUsers from "./components/AdminUsers";
import AdminBooks from "./components/AdminBooks";
import AdminGenres from "./components/AdminGenres";
import AdminOrders from "./components/AdminOrders";

import { Container, Row, Col } from "react-bootstrap";
import { getUserCookie } from "./state/user";
import EditBook from "./commons/EditBook";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserCookie());
  }, [dispatch]);

  const user = useSelector((state) => state.user);

  return (
    <div className="app">
      <Navbar />
      <Row className="justify-content-md-center min-heigh-view-port">
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
              <Route path="/user" element={<User />} />
              <Route path="/book/:id" element={<Content />} />
              <Route path="/books/:type" element={<Grid />} />
              <Route path="/search/:query" element={<Grid />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/checkout" element={<Cart />} />
              <Route path="/admin/users" element={<AdminUsers />} />
              <Route path="/admin/books" element={<AdminBooks />} />
              <Route path="/admin/books/edit/:id" element={<EditBook />} />
              <Route path="/admin/books/create" element={<EditBook />} />
              <Route path="/admin/genres" element={<AdminGenres />} />
              <Route path="/admin/orders" element={<AdminOrders />} />
              <Route path="/admin/orders/:id" element={<Order />} />
              <Route path="/admin/users/createuser" element={<Signup />} />
            </Routes>
          </Container>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default App;
