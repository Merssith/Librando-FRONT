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
/*   const [name, setName] = useState("")
  const [lastname, setlastname] = useState("")
  const [email, setEmail] = useState("")
  const [isAdmin, setIsAdmin] = useState(false) */

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/users")
      .then((res) => res.data)
      .then((usr) => {
        console.log("users", usr);
        setUsers(usr);
      });
  }, []);


/*   const handleName = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handleLast = (e) => {
    e.preventDefault()
    setlastname(e.target.value)
  }

  const handleEmail = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
  }

  const handleAdmin = (e) => {
    e.preventDefault()
    setIsAdmin(e.target.value)
  }


  const handlePut = () => {
    const {name, lastname, email, isAdmin} = user
    console.log(user)
    axios.put("http://localhost:3001/api/users/:id", user)
    .then((res) => res.data)
    .then((us) => console.log(us))
  }
 */

  return (
    <div>
      <Link to="createuser">
        <button>
          Create admin user
          <FcAndroidOs />
        </button>
      </Link>
      <br />
      <br />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>E-mail</th>
            <th>lastname</th>
            <th>isAdmin</th>
            <th className="text-center">Editar</th>
            <th className="text-center">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {users.length ? (
            users.map((user, i) => {
              return (
                
                <tr key={i}>
                  
                  <td  >{user.id}</td>
                  <td /* onClick={handleName} */ >{user.name}</td>
                  <td /* onClick={handleEmail} */ >{user.email}</td>
                  <td /* onClick={handleLast}  */>{user.lastname}</td>
                  <td /* onClick={handleAdmin}  */className="text-center" >
                    {user.isAdmin === true ? <FcFlashAuto /> : <FcFlashOff />}
                  </td>
                  

                  <td /* onClick={handlePut}  */className="text-center">{<FcEditImage />}</td>
                  <td className="text-center">{<FcEmptyTrash />}</td>
                </tr>
              );
            })
          ) : (
            <></>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminUsers;
