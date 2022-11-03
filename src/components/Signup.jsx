import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { sendLoginRequest } from "../state/user";
import axios from "axios";

import useInput from "../hooks/useInput";
import { joinAddress } from "../utils";

import { Button, Col, Row, Form } from "react-bootstrap";

const Signup = () => {
  const [validated, setValidated] = useState(false);
  const [address, setAddress] = useState("");
  const name = useInput();
  const lastname = useInput();
  const dni = useInput();
  const email = useInput();
  const password = useInput();
  const dir = useInput();
  const num = useInput();
  const dpto = useInput();
  const city = useInput();
  const state = useInput();
  const cpa = useInput();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      setAddress(
        joinAddress([
          dir.value,
          num.value,
          dpto.value,
          city.value,
          state.value,
          cpa.value,
        ])
      );
      axios
        .post("/register", {
          name,
          lastname,
          email,
          password,
          dni,
          address,
        })
        .then((res) => res.data)
        .then(({ email, password }) => {
          // tras el registro hacemos login automatico y redirigimos a home
          dispatch(sendLoginRequest({ email, password }));
          navigate("/");
        })
        .catch(() => alert("Failed register!"));
    }
    setValidated(true);
  };

  return (
    <>
      <h2 className="is-title is-size-2">Sign up for an account</h2>
      <p className="mb-5">Fill out the form below to get started.</p>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Nombre</Form.Label>
            <Form.Control required type="text" placeholder="Nombre" {...name} />
            <Form.Control.Feedback type="invalid">
              Por favor introduce un nombre.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Apellido"
              {...lastname}
            />
            <Form.Control.Feedback type="invalid">
              Por favor introduce un apellido.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>DNI</Form.Label>
            <Form.Control required type="text" placeholder="Nombre" {...dni} />
            <Form.Control.Feedback type="invalid">
              Por favor introduce un DNI.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Email"
              {...email}
            />
            <Form.Control.Feedback type="invalid">
              Por favor introduce mail ejemplo@ejemplo.com
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              {...password}
            />
            <Form.Control.Feedback type="invalid">
              Por favor introduce una contraseña.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="8" controlId="validationCustom04">
            <Form.Label>Direccion</Form.Label>
            <Form.Control
              type="text"
              placeholder="Direccion"
              required
              {...dir}
            />
            <Form.Control.Feedback type="invalid">
              Por favor introduce una direccion.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom05">
            <Form.Label>Num.</Form.Label>
            <Form.Control type="text" placeholder="Num." required {...num} />
            <Form.Control.Feedback type="invalid">
              Por favor introduce un numero.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom06">
            <Form.Label>Dpto.</Form.Label>
            <Form.Control type="text" placeholder="Dpto." {...dpto} />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom07">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control type="text" placeholder="Ciudad" required {...city} />
            <Form.Control.Feedback type="invalid">
              Por favor introduce una ciudad.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom08">
            <Form.Label>Provincia</Form.Label>
            <Form.Control
              type="text"
              placeholder="Provincia"
              required
              {...state}
            />
            <Form.Control.Feedback type="invalid">
              Por favor introduce una provincia.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom09">
            <Form.Label>CPA</Form.Label>
            <Form.Control type="text" placeholder="CPA" required {...cpa} />
            <Form.Control.Feedback type="invalid">
              Por favor introduce un codigo postal.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Acepto términos y condiciones"
            feedback="Debes aceptar para poder registrarte."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Registro
        </Button>
      </Form>
    </>
  );
};

export default Signup;
