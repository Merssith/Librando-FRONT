import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import { Table } from "react-bootstrap";

const User = ({ user }) => {
  const navigate = useNavigate();
  console.log(user);

  /* useEffect(() => {
    axios.get("http://localhost:3001/api/users");
  }); */
  return user.id ? (
    <>
      <h5>
        <strong>Perfil de usuario</strong>
      </h5>
      <h6>
        <strong>Nombre</strong>: {user.name}
      </h6>
      <h6>
        <strong>Apellido</strong>: {user.lastname}
      </h6>
      <h6>
        <strong>DNI</strong>: {user.dni}
      </h6>
      <h6>
        <strong>Email</strong>: {user.email}
      </h6>
      <h6>
        <strong>Direccion</strong>: {user.address}
      </h6>
      <h6>
        <strong>Historial de Ordenes</strong>
      </h6>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Estado</th>
            <th>Pago</th>
            <th>Fecha</th>
            <th>Total</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>
          {user.orders ? (
            user.orders.map((order, i) => {
              return (
                <tr key={i}>
                  <td>{order.id}</td>
                  <td>{order.user.name}</td>
                  <td>{order.user.lastname}</td>
                  <td>{order.status.name}</td>
                  <td html={order.payment.logo}></td>
                  <td>{new Date(order.createdAt).toDateString()}</td>
                  <td>{order.total}</td>
                  <td className="text-center">
                    <Link to={`/admin/orders/${order.id}`} state={order}>
                      <i className="bi bi-ticket-detailed"></i>
                    </Link>
                  </td>
                </tr>
              );
            })
          ) : (
            <></>
          )}
        </tbody>
      </Table>
    </>
  ) : (
    navigate("/")
  );
};

export default User;
/* 
async function createData() {
  await createGenres();
  await createBooks();
  await createUsers();
  await createPayments();
  await createStatus();
  await createOrders();
  await createReviews();
  await createBookOrders();
}

createData(); */
