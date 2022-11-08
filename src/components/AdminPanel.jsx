import React from "react";
import { Link } from "react-router-dom";

import { ListGroup } from "react-bootstrap";

const AdminPanel = () => {
  return (
    <>
      <h5>Panel de Administrador</h5>
      <ListGroup variant="flush">
        <ListGroup.Item
          action
          as={Link}
          to="/admin/users"
          className="text-bg-secondary d-flex justify-content-md-start justify-content-sm-center"
        >
          <i className="bi bi-people"> Usuarios</i>
        </ListGroup.Item>

        <ListGroup.Item
          action
          as={Link}
          to="/admin/books"
          className="text-bg-secondary d-flex justify-content-md-start justify-content-sm-center"
        >
          <i className="bi bi-book"> Libros</i>
        </ListGroup.Item>

        <ListGroup.Item
          action
          as={Link}
          to="/admin/genres"
          className="text-bg-secondary d-flex justify-content-md-start justify-content-sm-center"
        >
          <i className="bi bi-bookmarks"> Generos</i>
        </ListGroup.Item>

        <ListGroup.Item
          action
          as={Link}
          to="/admin/orders"
          className="text-bg-secondary d-flex justify-content-md-start justify-content-sm-center"
        >
          <i className="bi bi-list-ul"> Ordenes</i>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default AdminPanel;
