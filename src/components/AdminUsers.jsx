import React from "react";
import {
  FcAndroidOs,
  FcEmptyTrash,
  FcEditImage,
  FcFlashAuto,
  FcFlashOff,
} from "react-icons/fc";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get("http://localhost:3001/api/users")
      .then((res) => res.data)
      .then((usr) => {
        console.log("users", usr);
        setUsers(usr);
      });
  };

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:3001/api/users/delete/${id}`)
      .then(() => {
        alert("ELIMINADO!");
      })
      .then(() => {
        getUsers();
      });
  };

  

  return (
    <div>
      <Link to="createuser">
        <button>
          Create admin user
          <FcAndroidOs />
        </button>
      </Link>

      <div style={{ padding: "5%" }}>
        <div>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th>Id</th>
                <th>name</th>
                <th>lastname</th>
                <th>e-mail</th>
                <th>isAdmin</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr
                  key={i}
                  style={{ textAlign: "center", verticalAlign: "middle" }}
                >
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.lastname}</td>
                  <td>${user.email}</td>
                  <td>
                    {user.isAdmin === true ? <FcFlashAuto /> : <FcFlashOff />}
                  </td>
                  <td>
                    <Link to={`/admin/users/edit/${user.id}`}>
                      <FcEditImage />
                    </Link>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <FcEmptyTrash
                      onClick={() => {
                        deleteUser(user.id);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
