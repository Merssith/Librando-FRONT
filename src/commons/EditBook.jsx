import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, FloatingLabel, InputGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";

const EditBook = () => {
  const { id } = useParams();
  const [libro, setLibro] = useState({});
  const navigate = useNavigate();

  //traigo todos los libros para editarlos
  useEffect(() => {
    getBookById();
  }, []);

  const getBookById = () => {
    axios.get(`http://localhost:3001/api/books/${id}`).then((res) => {
      setLibro(res.data);
    });
  };

  //edita el libro ya existente
  const handleSubmit = (e) => {
    e.preventDefault();

    //edito libro ya existente
    if (id) {
      // console.log(e.target[0].value);

      axios
        .put(`http://localhost:3001/api/books/change/${id}`, {
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
          alert(`LIBRO EDITADO!: ${libro.title} ✅`);
        })
        .then(() => {
          navigate(`/book/${id}`);
        });
    }

    //creo libro
    else {
      axios
        .post(`http://localhost:3001/api/books/create`, {
          title: e.target[0].value,
          author: e.target[1].value,
          genre: e.target[2].value,
          description: e.target[3].value,
          editorial: e.target[4].value,
          front: e.target[5].value,
          stock: e.target[6].value,
          price: e.target[7].value,
        })
        .then((res) => {
          alert(`LIBRO NUEVO CREADO: ${res.data.title} ✅`);
          navigate(`/book/${res.data.id}`);
        });
    }
  };

  return (
    <>
      {" "}
      {id ? (
        <h2 className="mb-5">
          EDITAR LIBRO <i class="bi bi-pencil"></i>
        </h2>
      ) : (
        <h2 className="mb-5">
          AGREGAR NUEVO LIBRO <i class="bi bi-file-earmark-plus"></i>
        </h2>
      )}
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text>Titulo</InputGroup.Text>
          <Form.Control defaultValue={libro.title} />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Autor</InputGroup.Text>
          <Form.Control defaultValue={libro.author} />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Genero</InputGroup.Text>
          <Form.Control defaultValue={libro.genre} />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Descripcion</InputGroup.Text>
          <Form.Control defaultValue={libro.description} />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Editorial</InputGroup.Text>
          <Form.Control defaultValue={libro.editorial} />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Portada</InputGroup.Text>
          <Form.Control defaultValue={libro.front} />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Stock</InputGroup.Text>
          <Form.Control defaultValue={libro.stock} />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control defaultValue={libro.price} />
          <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>
        <Button variant="primary" type="submit">
          Listo
        </Button>{" "}
      </Form>
    </>
  );
};

export default EditBook;
