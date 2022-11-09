/* import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form, Row, Col, FloatingLabel, InputGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  //traigo todos los libros para editarlos
  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = () => {
    axios.get(`http://localhost:3001/api/users/${id}`)
    .then((res) => res.data)
    .then((user) => {
        console.log(user)
        setUser(user)
    })
  };

  //edita el libro ya existente
  const handleSubmit = (e) => {
    e.preventDefault();

    //edito libro ya existente
    if (id) {
      // console.log(e.target[0].value);

      axios
        .put(`http://localhost:3001/api/users/change/${id}`, {
          title: e.target[0].value,
          author: e.target[1].value,
          genre: e.target[2].value,
          description: e.target[3].value,
          editorial: e.target[4].value,
          front: e.target[5].value,
          stock: e.target[6].value,
          price: e.target[7].value,
        })
        .then(() => {
          alert(`Modificado!: ${user.name} ✅`);
        })
        .then(() => {
          navigate(`/user/${id}`);
        });
    }

    //creo libro
   
    
  }

  return (
    <>
      
      {id ? (
        <h2 className="mb-5">
          Editar <i class="bi bi-pencil"></i>
        </h2>
      ) : (
        ""
      )}
          <Form  onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Nombre</Form.Label>
            <Form.Control required type="text" placeholder="Nombre"  />
            <Form.Control.Feedback type="invalid">
              Por favor introduce un nombre.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02" >
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
          {user.isAdmin ? (
            <Form.Check
              label="Permisos de administrador"
              value={admin}
              onChange={() => setAdmin(!admin)}
            />
          ) : (
            ""
          )}
        </Form.Group>
        <Button variant="color5" type="submit">
          Registro
        </Button>
      </Form>
    </>
  );
};

export default EditUser;
 */