import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import ListOrders from "../commons/ListOrders";

const User = ({ user }) => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  console.log(orders);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/order/userOrders/${user.id}`)
      .then((res) => res.data)
      .then((orders) => setOrders(orders));
  }, [user]);

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
      <ListOrders orders={orders} />
    </>
  ) : (
    navigate("/")
  );
};

export default User;
