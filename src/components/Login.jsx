import React from "react";
import { useNavigate } from "react-router";

import useInput from "../hooks/useInput";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Login = () => {
  const email = useInput();
  const password = useInput();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("pendiente funcionalidad");
    navigate("/");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <FloatingLabel label="Enter email" className="mb-3">
          {/*incluimos propiedades value y onChange de email => useInput hook => (useState) */}
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...email}
            required
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <FloatingLabel label="Password" className="mb-3">
          {/*incluimos propiedades value y onChange de password => useInput hook => (useState) */}
          <Form.Control
            type="password"
            placeholder="Password"
            {...password}
            required
          />
        </FloatingLabel>
      </Form.Group>

      <Button variant="primary" size="lg" type="submit">
        Log In
      </Button>
    </Form>
  );
};

export default Login;
