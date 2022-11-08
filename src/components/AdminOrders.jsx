import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";

import { Link } from "react-router-dom";

import { Table } from "react-bootstrap";

const AdminOrders = () => {
  //const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user.isAdmin) navigate("/");
    /* axios
      .get("http://localhost:3001/api/order")
      .then((orders) => setOrders(orders)); */
  });

  const orders = [
    {
      id: 1,
      total: 21000,
      createdAt: "2022-11-07T15:23:38.875Z",
      updatedAt: "2022-11-07T15:23:38.875Z",
      userId: 1,
      statusId: 1,
      paymentMethodId: 1,
      book_orders: [
        {
          id: 1,
          quantity: 2,
          total: 2000,
          orderId: 1,
          bookId: 1,
          book: {
            id: 1,
            title: "Robinson Crusoe",
            author: "Daniel Defoe",
            genre: "Novela de Aventuras",
            description:
              "Obedecer a los padres siempre ha sido lo correcto, eso trae una vida de mucha tranquilidad y sensatez, no hacerlo es todo lo contrario, trae desgracia y muerte. Este principio lo tenía en mente el autor Daniel Defoe cuando escribió su novela Robinson Crusoe. ¿Quién es Robinson Crusoe? Es un personaje que emula la terquedad de la juventud, nació en Nueva York, en medio de una familia acaudalada, el cual a medida que fue creciendo mostró su interés por navegar en el mar, sin saber que a futuro sería una gran desdicha. Su padre siempre lo había encaminado por las leyes, para que fuera un abogado y se dedicara a este oficio, pero Crusoe se niega abiertamente y decide hacer lo que en realidad quería: ir a navegar, por lo que a los 19 años realiza su primer y único viaje, donde experimentará una realidad que jamás pensó que viviría.",
            editorial: "Om",
            front:
              "https://infolibros.org/wp-content/uploads/2020/07/Robinson-Crusoe.jpg",
            price: 2350,
            stock: 10,
            deleted: false,
          },
        },
        {
          id: 2,
          quantity: 1,
          total: 2000,
          orderId: 1,
          bookId: 56,
          book: {
            id: 56,
            title: "El fantasma de la ópera",
            author: "Gaston Leroux",
            genre: "Novela Gótica",
            description:
              "El fantasma de la ópera (Le Fantôme de l’Opéra) es una novela de Gastón Leroux inspirada en la también novela Trilby de George du Maurier, que había sido publicada por entregas en la Harper’s Magazine en 1894 y después en forma de libro en 1895. La novela de Leroux se publicó en entregas semanales desde el 19 de noviembre de 1909, y ha sido adaptada numerosas veces para películas y actuaciones en teatros. El fantasma de la ópera es una novela que combina romance, terror, misterio y tragedia. La historia trata de un hombre misterioso que aterroriza la Ópera de París para atraer la atención de una joven vocalista a la que ama. Novela que mezcla la literatura gótica con la aventura de carácter policíaco aunque no haya un detective protagonista, sino un misterio que descifrar, El fantasma de la Ópera (1910) es la historia de un tenebroso personaje, quien, a pesar del tormento que le provoca su fealdad, lucha por vivir para satisfacer su pasión por la belleza. En esta popular obra, llevada numerosas veces al cine y al escenario, Gaston Leroux (1868-1927) aprovechó numerosos recursos que le eran familiares por su condición de periodista para dar verosimilitud a un relato en el cual la combinación entre su intrigante protagonista y la ambientación dentro del mundo del teatro y las bambalinas despliega un atractivo juego de posibilidades para la imaginación.",
            editorial: "Alianza",
            front:
              "https://jackmoreno.files.wordpress.com/2013/12/el-fantasma-de-la-c3b3pera.jpg",
            price: 1164,
            stock: 10,
            deleted: false,
          },
        },
        {
          id: 3,
          quantity: 5,
          total: 2000,
          orderId: 1,
          bookId: 32,
          book: {
            id: 32,
            title: "Pinocho",
            author: "Carlo Collodi",
            genre: "Cuentos de Hadas",
            description:
              "Pinocho es mucho más que uno de los grandes clásicos de la literatura italiana: se trata de una obra esencial por su deliciosa mezcla de crueldad; humor y fantasía. La marioneta Pinocho aprende de sus errores; enmienda su inconstancia y se convierte en un ser humano de provecho responsable gracias a los buenos consejos del Grillo Parlante; que es la voz de su conciencia; y los desvelos de Geppetto y el Hada; que personifican el amor paterno y el materno; respectivamente. Carlo Collodi nos regala una parábola hermosa e imperecedera de la redención y de la madurez que pueden disfrutar los lectores de todas las edades.",
            editorial: "Alma",
            front:
              "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/691431.jpg",
            price: 3702,
            stock: 10,
            deleted: false,
          },
        },
      ],
      user: {
        id: 1,
        name: "Mechi",
        lastname: "Salcedo",
        email: "mercedes.salcedo@gmail.com",
        dni: 34782316,
        address: "Tejedor 55",
        isAdmin: false,
      },
      status: { id: 1, name: "Pedido confirmado" },
      payment: { id: 1, name: "VISA", logo: "www.visa.com" },
    },
  ];

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
                  <td>{order.payment.logo}</td>
                  <td>{new Date(order.createdAt).toDateString()}</td>
                  <td>{order.total}</td>
                  <td className="text-center">
                    <Link to={`/admin/orders/${order.id}`}>
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
