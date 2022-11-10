import axios from "axios";
import React from "react";
import { Form, Button, Card, ListGroup } from "react-bootstrap";
// import { Navigate } from "react-router";



const Review = () => {

//   const handleSubmit = (e) => {
//     console.log(e.target[0].value);
//     e.preventDefault()

//       axios
//         .post(`http://localhost:3001/api/reviews/new`, {
//           comment: e.target[0].value
//         })
//         .then((res) => {
//           alert(`NUEVA CREADO: ${res} ✅`);
//           Navigate(`/book/${res.data.id}`);
//         });
//     }
  


// onSubmit={handleSubmit}

  return (
    //input para agregar review
    <>
      <Form  className="mt-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <h5>Dejar reseña</h5>
          </Form.Label>
          <Form.Control type="text" placeholder="Enter email" />
        </Form.Group>
        <Button variant="color5" type="submit">
          Enviar
        </Button>
      </Form>
      <br></br>
      {/* //reviews ya dejadas */}

      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Juanito Acosta</strong>
          </ListGroup.Item>
          <ListGroup.Item>Reseña</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default Review;
