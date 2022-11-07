import React from "react";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div>
      <h1>AdminPanel</h1>
      <Link to="/admin/users">
        <p>Administrar usuarios</p>
      </Link>
      <Link to="/admin/books">
        <p>Administrar libros</p>
      </Link>
      <Link to="/admin/genres">
        <p>Administrar géneros</p>
      </Link>
    </div>
  );
};

export default AdminPanel;
