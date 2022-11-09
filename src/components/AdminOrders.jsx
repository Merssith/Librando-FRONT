import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";

import { Link } from "react-router-dom";

import { Table } from "react-bootstrap";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user.isAdmin) navigate("/");
    axios
      .get("http://localhost:3001/api/order")
      .then((res) => res.data)
      .then((orders) => setOrders(orders));
  }, []);

  return (
    <>
      <h5>Listado de Géneros</h5>
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
          {orders.length ? (
            orders.map((order, i) => {
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
  );
};

export default AdminOrders;
