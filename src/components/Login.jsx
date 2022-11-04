import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { sendLoginRequest } from "../state/user";
import axios from "axios"
import useInput from "../hooks/useInput";

import { Button, Form, FloatingLabel } from "react-bootstrap";

const Login = () => {
  const email = useInput();
  const password = useInput();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // si ya hay un usuario logueado redirige a home
  useEffect(() => {
    if (user.id) navigate("/");
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // seteamos el user en redux y redirigimos al home si todo va bien
    dispatch(sendLoginRequest({email: email.value, password: password.value}))
    .then(()=>navigate("/"))
  };

  return (
    <>
      <h2 className="mb-5">Login to your account</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <FloatingLabel label="Enter email" className="mb-3">
            <Form.Control
              type="email"
              placeholder="Enter email"
              // incluimos propiedades value y onChange de email => useInput hook => (useState)
              {...email}
              required
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <FloatingLabel label="Password" className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              {...password}
              required
            />
          </FloatingLabel>
        </Form.Group>

        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
    </>
  );
};

export default Login;
