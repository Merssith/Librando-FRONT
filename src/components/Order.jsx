import React from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import useInput from "../hooks/useInput";
import { Button, Form } from "react-bootstrap";

const Order = ({ user }) => {
  const order = useLocation().state;
  const status = useInput();
  const navigate = useNavigate();

  const changeStatus = () => {
    const statusId = parseInt(status.value);

    statusId
      ? axios
          .put(`http://localhost:3001/api/order/change/${order.id}`, {
            statusId,
          })
          .then((res) => res.data)
          .then(navigate("/admin/orders"))
      : alert("Seleeciona una opción valida");
  };

  return (
    <>
      <h5>
        <strong>Detalle de orden</strong>
      </h5>
      <ul style={{ listStyleType: "none" }}>
        <h6>
          <strong>Usuario:</strong>
        </h6>
        <li clasName="ps-3">
          Nombre: {order.user.name} {order.user.lastname}
        </li>
        <li>Email: {order.user.email}</li>
        <li>DNI: {order.user.dni}</li>
        <li>Dirección: {order.user.address.split(",").join(" ")}</li>
      </ul>
      <ul style={{ listStyleType: "none" }}>
        <h6>
          <strong>Pedido:</strong>
        </h6>
        <li>Fecha: {new Date(order.createdAt).toDateString()}</li>
        <li>Pago: {order.payment.name}</li>
        <li>Total: ${order.total}</li>
        <li>Estado: {order.status.name}</li>
        {user.isAdmin ? (
          <>
            <li>
              Modificar estado:
              <Form.Select size="sm" {...status}>
                <option value="0">Seleccione una opción:</option>
                <option value="1">Confirmada</option>
                <option value="2">Pendiente</option>
                <option value="3">Rechazada</option>
              </Form.Select>
              <Button size="sm" className="mt-2" onClick={changeStatus}>
                Aceptar
              </Button>
            </li>
          </>
        ) : (
          ""
        )}
      </ul>
    </>
  );
};

export default Order;
