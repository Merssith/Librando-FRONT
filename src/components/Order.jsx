import React from "react";
import { useLocation } from "react-router";

const Order = () => {
  const order = useLocation().state;
  console.log(order);
  return (
    <div>
      <h5>Detalle de orden</h5>
      <p>Nombre: {order.user.name}</p>
    </div>
  );
};

export default Order;
