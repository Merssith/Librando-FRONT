import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button, Card, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import StarRating from "./StarRating/StarRating";

const Review = ({ book }) => {
  const [rating, setRating] = useState();
  const newRating = (rate) => {
    setRating(rate);
  };
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
  const [comprado, setComprado] = useState(false);
  const [revisado, setRevisado] = useState(false);
  const [reviews, setReviews] = useState([]);
  console.log(reviews);

  // //Crear review
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);

    axios
      .post(`http://localhost:3001/api/reviews/new`, {
        comment: e.target[0].value,
        rate: rating,
        userId: user.id,
        bookId: book.id,
      })
      .then((res) => {
        alert(`RESEÑA CREADA: ${res.data.title} ✅`);
        navigate(`/book/${res.data.id}`);
      });
  };

  const buscarComprados = () => {
    for (let i = 0; i < orders.length; i++) {
      for (let j = 0; j < orders[i].book_orders.length; j++) {
        if (orders[i].book_orders[j].bookId === book.id) {
          return true;
        }
      }
    }
    return false;
  };

  const buscarRevisado = () => {
    for (let i = 0; i < reviews.length; i++) {
      if (reviews[i].userId === user.id) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
   setComprado (buscarComprados());
   setRevisado  (buscarRevisado());
  }, [orders, reviews]);

  // Traer todas las reseñas de un libro

  useEffect(() => {
    if (user && book)
      axios
        .get(`http://localhost:3001/api/order/userOrders/${user.id}`)
        .then((res) => res.data)
        .then((orders) => setOrders(orders))
        // .then(() => setComprado(buscarComprados()))
        .then(() =>
          axios
            .get(`http://localhost:3001/api/reviews/${book.id}`)
            .then((res) => res.data)
            .then((reviews) => setReviews(reviews))
            // .then(() => setRevisado(buscarRevisado()))
        );
  }, [user, book]);

  // //traer usuarios por id para ver sus reviews
  // axios
  //   .get(`http://localhost:3001/api/users/get/${reviews[0].id}`)
  //   .then((res) => console.log(res.data));

  return (
    //input para agregar review
    <>
      <p>
        Lo compro? {comprado.toString().toUpperCase()} Hizo review?
        {revisado.toString().toUpperCase()}
      </p>
      {comprado && !revisado ? (
        <Form onSubmit={handleSubmit} className="mt-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <h3>Dejar reseña</h3>
            </Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
          </Form.Group>

          <h3>Puntuacion</h3>
          <StarRating
            count={5}
            value={rating}
            newRating={newRating}
            edit={true}
          />
          <div>{rating}</div>
          <hr />
          {/* <h2>Puntuacion no editable (fija)</h2>
       <StarRating count={5} value={3} newRating={newRating} edit={false}/>
       <br></br> */}

          <Button variant="color5" type="submit">
            Enviar
          </Button>
        </Form>
      ) : (
        ""
      )}

      <br></br>
      {/* //reviews ya dejadas */}

      {reviews.map((review, i) => {
        return (
          <Card key={i}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>{review.userId}</strong>
              </ListGroup.Item>
              <ListGroup.Item>{review.comment}</ListGroup.Item>
            </ListGroup>
            <p>Puntuacion: {review.rate} </p>
          </Card>
        );
      })}
    </>
  );
};

//color={{filled: "rgb(136 87 25)", unfilled: "rgb(214 184 147)"}}
//count={10}
export default Review;
