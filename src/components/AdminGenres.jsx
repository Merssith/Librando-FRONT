import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { InputGroup, Form, Button, Table } from "react-bootstrap";
import useInput from "../hooks/useInput";

const AdminGenres = () => {
  //const [genres, setGenres] = useState([]);
  const [edit, setEdit] = useState(0);
  const newGenre = useInput();
  const updateGenre = useInput();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user.isAdmin) navigate("/");
    fetchGenres();
  });

  const fetchGenres = () => {
    /* axios
      .get("http://localhost:3001/api/genre")
      .then((genres) => setOrders(genre)); */
  };

  const addGenre = () => {
    alert("Añadir " + newGenre.value);
    /* axios
      .create(`http://localhost:3001/api/genre/`, newGenre.value)
      .then(() => fetchGenres()); */
  };

  const editGenre = (id) => {
    alert("Modificar " + id);
    /* axios
      .put(`http://localhost:3001/api/genre/${id}`, updateGenre.value)
      .then(() => fetchGenres()); */
    setEdit(0);
  };
  const deleteGenre = (id) => {
    alert("Eliminar " + id);
    /* axios
      .delete(`http://localhost:3001/api/genre/${id}`, genre.value)
      .then(() => fetchGenres()); */
  };

  const genres = [
    { id: 1, name: "Aventura" },
    { id: 2, name: "Cuentos de Hadas" },
    { id: 3, name: "Gótica" },
    { id: 4, name: "Policiaca" },
    { id: 5, name: "Romance Paranormal" },
  ];

  return (
    <>
      <h5>Listado de Géneros</h5>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th className="text-center">Editar</th>
            <th className="text-center">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {genres.length ? (
            genres.map((genre, i) => {
              return (
                <tr key={i}>
                  <td>{genre.id}</td>
                  <td>{genre.name}</td>
                  <td className="text-center">
                    <i
                      className="bi bi-pencil text-primary"
                      style={{ cursor: "pointer" }}
                      onClick={() => setEdit(genre.id)}
                    ></i>
                  </td>
                  <td className="text-center">
                    <i
                      className="bi bi-trash3 text-danger"
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteGenre(genre.id)}
                    ></i>
                  </td>
                </tr>
              );
            })
          ) : (
            <></>
          )}
        </tbody>
      </Table>
      <Form className="mb-3">
        <Form.Control
          required
          placeholder="Genero"
          aria-label="Recipient's username"
          {...newGenre}
        />
        <Button variant="primary" type="submit" onClick={addGenre}>
          <i className="bi bi-bookmark-plus"> Añadir</i>
        </Button>
      </Form>
      {edit ? (
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Genero"
            aria-label="Recipient's username"
            {...updateGenre}
          />
          <Button variant="primary" onClick={() => editGenre(edit)}>
            <i className="bi bi-bookmark-plus"> Modificar</i>
          </Button>
        </InputGroup>
      ) : (
        ""
      )}
    </>
  );
};

export default AdminGenres;
